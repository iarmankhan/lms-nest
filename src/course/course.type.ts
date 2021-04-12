import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Course')
export class CourseType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}
