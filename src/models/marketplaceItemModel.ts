export default class MarketplaceItemModel {
  name: string;
  description: string;
  thumbnailUrl: string;
  source: string;
  sourceUrl: string;

  constructor() {
    this.name = "";
    this.description = "";
    this.thumbnailUrl = "";
    this.source = "";
    this.sourceUrl = "";
  }
}
