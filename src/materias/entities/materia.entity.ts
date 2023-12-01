import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

}
