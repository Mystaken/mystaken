import { ColorTheme } from "@mystaken/themes/types";

export const colors = {
  mystaken: {
    primary: {
      1: "#cfcccc",
      2: "#999797",
      3: "#616060",
      4: "#403e3e",
      5: "#1f1e1e",
    },
    secondary: {
      1: "#1f1e1e",
      2: "#403e3e",
      3: "#616060",
      4: "#999797",
      5: "#cfcccc",
    },
  },
} satisfies Record<string, ColorTheme>;
