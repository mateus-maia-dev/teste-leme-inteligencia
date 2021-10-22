import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Clientes {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    cpf: string;

    @Column({ nullable: false })
    data_nasc: Date;

    @Column()
    telefone: string;

    @Column({ nullable: false })
    ativo: number;


}
