import { CreateCategoryDto } from 'src/controller/admin/category/dto/create-category.dto';
import { Category } from 'src/entities/category.entity';
import { CustomRepository } from 'src/lib/database/src/typeorm-ex.decorator';
import { Repository } from 'typeorm';

@CustomRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const { title, description } = createCategoryDto;

    const category = this.create({ title, description });

    await this.save(category);
    return category;
  }
}
