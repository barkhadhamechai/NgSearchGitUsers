import { Deserializable } from "../../shared/deserializable.model";
export class RepoDetails{

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}