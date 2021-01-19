import app from './app';

;(async () => {
  app.listen(5566, '0.0.0.0', () => {
    console.log("Server started on 5566");
  });
})()
