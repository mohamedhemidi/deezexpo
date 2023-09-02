import { handlerPath } from "@libs/handler-resolver";
import schema from "./schema";
import { origins } from "@libs/origins";

export const searchtracks = {
  handler: `${handlerPath(__dirname)}/searchtracks.searchtracks`,
  events: [
    {
      http: {
        method: "post",
        path: `searchtracks`,
        cors: {
          origins,
        },
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
