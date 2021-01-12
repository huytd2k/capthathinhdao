import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaptionController } from './caption.controller';
import { CaptionService } from './caption.service';
import { Caption } from './entites/caption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Caption])],
  controllers: [CaptionController],
  providers: [CaptionService],
})
export class CaptionModule {}
