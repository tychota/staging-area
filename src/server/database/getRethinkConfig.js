import {readCert} from './readCert';
import flag from 'node-env-flag';

export const getRethinkConfig = () => {
  const config = {
    host: 'localhost',
    port: 32769,
    authKey: process.env.DATABASE_AUTH_KEY || '',
    db: process.env.NODE_ENV === 'testing' ? 'ava' : 'drive',
    min: process.env.NODE_ENV === 'production' ? 50 : 3,
    buffer: process.env.NODE_ENV === 'production' ? 50 : 3
  };

  if (process.env.NODE_ENV && flag(process.env.DATABASE_SSL)) {
    Object.assign(config, {
      ssl: {
        ca: readCert()
      }
    });
  }
  return config;
};
