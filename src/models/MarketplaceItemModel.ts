export default class MarketplaceItemModel {
    name: string;
    description: string;
    thumbnailUrl: string;
    author: string;
    sourceUrl: string;
    version: string;
    kenticoVersions: Array<string>;
    category: string;
    tags: Array<string>;
  
    constructor() {
      this.name = "";
      this.description = "";
      this.thumbnailUrl = "";
      this.author = "";
      this.sourceUrl = "";
      this.version = "";
      this.kenticoVersions = Array<string>();
      this.category = "";
      this.tags = Array<string>();
    }
  }
  