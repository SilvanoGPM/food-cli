import { Fonts, textSync } from 'figlet';

interface FigletParams {
  text: string;
  font?: Fonts;
  format?: (text: string) => string;
}

export function figlet({ text, format, ...params }: FigletParams) {
  const figletText = textSync(text, params);
  const value = format ? format(figletText) : text;

  return console.log(value);
}
