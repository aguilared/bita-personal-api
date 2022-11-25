import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.bitaEvents.findMany({
    take: 1,
    orderBy: {
      id: "desc",
    },
  });
  res.json(result);
}
