import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { Course } from './course/course.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      logging: true,
      type: 'mongodb',
      url: 'mongodb://localhost/lms',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Course, Student],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    CourseModule,
    StudentModule,
  ],
})
export class AppModule {}
