import { getRankTitle } from "../../api/rank";

export async function onRequestGet({ params }) {
  const res = getRankTitle(params.mmr);
  return new Response(res);
}
