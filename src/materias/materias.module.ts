import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaEntity } from './entities/materia.entity';
import { EstudiantesEntity } from './entities/estudiantes.entity';

@Module({
  imports:[EstudiantesEntity,
    TypeOrmModule.forFeature([MateriaEntity, EstudiantesEntity])

  ],
  controllers: [MateriasController],
  providers: [MateriasService],
})
export class MateriasModule {}
