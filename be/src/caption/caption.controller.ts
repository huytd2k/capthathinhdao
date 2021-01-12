import { Controller, Post } from '@nestjs/common';
import { CaptionService } from './caption.service';

@Controller('caption')
export class CaptionController {
  constructor(private readonly captionService: CaptionService) {}
}
