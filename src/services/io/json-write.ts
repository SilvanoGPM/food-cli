import { promises as fs } from 'fs';

import { GeneralIO } from "./io.types";

interface JSONWriteProps extends GeneralIO {
  data: any;
}

export async function JSONWrite({
  path,
  data,
  encoding = "utf-8",
}: JSONWriteProps) {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 2), { encoding });
  } catch {
    throw Error(`Error on write: "${path}"`);
  }
}
