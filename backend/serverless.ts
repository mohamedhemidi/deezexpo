import type { AWS } from "@serverless/typescript";

import { searchtracks } from "@functions/tracks";
import { viewartist, toptracks, topalbums } from "@functions/artist";

const serverlessConfiguration: AWS = {
  service: "backend",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    profile: "local-dev",
    region: "eu-west-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      ALLOW_ORIGIN: "*",
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      SEARCH_LIMIT: "5",
    },
  },
  // import the function via paths
  functions: { searchtracks, viewartist, toptracks, topalbums },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
