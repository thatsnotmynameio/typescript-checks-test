import ms from "ms";

export function add(a: number, b: number): number {
  return a + b;
}

export function wait(text: string): number {
  return ms(text as ms.StringValue);
}
