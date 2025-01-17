import { LoginInputWithShorthand } from "./types";

function processLogin(input: LoginInputWithShorthand) {
  if (input.email) {
    console.log(`Logging in with email: ${input.email}`);
  } else {
    console.log(
      `Email not provided. Logging in with username: ${input.username}`,
    );
  }
}

const userLogin: LoginInputWithShorthand = { username: "AdMub", id: 1 };
processLogin(userLogin);
