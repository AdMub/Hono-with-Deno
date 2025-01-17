// Basic Enum Example
enum State {
  On, // 0
  Off, // 1
}

// Using the enum
const status: State = State.On;
console.log(status); // Output: 0
console.log(State.Off); // Output: 1

// Custom Values for Enums
enum CustomState {
  On = "Activated",
  Off = "Deactivated",
}

// Using the custom enum
const customStatus: CustomState = CustomState.Off;
console.log(customStatus); // Output: "Deactivated"

// Mixed Values in an Enum
enum CrazyEnum {
  Off = 15,
  On = "true",
}

// Using the mixed enum
const crazyVar: CrazyEnum = CrazyEnum.On;
console.log(crazyVar); // Output: "true"
console.log(CrazyEnum.Off); // Output: 15
