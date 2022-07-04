import * as path from 'path'
import * as fs from 'fs'
import { createServer } from '@graphql-yoga/node'
import resolvers from './resolvers.js';

const server = createServer({
  schema: {
    typeDefs: fs.readFileSync(
      path.resolve('src/schema.graphql'),
      'utf-8',
    ),
    resolvers,
  }
});

server.start();