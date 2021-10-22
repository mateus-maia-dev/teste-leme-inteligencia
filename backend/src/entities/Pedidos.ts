import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Clientes } from "./Clientes";
import { PedidosStatus } from "./Pedidos_Status";

@Entity()
export class Pedidos {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    produto: string;

    @Column("float", { nullable: true })
    valor: number;

    @Column()
    data!: Date;

    @ManyToOne(() => Clientes, { nullable: true })
    cliente_id: Clientes;

    @ManyToOne(() => PedidosStatus, { nullable: true })
    pedido_status_id: PedidosStatus;

    @Column({ nullable: true })
    ativo: number;

}
