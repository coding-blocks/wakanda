import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTasksTable1611553617257 implements MigrationInterface {
  name = 'AddUserTasksTable1611553617257';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "points" integer NOT NULL, "startDate" TIMESTAMP NOT NULL DEFAULT now(), "endDate" TIMESTAMP NOT NULL DEFAULT now(), "status" "tasks_status_enum" NOT NULL DEFAULT 'scheduled', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "userTasks" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "userId" integer NOT NULL, "taskId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0430ddce7eca0466ef555567b32" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "oneauth_id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying, "username" character varying NOT NULL, "role" "users_role_enum" NOT NULL DEFAULT 'default', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "userTasks" ADD CONSTRAINT "FK_a3b345487b5bd946c79e226baa4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "userTasks" ADD CONSTRAINT "FK_7685a20875c8cb2d4106f7bb1a6" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "userTasks" DROP CONSTRAINT "FK_7685a20875c8cb2d4106f7bb1a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "userTasks" DROP CONSTRAINT "FK_a3b345487b5bd946c79e226baa4"`,
    );
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "userTasks"`);
    await queryRunner.query(`DROP TABLE "tasks"`);
  }
}
