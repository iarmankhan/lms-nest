import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async createCourse(name, startDate, endDate): Promise<Course> {
    const course = this.courseRepository.create({ name, startDate, endDate });
    return await this.courseRepository.save(course);
  }
}
