import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EstudiantesEntity } from "./estudiantes.entity";

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

    @ManyToMany(() => EstudiantesEntity, (estudiante) => estudiante.materia)
                    estudiante:EstudiantesEntity
}
