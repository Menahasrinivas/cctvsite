export function clean(input: string) {
  return input.replace(/[<>]/g, "");
}
