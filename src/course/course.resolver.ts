import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseType } from './course.type';
import { CourseService } from './course.service';

@Resolver(() => CourseType)
export class CourseResolver {
  constructor(private courseService: CourseService) {}

  @Query(() => CourseType)
  course() {
    return {
      id: '121212',
      name: 'Test Name',
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  @Mutation(() => CourseType)
  createCourse(
    @Args('name') name: string,
    @Args('startDate') startDate: Date,
    @Args('endDate') endDate: Date,
  ) {
    return this.courseService.createCourse(name, startDate, endDate);
  }
}
