import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateCaptionDto } from './dtos/create-caption.dto';
import { Caption } from './entites/caption.entity';
import { CaptionType } from './enums/caption-type.enum';

@Injectable()
export class CaptionService {
  constructor(
    @InjectRepository(Caption)
    private readonly captionRepo: MongoRepository<Caption>,
  ) {}

  async create(createCaptionDto: CreateCaptionDto) {
    return await this.captionRepo.save(new Caption(createCaptionDto));
  }

  async findRandom(type: CaptionType) {
    return await this.captionRepo
      .aggregateEntity([{ $match: { type } }, { $sample: { size: 1 } }])
      .toArray()
      .then((x) => x[0]);
  }
}
