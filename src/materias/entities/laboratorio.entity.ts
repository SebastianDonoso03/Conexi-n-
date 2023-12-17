import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MateriaEntity } from "./materia.entity";

@Entity()
export class Laboratorio {
    @PrimaryGeneratedColumn()
    id:number
    @Column('varchar')
    nombre:string

    //RELACION 

    @OneToMany(
        ()=>MateriaEntity,
        (materia)=>materia.laboratorio,
        {
            cascade:true
        }
    
        )
        materia?:MateriaEntity
}


