import {Category} from "./category";

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      {id: 1, name: "Macera"},
      {id: 2, name: "Komedi"},
      {id: 3, name: "Bilim Kurgu"},
      {id: 4, name: "Romantik"},
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category {
    return this.categories.find(i => i.id == id);
  }
}
