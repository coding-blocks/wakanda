import * as Minio from 'minio';
import config from '../config';

const minioClient = new Minio.Client({
  endPoint: config.MINIO.ENDPOINT,
  accessKey: config.MINIO.ACCESS_KEY,
  secretKey: config.MINIO.SECRET_KEY,
  useSSL: config.MINIO.USE_SSL,
});

export default minioClient;
