export const classNames = (...strings: string[]) => {
  console.log(strings.filter(Boolean).join(' '));
  return strings.filter(Boolean).join(' ');
}