import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriasModule } from './materias/materias.module';
import { MateriasController } from './materias/materias.controller';
import { MateriasService } from './materias/materias.service';

@Module({
  imports: [
    TypeOrmModule,
    MateriasModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    database: 'postgres',
    username: 'postgres',
    password: '1234',
    autoLoadEntities:true, //carge automaticamente las entidades
    synchronize:true,
    dropSchema: true, //en produccion se debe poner falso
    
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
