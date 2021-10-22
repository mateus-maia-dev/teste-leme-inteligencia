const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modfied1634874675189 {
    name = 'modfied1634874675189'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "data_nasc" TIMESTAMP NOT NULL, "telefone" character varying NOT NULL, "ativo" integer NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos_status" ("id" SERIAL NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_b45a63956a7594764773f78cb39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "produto" character varying, "valor" integer, "data" TIMESTAMP NOT NULL, "ativo" integer, "clienteIdId" integer, "pedidoStatusIdId" integer, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos_imagens" ("id" SERIAL NOT NULL, "imagem" character varying NOT NULL, "capa" character varying NOT NULL, "pedidoIdId" integer NOT NULL, CONSTRAINT "PK_4b201021d3b88cab29b6ad63ccf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_aa67d47c690b2e9fe7a485edcf2" FOREIGN KEY ("clienteIdId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_e62bfc9e0d08fdc3d00bd27d548" FOREIGN KEY ("pedidoStatusIdId") REFERENCES "pedidos_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos_imagens" ADD CONSTRAINT "FK_3493392bf8af38ed309d14c1a25" FOREIGN KEY ("pedidoIdId") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "pedidos_imagens" DROP CONSTRAINT "FK_3493392bf8af38ed309d14c1a25"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_e62bfc9e0d08fdc3d00bd27d548"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_aa67d47c690b2e9fe7a485edcf2"`);
        await queryRunner.query(`DROP TABLE "pedidos_imagens"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "pedidos_status"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }
}
