import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCompositeKeyForUserTask1612789263912 implements MigrationInterface {
  name = 'AddCompositeKeyForUserTask1612789263912';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_task" DROP CONSTRAINT "PK_ea320dbd04b37ad98f9ff5033f6"`,
    );
    await queryRunner.query(`ALTER TABLE "user_task" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "user_task" ADD CONSTRAINT "PK_a0db1c8e3e4e9bb4ddf2523fe42" PRIMARY KEY ("userId", "taskId")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_task" DROP CONSTRAINT "PK_a0db1c8e3e4e9bb4ddf2523fe42"`,
    );
    await queryRunner.query(`ALTER TABLE "user_task" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "user_task" ADD CONSTRAINT "PK_ea320dbd04b37ad98f9ff5033f6" PRIMARY KEY ("id")`,
    );
  }
}
