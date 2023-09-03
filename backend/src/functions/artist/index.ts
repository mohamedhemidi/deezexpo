import { handlerPath } from '@libs/handler-resolver';
import schema from './schema';
import { origins } from '@libs/origins';

export const viewartist = {
  handler: `${handlerPath(__dirname)}/viewartist.viewartist`,
  events: [
    {
      http: {
        method: 'post',
        path: `viewartist`,
        cors: {
          origins,
        },
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
        cors: {
          origins,
        },
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
        cors: {
          origins,
        },
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
