import { handlerPath } from '@libs/handler-resolver';
import schema from './schema';

export const viewartist = {
  handler: `${handlerPath(__dirname)}/viewartist.viewartist`,
  events: [
    {
      http: {
        method: 'post',
        path: `viewartist`,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
