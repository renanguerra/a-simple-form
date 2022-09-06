import { CleaveOptions } from "cleave.js/options";

export const PhoneFormat: CleaveOptions = {
  delimiters: ["(", ")", "\u0020", "-"],
  blocks: [0, 2, 0, 5, 4],
  uppercase: true,
  numericOnly: true,
};
