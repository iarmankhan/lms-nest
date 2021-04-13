import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async createCourse(name, startDate, endDate): Promise<Course> {
    const course = this.courseRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.courseRepository.save(course);
  }

  async getCourses(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async getCourse(id: string): Promise<Course> {
    const course = await this.courseRepository.findOne({ id });

    if (!course) {
      throw new NotFoundException();
    }

    return course;
  }
}
