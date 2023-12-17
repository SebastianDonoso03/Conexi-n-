import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EstudiantesEntity } from "./estudiantes.entity";
import { Laboratorio } from "./laboratorio.entity";

@Entity('Materia')
export class MateriaEntity {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column('varchar', {nullable:true})
    materia: string

    @Column('varchar', {nullable:true})
    carrera: string

    @Column('varchar', {nullable:true})
    docente: string

    @Column('numeric')
    curso: number

    @Column('varchar', {nullable:true})
    jornada: string
    
    //RELACION

    @ManyToOne(
        ()=>Laboratorio,
        (laboratorio)=>laboratorio.materia
    )
    laboratorio:Laboratorio[]
   
}
