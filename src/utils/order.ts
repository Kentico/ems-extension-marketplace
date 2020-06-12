import store, { updateOrderFilterMutation } from "@/store";

export function initStoreWithOrders() {
    let orderTypes = ["Random sort", "A-Z", "Z-A"]
    store.commit(updateOrderFilterMutation, orderTypes)
}