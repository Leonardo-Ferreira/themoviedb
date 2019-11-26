export class Movie {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    // tslint:disable-next-line:variable-name
    public favorite_count?: number,
    // tslint:disable-next-line:variable-name
    public item_count?: number,
    // tslint:disable-next-line:variable-name
    public iso_639_1?: string,
    // tslint:disable-next-line:variable-name
    public list_type?: string,
    public name?: string,
    public overview?: string,
    // tslint:disable-next-line:variable-name
    public poster_path?: string,
    // tslint:disable-next-line:variable-name
    public original_title?: string,
    public popularity?: string,
    public tagline?: string,
    public runtime?: string,
    // tslint:disable-next-line:variable-name
    public original_language?: string,
  ) { }
}
