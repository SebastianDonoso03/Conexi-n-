import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMateriaDto {


    @IsString()
    materia: string

    @IsString()
    carrera: string

    @IsString()
    docente: string

    @IsNumber()
    curso: number

    @IsOptional()
    jornada: string
}
