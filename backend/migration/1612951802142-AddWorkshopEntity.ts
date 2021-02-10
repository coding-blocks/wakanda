import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWorkshopEntity1612951802142 implements MigrationInterface {
  name = 'AddWorkshopEntity1612951802142';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "workshop" ("id" SERIAL NOT NULL, "collegeName" character varying NOT NULL, "collegeAddress" character varying NOT NULL, "topic" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "monetary" character varying NOT NULL, "accomodation" character varying NOT NULL, "caId" character varying NOT NULL, "request" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e755b83ccf7c711f998012e1c92" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "workshop"`);
  }
}
