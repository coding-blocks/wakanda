require('dotenv').config();
import config from './config';
import app from './app';

;(async () => {
  app.listen(config.APP.PORT, config.APP.HOST, () => {
    console.log(`Server started on ${config.APP.HOST}:${config.APP.PORT}`);
  });
})()
