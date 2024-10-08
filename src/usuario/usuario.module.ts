import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioRepository } from './repositories/usuario.repository';
import { UsuarioPgRepository } from './repositories/pg/usuario.pg.repository';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { PrometheusService } from '../shared/services/prometheus.service';
import { AutenticacaoController } from './controllers/autenticacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [
    {
      provide: UsuarioRepository,
      useClass: UsuarioPgRepository,
    },
    UsuarioService,
    PrometheusService,
  ],
  controllers: [UsuarioController, AutenticacaoController],
})
export class UsuarioModule {}
