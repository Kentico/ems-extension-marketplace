import store, { updateOrderFilterMutation } from "@/store";

export function initStoreWithOrders() {
    let orderTypes = ["Random", "A-Z", "Z-A"]
    store.commit(updateOrderFilterMutation, orderTypes)
}