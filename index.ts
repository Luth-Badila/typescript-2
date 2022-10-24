// Interface

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Lutfi",
  age: 24,
};

// Composing types -> union
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "Locked" | "Unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const odd: OddNumberUnderTen = 3;

const getLength = (param: string | string[]) => {
  return param.length;
};
