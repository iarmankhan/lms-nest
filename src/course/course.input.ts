import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsDate } from 'class-validator';

@InputType()
export class CreateCourseInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDate()
  @Field()
  startDate: Date;

  @IsDate()
  @Field()
  endDate: Date;
}
