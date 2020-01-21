import { TrackingEventType } from "./../models/TrackingEventType";
import MarketplaceItemModel from "./../models/MarketplaceItemModel";

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
