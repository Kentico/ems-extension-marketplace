import MarketplaceItemModel from "@/models/marketplaceItemModel";
import store, { updateKenticoVersionsFilterMutation } from "@/store";

export const KENTICO_VERSION_ALL_VERSIONS = "All Kentico versions";

export function initStoreWithKenticoVersions(
  allItems: Array<MarketplaceItemModel>
) {
  let majorVersionsNumbers = new Array<number>();
  allItems.map(item => {
    item.kenticoVersions.map(version => {
      let majorVersion: number = parseInt(version);
      if (!majorVersionsNumbers.includes(majorVersion)) {
        majorVersionsNumbers.push(majorVersion);
      }
    });
  });

  let sortedMajorVersionsNumbers = majorVersionsNumbers.sort((a, b) => a - b);
  let majorVersionsSemverStrings = sortedMajorVersionsNumbers
    .map(String)
    .map(a => `${a}.0.0`);

  store.commit(updateKenticoVersionsFilterMutation, majorVersionsSemverStrings);
}
