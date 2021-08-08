import { createConnection } from 'typeorm';

const createDBConnection = async () => {
  return await createConnection();
};

export default createDBConnection;
