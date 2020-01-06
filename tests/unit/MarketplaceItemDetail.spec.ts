import { shallowMount } from "@vue/test-utils";
import MarketplaceItemDetail from "@/components/MarketplaceItemDetail.vue";
import MarketplaceItemModel from "@/models/marketplaceItemModel";

describe("MarketplaceItemDetail.vue", () => {
  it("renders correct containers when passed", () => {
    const item: MarketplaceItemModel = {
      name: "dummyName",
      description: "dummyDescription",
      thumbnailUrl: "https://localhost.local/thumbnailUrl.png",
      author: "dummySource",
      sourceUrl: "https://localhost.local",
      version: "1.0.0-beta1",
      kenticoVersions: ["12.0.29"],
      category: "mvc widget",
      tags: ["mvc", "youtube", "video", "inline-editor"]
    };

    const wrapper = shallowMount(MarketplaceItemDetail, {
      propsData: { item }
    });
    console.log(wrapper.html());
    expect(wrapper.html()).toEqual(
`<div class="marketplace-item">
  <div class="marketplace-item-header">
    <h3 class="marketplace-item-header__title"><a>dummyName</a></h3> <span class="marketplace-item-header__source">by dummySource</span>
  </div>
  <div class="marketplace-item-content">
    <div class="marketplace-item-content__description">
      <p>dummyDescription</p>
    </div>
    <div class="marketplace-item-content__preview-image"><a href="https://localhost.local"><img src="https://localhost.local/thumbnailUrl.png" alt="dummyName" style="width: 100px; height: 100px;"></a></div>
    <div class="marketplace-item-content__statistics"></div>
  </div>
  <div class="marketplace-item-footer"><button data-tracking-label="dummyName" href="https://localhost.local" class="btn marketplace-item-content__action">
      Take me to the Project
    </button></div>
</div>`
    );
  });
});
 