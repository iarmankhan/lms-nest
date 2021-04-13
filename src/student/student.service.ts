import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './student.input';
import { StudentType } from './student.type';

import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    const { email, name } = createStudentInput;

    const student = this.studentRepository.create({ id: uuid(), name, email });
    return this.studentRepository.save(student);
  }

  async getStudents(): Promise<StudentType[]> {
    return this.studentRepository.find();
  }

  async getStudent(id: string): Promise<StudentType> {
    const student = await this.studentRepository.findOne({ id });

    if (!student) {
      throw new NotFoundException();
    }

    return student;
  }
}
