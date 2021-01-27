import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSubmissionAssetTable1611757004426 implements MigrationInterface {
  name = 'AddSubmissionAssetTable1611757004426';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "submission_asset" ("id" SERIAL NOT NULL, "url" text NOT NULL, "type" character varying NOT NULL, "submissionId" integer NOT NULL, CONSTRAINT "PK_a3881eb55cdd5b432ef338a5af8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "user" ADD "assignedPoints" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "submission_asset" ADD CONSTRAINT "FK_0269c17123bec6802af77261ead" FOREIGN KEY ("submissionId") REFERENCES "submission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "submission_asset" DROP CONSTRAINT "FK_0269c17123bec6802af77261ead"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "assignedPoints"`);
    await queryRunner.query(`DROP TABLE "submission_asset"`);
  }
}
