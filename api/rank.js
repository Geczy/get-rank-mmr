const ranks = [
  { range: [0, 153], title: "Herald☆1" },
  { range: [154, 307], title: "Herald☆2" },
  { range: [308, 461], title: "Herald☆3" },
  { range: [462, 615], title: "Herald☆4" },
  { range: [616, 769], title: "Herald☆5" },
  { range: [770, 923], title: "Guardian☆1" },
  { range: [924, 1077], title: "Guardian☆2" },
  { range: [1078, 1231], title: "Guardian☆3" },
  { range: [1232, 1385], title: "Guardian☆4" },
  { range: [1386, 1539], title: "Guardian☆5" },
  { range: [1540, 1693], title: "Crusader☆1" },
  { range: [1694, 1847], title: "Crusader☆2" },
  { range: [1848, 2001], title: "Crusader☆3" },
  { range: [2002, 2155], title: "Crusader☆4" },
  { range: [2156, 2309], title: "Crusader☆5" },
  { range: [2310, 2463], title: "Archon☆1" },
  { range: [2464, 2617], title: "Archon☆2" },
  { range: [2618, 2771], title: "Archon☆3" },
  { range: [2772, 2925], title: "Archon☆4" },
  { range: [2926, 3079], title: "Archon☆5" },
  { range: [3080, 3233], title: "Legend☆1" },
  { range: [3234, 3387], title: "Legend☆2" },
  { range: [3388, 3541], title: "Legend☆3" },
  { range: [3542, 3695], title: "Legend☆4" },
  { range: [3696, 3849], title: "Legend☆5" },
  { range: [3850, 4003], title: "Ancient☆1" },
  { range: [4004, 4157], title: "Ancient☆2" },
  { range: [4158, 4311], title: "Ancient☆3" },
  { range: [4312, 4465], title: "Ancient☆4" },
  { range: [4466, 4619], title: "Ancient☆5" },
  { range: [4620, 4819], title: "Divine☆1" },
  { range: [4820, 5019], title: "Divine☆2" },
  { range: [5020, 5219], title: "Divine☆3" },
  { range: [5220, 5419], title: "Divine☆4" },
  { range: [5420, 7000], title: "Divine☆5" },
];

export function getRankTitle(param) {
  const mmr = Number(param);

  if (mmr < 0) return "???";
  if (mmr > ranks[ranks.length - 1].range[1]) return "Immortal";

  const [rank, nextRank] = ranks.filter((rank) => {
    return mmr <= rank.range[1];
  });

  if (!rank) return "???";

  const nextMMR = nextRank?.range[0] || rank?.range[1];
  const mmrToNextRank = nextMMR - mmr;
  const winsToNextRank = Math.ceil(mmrToNextRank / 30);

  const nextAt = ` | Next rank at ${nextMMR}`;
  const nextIn = ` in ${winsToNextRank} wins`;
  const oneMore = mmrToNextRank <= 30 ? " | One more win peepoClap" : "";

  return `${rank.title}${nextAt}${oneMore || nextIn}`;
}

export default function handler(req, res) {
  res.status(200).send(getRankTitle(req.query.mmr));
}
