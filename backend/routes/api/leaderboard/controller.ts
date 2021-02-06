import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { generatePaginationObject } from '../../../utils/pagination';
import { generateSanitizeduser } from '../../../utils/sanitizer';
import AsyncHandler from '../../../decorators/async-handler';

class LeaderboardController {
  @AsyncHandler()
  async handleLeaderboard(req: Request, res: Response) {
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);

    const [data, count] = await Repositories.user.findAndCount({
      skip: offset,
      take: limit,
      order: { totalPoints: 'ASC' },
    });
    res.json({
      data: generateSanitizeduser(data),
      meta: {
        pagination: generatePaginationObject(count, offset, limit),
      },
    });
  }
}

export default new LeaderboardController();
