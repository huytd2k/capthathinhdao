import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
export class Caption {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  quote: string;

  @CreateDateColumn()
  createdAt: string;

  @Column()
  type: 'male' | 'female' | 'both';
}
