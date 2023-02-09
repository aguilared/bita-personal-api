import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.Event.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      tipoEvent: {
        select: { description: true },
      },
      _count: {
        select: { bita_events: true },
      },
    },
  });
  res.json(result);
}
