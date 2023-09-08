import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from 'src/repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.createCategory(createCategoryDto);
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
