export default {
  APP: {
    PORT: Number(process.env.APP_PORT) || 5566,
    HOST: process.env.APP_HOST || '0.0.0.0'
  }
}