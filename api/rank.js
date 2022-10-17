export function getRankTitle(param) {
  const mmr = Number(param);

  if (mmr <= 153) return "Herald☆1";
  if (mmr <= 307) return "Herald☆2";
  if (mmr <= 461) return "Herald☆3";
  if (mmr <= 615) return "Herald☆4";
  if (mmr <= 769) return "Herald☆5";
  if (mmr <= 923) return "Guardian☆1";
  if (mmr <= 1077) return "Guardian☆2";
  if (mmr <= 1231) return "Guardian☆3";
  if (mmr <= 1385) return "Guardian☆4";
  if (mmr <= 1539) return "Guardian☆5";
  if (mmr <= 1693) return "Crusader☆1";
  if (mmr <= 1847) return "Crusader☆2";
  if (mmr <= 2001) return "Crusader☆3";
  if (mmr <= 2155) return "Crusader☆4";
  if (mmr <= 2309) return "Crusader☆5";
  if (mmr <= 2463) return "Archon☆1";
  if (mmr <= 2617) return "Archon☆2";
  if (mmr <= 2771) return "Archon☆3";
  if (mmr <= 2925) return "Archon☆4";
  if (mmr <= 3079) return "Archon☆5";
  if (mmr <= 3233) return "Legend☆1";
  if (mmr <= 3387) return "Legend☆2";
  if (mmr <= 3541) return "Legend☆3";
  if (mmr <= 3695) return "Legend☆4";
  if (mmr <= 3849) return "Legend☆5";
  if (mmr <= 4003) return "Ancient☆1";
  if (mmr <= 4157) return "Ancient☆2";
  if (mmr <= 4311) return "Ancient☆3";
  if (mmr <= 4465) return "Ancient☆4";
  if (mmr <= 4619) return "Ancient☆5";
  if (mmr <= 4819) return "Divine☆1";
  if (mmr <= 5019) return "Divine☆2";
  if (mmr <= 5219) return "Divine☆3";
  if (mmr <= 5419) return "Divine☆4";
  if (mmr <= 7000) return "Divine☆5";
  return "Unknown";
}

export default function handler(req, res) {
  res.status(200).send(getRankTitle(req.query.mmr));
}
