const jwt = require('jsonwebtoken');
const JwtSecret = require('./config/JwtSecret');

module.exports = async (context) => {
  let user = undefined;
  const { headers, params, query } = context.req;
  if(headers.authorization) {
    const token = headers.authorization;
    user = await jwt.verify(token, JwtSecret);
  }
  return { headers, params, query, user };
};
