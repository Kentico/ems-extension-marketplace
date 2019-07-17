import { shallowMount } from "@vue/test-utils";
import MarketplaceItemDetail from "@/components/MarketplaceItemDetail.vue";
import MarketplaceItemModel from "@/models/marketplaceItemModel";

describe("MarketplaceItemDetail.vue", () => {
  it("renders correct containers when passed", () => {
    const item: MarketplaceItemModel = {
      name: "dummyName",
      description: "dummyDescription",
      author: "dummySource",
      sourceUrl: "https://localhost.local",
      thumbnailUrl: "https://localhost.local/thumbnailUrl.png"
    };

    const wrapper = shallowMount(MarketplaceItemDetail, {
      propsData: { item }
    });
    expect(wrapper.html()).toEqual(
      '<div class="marketplace-item"><div class="marketplace-item-header"><h3 class="marketplace-item-header__title"><a href="https://localhost.local">dummyName</a></h3> <span class="marketplace-item-header__source">by dummySource</span></div> <div class="marketplace-item-content"><div class="marketplace-item-content__description"><p>dummyDescription</p></div> <div class="marketplace-item-content__preview-image"><a href="https://localhost.local"><img src="https://localhost.local/thumbnailUrl.png" alt="dummyName" style="width: 100px; height: 100px;"></a></div> <div class="marketplace-item-content__statistics"></div></div> <div class="marketplace-item-footer"><a href="https://localhost.local" class="btn marketplace-item-content__action">Take me to the Project</a></div></div>'
    );
  });
});
