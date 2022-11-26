import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.bitacora.findMany({
    orderBy: {
      bitacora_date: "desc",
    },
    include: {
      author: {
        select: { name: true },
      },
      _count: {
        select: { bita_events: true },
      },
    },
  });
  res.json(result);
}
