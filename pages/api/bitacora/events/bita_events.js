import prisma from "../../../../lib/prisma";

export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  const [result, totalEvents] = await prisma.$transaction([
    prisma.bitacora.findMany({
      where: { id: Number(bitacoraId) },
      include: {
        bita_events: {
          select: {
            id: true,
            bitacora_id: true,
            event: true,
            tipo_event_id: true,
            description: true,
            event_date: true,
          },
        },
        _count: {
          select: { bita_events: true },
        },
      },
    }),
    prisma.bitacora.count(),
  ]);
  res.json(result, totalEvents);
}
