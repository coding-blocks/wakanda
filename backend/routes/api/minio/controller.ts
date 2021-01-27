import { Request, Response } from 'express';
import { v4 } from 'uuid';
import config from '../../../config';
import minioClient from '../../../utils/minio';
import { ce } from '../../../utils/app';

export default {
  POSTPreseignUrl: ce(async (req: Request, res: Response) => {
    const { name = v4() } = req.query;
    const url = await minioClient.presignedPutObject(config.MINIO.BUCKET_NAME, name);

    res.json({
      data: {
        url,
      },
    });
  }),
};
