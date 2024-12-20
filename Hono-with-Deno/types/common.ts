import { PersonalDetail } from "./inferred.ts";

export interface PersonalDetailWithSalt extends PersonalDetail {
  salt: string;
}

/* In the root directory, Run the following command to run the tests
run deno test -A */