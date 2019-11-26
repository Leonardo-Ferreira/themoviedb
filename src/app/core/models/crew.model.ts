export class Crew {
  constructor(
    public id?: number,
    public character?: string,
    // tslint:disable-next-line:variable-name
    public credit_id?: string,
    public department?: string,
    public gender?: number,
    public job?: string,
    public name?: string,
    // tslint:disable-next-line:variable-name
    public profile_path?: string,
  ) { }
}
