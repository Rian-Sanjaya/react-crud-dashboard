import SteinStore from "stein-js-client";

export const steinStore = new SteinStore(
  "https://api.steinhq.com/v1/storages/632d89aabc148508ba8f0dfb"
);

export const userStore = new SteinStore(
  "https://api.steinhq.com/v1/storages/64859c50d27cdd09f0fa02f6"
);

export const commoditiesStore = new SteinStore(
  "https://api.steinhq.com/v1/storages/67cfecfdc088333365804578"
);