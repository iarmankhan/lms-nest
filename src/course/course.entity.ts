import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @ObjectIdColumn()
  _id: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column(() => Date)
  startDate: Date;

  @Column(() => Date)
  endDate: Date;
}
