import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDoneFlagToWorkshop1613726879229 implements MigrationInterface {
  name = 'AddDoneFlagToWorkshop1613726879229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "workshop" ADD "isDone" boolean NOT NULL DEFAULT false`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "workshop" DROP COLUMN "isDone"`);
  }
}
