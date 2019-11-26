// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://api.themoviedb.org/3',
  BASE_URL_IMAGE: 'https://image.tmdb.org/t/p/original/',
  BASE_URL_IMAGE_W1400: 'https://image.tmdb.org/t/p/w1400_and_h450_face/',
  API_KEY: '1fdb35b405c56d216cf252fe5444cefe',
  API_KEY_URL: '?api_key=1fdb35b405c56d216cf252fe5444cefe',
  IMG_DEFAULT: './assets/img/default-avatar.png'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
