import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCaptionDto } from './dtos/create-caption.dto';
import { Caption } from './entites/caption.entity';

@Injectable()
export class CaptionService {
  constructor(
    @InjectRepository(Caption)
    private readonly captionRepo: Repository<Caption>,
  ) {}

  async create(createCaptionDto: CreateCaptionDto) {
    return await this.captionRepo.save(new Caption(createCaptionDto));
  }
}
