export default class MarketplaceItem {
  name: string;
  description: string;
  thumbnailUrl: string;
  source: string;
  sourceUrl: string;

  constructor(
    name: string,
    description: string,
    thumbnailUrl: string,
    source: string,
    sourceUrl: string
  ) {
    this.name = name;
    this.description = description;
    this.thumbnailUrl = thumbnailUrl;
    this.source = source;
    this.sourceUrl = sourceUrl;
  }
}
