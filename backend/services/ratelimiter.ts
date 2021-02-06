import rateLimit from 'express-rate-limit';

function limiter() {
  return rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
  });
}

export default limiter;
module.exports = limiter;
