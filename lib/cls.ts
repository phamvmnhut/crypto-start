export const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();

export const clsV2 = (...args: any[]) =>
  args
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();
