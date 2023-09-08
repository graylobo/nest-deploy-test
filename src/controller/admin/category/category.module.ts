import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from 'src/repositories/category.repository';
import { TypeOrmExModule } from 'src/lib/database/src/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([CategoryRepository])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
