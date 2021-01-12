import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base/base.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { CaptionType as CaptionTypeEnum } from '../enums/caption-type.enum';

@Entity()
export class Caption extends BaseEntity<Caption> {
  @ApiProperty({ type: String })
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  quote: string;

  @CreateDateColumn()
  createdAt: string;

  @Column()
  type: CaptionTypeEnum;
}
