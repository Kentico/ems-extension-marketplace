import MarketplaceItemModel from "@/models/MarketplaceItemModel";
import { TrackingEventType } from "@/models/TrackingEventType";

export function trackItemEvent(
  eventAction: TrackingEventType,
  item: MarketplaceItemModel
): void {
  if (window && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: "event",
      eventCategory: "Link",
      eventAction: eventAction.toString(),
      eventLabel: `${item.category};${item.name}`
    });
  }
}
