import { Deserializable } from "../../shared/deserializable.model";
import { RepoDetails } from './repo-details.model';
export class user implements Deserializable {

  repoList:RepoDetails[]=new Array<RepoDetails>();

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

