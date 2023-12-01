import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudiantesDto } from './create-estudiantes.dto';

export class UpdateEstudiantesDto extends PartialType(CreateEstudiantesDto) {}
