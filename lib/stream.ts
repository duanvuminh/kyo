import { StreamTextResult, ToolSet } from "ai";

export const kStreamText = async (stream: StreamTextResult<ToolSet, never>) => {
  let full = "";

  for await (const chunk of stream.textStream) {
    full += chunk;
  }
  return full;
};
