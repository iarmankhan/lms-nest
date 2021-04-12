import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    CourseModule,
  ],
})
export class AppModule {}
