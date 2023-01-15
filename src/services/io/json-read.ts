import { promises as fs } from 'fs';

import { GeneralIO } from "./io.types";

interface JSONReadProps extends GeneralIO {}

export async function JSONRead<T>({ path, encoding = "utf-8" }: JSONReadProps) {
  try {
    const data = await fs.readFile(path, { encoding });

    if (!data) {
      return null;
    }

    return JSON.parse(data) as T;
  } catch {
    throw Error(`Error on read: "${path}"`);
  }
}
