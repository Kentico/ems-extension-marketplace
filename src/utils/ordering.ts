import store, { updateOrderingFilterMutation } from "@/store";

export function initStoreWithOrderings() {
    let orderTypes = ["Random sort", "A - Z", "Z - A"]
    store.commit(updateOrderingFilterMutation, orderTypes);
}