import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pedidos } from "./Pedidos";

@Entity()
export class PedidosImagens {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Pedidos, { nullable: false })
    pedido_id: Pedidos;

    @Column()
    imagem!: string;

    @Column()
    capa!: string;


}
