import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.bitacora.findMany({
    include: {
      author: {
        select: { name: true },
      },
      _count: {
        select: { bita_events: true },
      },
    },
    take: 1,
    orderBy: {
      id: "desc",
    },
  });
  res.json(result);
}
