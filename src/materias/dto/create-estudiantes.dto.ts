import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEstudiantesDto {


    @IsString()
    nombre: string

    @IsString()
    carrera: string

    @IsString()
    jornada: string

    @IsNumber()
    curso: number

    @IsOptional()
    edad: string
}
