import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Estudiantes')
export class EstudiantesEntity {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column('varchar', {nullable:true})
    nombre: string

    @Column('varchar', {nullable:true})
    carrera: string

    @Column('varchar', {nullable:true})
    jornada: string

    @Column('numeric')
    curso: number

    @Column('numeric')
    edad: number

}
