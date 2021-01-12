import { CaptionType as CaptionTypeEnum } from '../enums/caption-type.enum';

export class CreateCaptionDto {
  quote: string;
  type: CaptionTypeEnum;
}
