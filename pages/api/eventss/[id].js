import prisma from "../../../lib/prisma";
export default async function handle1(req, res) {
  const ID = req.query.id;
  const result = await prisma.Event.findMany({
    where: {
      tipo_event_id: Number(ID),
    },
    orderBy: {
      description: "asc",
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
