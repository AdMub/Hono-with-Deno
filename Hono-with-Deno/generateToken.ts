// This serves as the script to generate your API_KEY or your secret key. You will be using this to generate hashed passwords

import { crypto } from "@std/crypto";
import { encodeBase64 } from "@std/encoding";

const apiKey = crypto.getRandomValues(new Uint8Array(16));
console.log(`GENERATED API_KEY:\`${encodeBase64(apiKey)}\``);

/* run the command
deno run generateToken.ts */