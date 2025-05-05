import { drizzle } from 'drizzle-orm/neon-http';
import config from '@/lib/config';

const db = drizzle(config.env.databaseUrl);
