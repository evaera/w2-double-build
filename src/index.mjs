import { getResponse } from "./second.mjs";

export default {
  async fetch(request) {
    return getResponse();
  },
};
