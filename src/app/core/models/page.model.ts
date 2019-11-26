export class Page {
  constructor(
    public id?: number,
    public page?: number,
    public results?: any,
    // tslint:disable-next-line:variable-name
    public total_pages?: number,
    // tslint:disable-next-line:variable-name
    public total_results?: number
  ) { }
}
