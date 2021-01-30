const { MONGO_INITDB_DATABASE, MONGODB_USER, MONGODB_PASS } = process.env;
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || '27017';

module.exports = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGO_INITDB_DATABASE}`;
