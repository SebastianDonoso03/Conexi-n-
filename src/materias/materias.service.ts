import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MateriaEntity } from './entities/materia.entity';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';
import { Laboratorio } from './entities/laboratorio.entity';

@Injectable()
export class MateriasService {
  
  constructor(
    @InjectRepository(MateriaEntity)
    private readonly materiaRepository: Repository<MateriaEntity>,
    
    @InjectRepository(Laboratorio)
    private readonly laboratorioRepository: Repository<Laboratorio>
    ) {}
  
  async create(createMateriaDto: CreateMateriaDto){
    try{
      const {laboratorio=[], ...materiadetalle} = createMateriaDto

      const materia = this.materiaRepository.create(
        {
        ...materiadetalle,
        laboratorio:laboratorio.map(laboratorio=>this.laboratorioRepository.create({nombre:laboratorio}))
      });
      await this.materiaRepository.save(materia)
      return {...materia , laboratorio};

    }catch(error){
      console.log(error)
      throw new Error ("No se pudo realizar el ingreso")
    } 
  }
  

 async findAll(paginacionDto: PaginacionDto) {
    const { limit = 10, offset = 1 } = paginacionDto;
    const materia = await this.materiaRepository.find({
      take: limit,
      skip: offset,
      relations:{
        laboratorio: true
      }
    });

    return materia.map(materias =>(
      {
        ...materias,
        laboratorio:materias.laboratorio.map(nombreo=>nombreo.nombre)
      }
    ))
  }

 async findOne(id: number) {
    const materias= this.materiaRepository.findOneBy({id});
    if(!materias)
    throw new NotFoundException(id)
  return materias
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    const materia = await this.materiaRepository.preload({
      id : id,
      ...updateMateriaDto,
      laboratorio:[]
    })
    if (!materia)
    throw new NotFoundException("No se elimino");
  await this.materiaRepository.save(materia);
  return materia
  }

  async remove(id: number) {
  const materia = await this.findOne(id);
  this.materiaRepository.delete(materia);
  }
}


