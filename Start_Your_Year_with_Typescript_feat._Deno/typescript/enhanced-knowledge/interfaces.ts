// Define the Name interface
interface Name {
  firstName: string;
  lastName: string;
  middlename: string | undefined;
}

// Extend the Name interface to create the Person interface
interface Person extends Name {
  status: "single" | "married" | "widowed";
  address: string;
  parents: [Person, Person] | undefined;
}

// Declare a variable using the Person interface with incomplete fields
// This will produce an error because required fields from the Name interface are missing
// Uncomment to test the error
// const person: Person = {
//   status: "single",
//   address: "",
//   parents: undefined,
//   middlename: undefined
// };

// Correct declaration of the person object with all required fields
const person: Person = {
  status: "single",
  address: "",
  parents: undefined,
  middlename: undefined,
  firstName: "",
  lastName: "",
};

console.log(person);
