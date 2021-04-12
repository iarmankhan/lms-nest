import { Query, Resolver } from '@nestjs/graphql';
import { CourseType } from './course.type';

@Resolver(() => CourseType)
export class CourseResolver {
  @Query(() => CourseType)
  course() {
    return {
      id: '121212',
      name: 'Test Name',
      startDate: new Date(),
      endDate: new Date(),
    };
  }
}
