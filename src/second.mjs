import * as uuid from "uuid";

export function getResponse() {
  return new Response(uuid.v4());
}
