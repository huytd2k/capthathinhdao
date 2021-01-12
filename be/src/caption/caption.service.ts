import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Caption } from './entites/caption.entity';

@Injectable()
export class CaptionService {
  constructor(
    @InjectRepository(Caption)
    private readonly captionRepo: Repository<Caption>,
  ) {}
}
