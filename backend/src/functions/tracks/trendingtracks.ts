import { middyfy } from "@libs/lambda";
import {
  ValidatedEventAPIGatewayProxyEvent,
  formatJSONResponse,
} from "@libs/api-gateway";
import schema from "./schema";
import { getTrendedTracks } from "src/services/trendingtracks";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  try {
    const { data } = await getTrendedTracks();
    return formatJSONResponse(200, {
      data,
    });
  } catch (error) {
    return formatJSONResponse(400, {
      error: error,
    });
  }
};

export const trendingtracks = middyfy(handler);
