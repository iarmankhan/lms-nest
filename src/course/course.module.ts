import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseResolver, CourseService],
})
export class CourseModule {}
