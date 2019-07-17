export default class MarketplaceItemModel {
  name: string;
  description: string;
  thumbnailUrl: string;
  author: string;
  sourceUrl: string;
  version: string;
  kenticoVersion: string;
  category: string;
  tags: Array<string>;

  constructor() {
    this.name = "";
    this.description = "";
    this.thumbnailUrl = "";
    this.author = "";
    this.sourceUrl = "";
    this.version = "";
    this.kenticoVersion = "";
    this.category = "";
    this.tags = Array<string>();
  }
}
