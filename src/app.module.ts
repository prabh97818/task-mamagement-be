import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './modules/team/team.module';
import { TeamMemberModule } from './modules/team-member/team-member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ServicesModule } from './core/services/services.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      database: process.env.MONGODB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TeamModule,
    TeamMemberModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
