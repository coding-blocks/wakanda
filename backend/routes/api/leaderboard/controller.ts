import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { generatePaginationObject } from '../../../utils/pagination';
import { generateSanitizeduser, generateSanitizedUserFromUserTask } from '../../../utils/sanitizer';
import AsyncHandler from '../../../decorators/async-handler';
import { getRepository, In, MoreThan } from 'typeorm';
import { UserTask } from 'entity';

class LeaderboardController {
  @AsyncHandler()
  async handleLeaderboard(req: Request, res: Response) {
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);

    const [data, count] = await Repositories.user.findAndCount({
      skip: offset,
      take: limit,
      order: { totalPoints: 'DESC' },
    });
    res.json({
      data: generateSanitizeduser(data),
      meta: {
        pagination: generatePaginationObject(count, offset, limit),
      },
    });
  }

  @AsyncHandler()
  async filterLeaderboard(req: Request, res: Response) {
    console.log(' hitting the api with task_id ');
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);
    const task_id = Number(req.params.id);

    const [data, count] = await Repositories.userTask.findAndCount({
      skip: offset,
      take: limit,
      where: { taskId: task_id },
      order: { assignedPoints: 'DESC' },
      relations: ['user'],
    });

    res.json({
      data: generateSanitizedUserFromUserTask(data),
      meta: {
        pagination: generatePaginationObject(count, offset, limit),
      },
    });
  }

  @AsyncHandler()
  async monthlyLeaderboard(req: Request, res: Response) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    const start_date = '01' + '-' + mm + '-' + yyyy;

    const [data, count] = await Repositories.task.findAndCount({
      where: { endDate: MoreThan(start_date) },
    });
    // filter the task ids for the month
    const valid_task_id = data.map((result) => result.id);

    // find all the users that have max point for the valid_task_id
    const res3 = await Repositories.userTask
      .createQueryBuilder('ut')
      .select('ut.userId')
      .addSelect('SUM(ut.assignedPoints)', 'points')
      .innerJoin('ut.user', 'usr')
      .where('ut.taskId IN(:...task_ids)', { task_ids: valid_task_id })
      .groupBy('ut.userId')
      .orderBy('points', 'DESC')
      .limit(5)
      .getRawMany();

    const valid_users = res3.map((result) => result.ut_userId);

    const [data1, count1] = await Repositories.user.findAndCount({
      where: { id: In(valid_users) },
    });

    // making the map of user_id and user credentials
    const userIdMap = new Map();
    for (const i in data1) {
      if (true) {
        const id = data1[i].id;
        if (!userIdMap.has(id)) {
          userIdMap.set(id, {
            name: data1[i].name,
            username: data1[i].username,
            photo: data1[i].photo,
          });
        }
      }
    }

    // Making the array of monthly winners
    const WinnerOfMonth = [];
    for (const i in res3) {
      if (true) {
        const id = res3[i].ut_userId;
        const obj = userIdMap.get(id);
        obj.totalPoints = res3[i].points;
        WinnerOfMonth.push(obj);
      }
    }

    res.json({ data: WinnerOfMonth, month: mm, year: yyyy });
  }
}

export default new LeaderboardController();
