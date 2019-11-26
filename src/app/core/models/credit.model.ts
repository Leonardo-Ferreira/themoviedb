import { Cast } from './cast.model';
import { Crew } from './crew.model';

export class Credit {
  constructor(
    public id?: number,
    public cast?: Cast[],
    public crew?: Crew[]
  ) { }
}
