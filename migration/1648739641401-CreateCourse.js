const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class CreateCourse1648739641401 {

    table = new Table({
        name: 'courses',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true, // Auto-increment
            generationStrategy: 'increment',
          },
          {
            name: 'price',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'address_owner',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '1000',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            isNullable: false,
          },
        ],
      });

    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }

    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }

}
