import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PedidosStatus {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descricao: string;
}
