import { neon } from '@neondatabase/serverless';
import config from '@/lib/config';
import { drizzle } from 'drizzle-orm/neon-http';

import ws from 'ws';
neonConfig.webSocketConstructor = ws;

const sql = neon(config.env.databaseUrl);

export const db = drizzle({ client: sql });
