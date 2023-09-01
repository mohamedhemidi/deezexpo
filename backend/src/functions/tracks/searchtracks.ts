import { middyfy } from "@libs/lambda";
import {
  ValidatedEventAPIGatewayProxyEvent,
  formatJSONResponse,
} from "@libs/api-gateway";
import schema from "./schema";
import { getTracksList } from "src/services/searchtracks";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const data = await getTracksList(event.body.query);
    return formatJSONResponse(200, {
      items: data,
    });
  } catch (error) {
    return formatJSONResponse(400, {
      error: error,
    });
  }
};

export const searchtracks = middyfy(handler);
