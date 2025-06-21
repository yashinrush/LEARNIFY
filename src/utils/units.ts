export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Basic Concept",
    backgroundColor: "bg-[#199edd]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#ffc800]",
    tiles: [
      {
        type: "star",
        description: "Basics",
      },
      {
        type: "book",
        description: "Basics",
      },
      {
        type: "star",
        description: "Basics",
      },
      { type: "treasure" },
      { type: "book", description: "Basics" },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    description: "Operators",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "Basics" },
      { type: "dumbbell", description: "Basics" },
      { type: "book", description: "Basics" },
      { type: "treasure" },
      { type: "star", description: "Basics" },
      { type: "book", description: "Basics" },
      { type: "star", description: "Basics" },
      { type: "book", description: "Basics" },
      { type: "treasure" },
      { type: "dumbbell", description: "Basics" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Conditional Statements and Loops",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Basics" },
      { type: "book", description: "Basics" },
      { type: "star", description: "Basics" },
      { type: "treasure" },
      { type: "book", description: "Basics" },
      { type: "star", description: "Basics" },
      { type: "treasure" },
      { type: "dumbbell", description: "Basics" },
      { type: "book", description: "Basics" },
      { type: "trophy", description: "Unit 3 review" },
    ],
  },
];
