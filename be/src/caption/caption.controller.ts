import { Body, Controller, Post } from '@nestjs/common';
import { PrivateRoute } from 'src/core/decorators/private-route.decorator';
import { CaptionService } from './caption.service';
import { CreateCaptionDto } from './dtos/create-caption.dto';

@Controller('caption')
export class CaptionController {
  constructor(private readonly captionService: CaptionService) {}

  @Post()
  @PrivateRoute()
  async create(@Body() createCaptionDto: CreateCaptionDto) {
    return await this.captionService.create(createCaptionDto);
  }
}
