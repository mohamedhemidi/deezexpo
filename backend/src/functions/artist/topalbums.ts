import { middyfy } from "@libs/lambda";
import {
  ValidatedEventAPIGatewayProxyEvent,
  formatJSONResponse,
} from "@libs/api-gateway";
import schema from "./schema";
import { topAlbums } from "src/services/topalbums";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  if (!event.body.id || typeof event.body.id !== "number") {
    return formatJSONResponse(400, {
      error: "ID is missing or invalid",
    });
  }

  try {
    const data = await topAlbums(event.body.id);
    return formatJSONResponse(200, {
      items: data,
    });
  } catch (error) {
    return formatJSONResponse(400, {
      error: error,
    });
  }
};

export const topalbums = middyfy(handler);
