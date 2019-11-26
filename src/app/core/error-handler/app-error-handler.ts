import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector) {
  }

  async  handleError(error: any) {
    const BAD_REQUEST = 400;
    const UNAUTHORIZED = 401;
    const FORBIDDEN = 403;
    const NOT_FOUND = 404;
    let errorHandler: any;

    let message: string;
    let title: string;

    const router = this.injector.get(Router);

    errorHandler = await this.normalizeError(error);

    switch (errorHandler.constructor) {
      // Error Backend
      case HttpErrorResponse:

        switch (errorHandler.status) {
          case 0:
            message = 'Server not found';
            title = 'Server not found';
            break;
          case BAD_REQUEST:
            message = this.normalizeMessageError(errorHandler.error);
            title = 'Bad request';
            break;
          case UNAUTHORIZED:
            message = this.normalizeMessageError(errorHandler.error);
            title = 'Unauthorized';
            break;
          case FORBIDDEN:
            message = this.normalizeMessageError(errorHandler.error);
            title = 'Forbidden';
            break;
          case NOT_FOUND:
            message = this.normalizeMessageError(errorHandler.error);
            title = 'Not found';
            break;
          default:
            message = this.normalizeMessageError(errorHandler.error);
            // if (typeof error.error === 'string') {
            //     message = JSON.parse(error.error).message;
            // }
            title = errorHandler.error.error;
        }

        break;

      // Error Frontend
      case TypeError:
        message = 'Not detail';
        title = errorHandler.message;
        /* this.logService.enviarParaServer(errorHandler.message, errorHandler.stack, LogLevel.FATAL); */
        break;

      // Erro não tratado
      default:
        message = '';
        title = errorHandler.message;
        /* this.logService.enviarParaServer(error.message, error.stack, LogLevel.FATAL); */
    }

    /* this.logService.mostrarNoConsole(error, LogLevel.ERROR); */

    /* this.alertService.showErrorAlert(message, title); */
    console.error(`Error: ${title} => Detail: ${message}`);
  }

  normalizeMessageError(error) {
    return error.message ? error.message : error.status_message;
}

  async normalizeError(error) {
    const err = await this.verifyPromiseOrObservable(error);
    err.error = await this.verifyJsonOrConvert(err.error);
    return err;
  }

  verifyPromiseOrObservable(error): any {
    if (error.rejection && error.rejection.error) {
      return error.rejection;
    } else {
      return error;
    }
  }

  async verifyJsonOrConvert(err) {
    // verifica se é string, caso sim converte para um object json
    if (typeof err === 'string' || err instanceof String) {
      return JSON.parse(err as string);
    } else
      // verifica se é blob, caso sim converte para um object json
      if (err instanceof Blob) {
        try {
          const fileContents = await this.convertBlobToString(err);
          console.log(fileContents);
          return JSON.parse(fileContents as string);
        } catch (e) {
          console.error(`Error converting blob to json. ERROR: ${e}`);
          return { message: 'Error ao realizar o download de um arquivo.' };
        }
      } else {
        // Caso não atenda nenhuma das opções anteriores, significa que um object json válido
        return err;
      }
  }

  convertBlobToString(inputFile) {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject('Error converting blob to string.');
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsText(inputFile, 'application/json');
    });
  }

}
