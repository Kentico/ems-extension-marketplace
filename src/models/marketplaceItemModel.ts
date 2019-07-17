export default class MarketplaceItemModel {
  name: string;
  description: string;
  thumbnailUrl: string;
  author: string;
  sourceUrl: string;

  constructor() {
    this.name = "";
    this.description = "";
    this.thumbnailUrl = "";
    this.author = "";
    this.sourceUrl = "";
  }
}
