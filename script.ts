/// <reference types="node" />

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error("Usage: npm run start -- <username> <password> <securityCode>");
  process.exit(1);
}

const [username, password, securityCode] = args;

const requiredUsername = "admin";
const requiredPassword = "password";
const requiredSecurityCode = "12345";

const usernameCorrect = username === requiredUsername;
const passwordCorrect = password === requiredPassword;
const securityCodeCorrect = securityCode === requiredSecurityCode;

const wrongFields: string[] = [];
const correctFields: string[] = [];

if (!usernameCorrect) {
  wrongFields.push("username");
} else {
  correctFields.push("username");
}

if (!passwordCorrect) {
  wrongFields.push("password");
} else {
  correctFields.push("password");
}

if (!securityCodeCorrect) {
  wrongFields.push("security code");
} else {
  correctFields.push("security code");
}

if (wrongFields.length === 0) {
  console.log("Welcome");
} else if (wrongFields.length === 1) {
  console.log(`You have everything except the ${wrongFields[0]}.`);
} else if (correctFields.length === 1) {
  console.log(`The ${correctFields[0]} is right, but the ${wrongFields[0]} and ${wrongFields[1]} are wrong.`);
} else {
  console.log("All three are wrong.");
}
