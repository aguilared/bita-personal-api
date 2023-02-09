import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.Event.findMany({
    orderBy: {
      tipo_event_id: "asc",
    },
    include: {
      tipoEvent: {
        select: { description: true },
      },
    },
  });
  res.json(result);
}
