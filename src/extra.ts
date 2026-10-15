export function extra(x: number): string {
  if (x > 10) {
    return "big";
  }
  if (x > 5) {
    return "medium";
  }
  if (x > 0) {
    return "small";
  }
  if (x === 0) {
    return "zero";
  }
  return "negative";
}
