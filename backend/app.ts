import Express from 'express';

const app = Express();

app.use((req, res) => {
  res.send('Hello World');
});

export default app;
