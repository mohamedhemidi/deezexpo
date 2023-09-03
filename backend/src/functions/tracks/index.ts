import { handlerPath } from "@libs/handler-resolver";
import schema from "./schema";
import { origins } from "@libs/origins";

/**
 *
 *
 *  Search For Tracks By Keyword.
 *  
 * 
 */
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

/**
 *
 *
 *  Most trending tracks Landing Page.
 *  
 * 
 */

export const trendingtracks = {
  handler: `${handlerPath(__dirname)}/trendingtracks.trendingtracks`,
  events: [
    {
      http: {
        method: "get",
        path: `trendingtracks`,
        cors: {
          origins,
        },
      },
    },
  ],
};
