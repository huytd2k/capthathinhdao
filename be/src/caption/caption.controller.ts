import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { PrivateRoute } from 'src/core/decorators/private-route.decorator';
import { CaptionService } from './caption.service';
import { CreateCaptionDto } from './dtos/create-caption.dto';
import { CaptionType } from './enums/caption-type.enum';

@Controller('caption')
export class CaptionController {
  constructor(private readonly captionService: CaptionService) {}

  @Post()
  @PrivateRoute()
  @ApiBearerAuth()
  async create(@Body() createCaptionDto: CreateCaptionDto) {
    return await this.captionService.create(createCaptionDto);
  }

  @Get()
  @ApiQuery({ name: 'type', enum: CaptionType, required: false })
  async getRandom(@Query('type') type: CaptionType) {
    return await this.captionService.findRandom(type);
  }
}
