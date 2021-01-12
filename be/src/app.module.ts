import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mongodb',
          host: 'localhost',
          username: 'root',
          password: 'example',
          autoLoadEntities: true, //* TRY AUTO LOAD ENTITIES
          entities: [__dirname + '**/*/entities/*.entity{.js, .ts}'],
          migrations: ['src/db/migrations/*.js'],
          // synchronize: true,
          cli: {
            migrationsDir: 'src/db/migrations',
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
