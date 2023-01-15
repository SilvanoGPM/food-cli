import { GeneralIO } from "./io.types";
import { JSONRead } from "./json-read";
import { JSONWrite } from "./json-write";

interface JSONUpdateProps extends GeneralIO {
  data: any;
}

export async function JSONUpdate({
  path,
  data,
  encoding = "utf-8",
}: JSONUpdateProps) {
  try {
    const oldData = await JSONRead<any>({ path });

    const newData = { ...oldData, ...data };

    await JSONWrite({ path, data: newData });
  } catch {
    throw Error(`Error on update: "${path}"`);
  }
}
