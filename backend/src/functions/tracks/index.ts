import { handlerPath } from '@libs/handler-resolver';
import schema from './schema';

export const searchtracks = {
  handler: `${handlerPath(__dirname)}/searchtracks.searchtracks`,
  events: [
    {
      http: {
        method: 'post',
        path: `searchtracks`,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
