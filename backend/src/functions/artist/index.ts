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

export const toptracks = {
  handler: `${handlerPath(__dirname)}/toptracks.toptracks`,
  events: [
    {
      http: {
        method: 'post',
        path: `toptracks`,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
export const topalbums = {
  handler: `${handlerPath(__dirname)}/topalbums.topalbums`,
  events: [
    {
      http: {
        method: 'post',
        path: `topalbums`,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
