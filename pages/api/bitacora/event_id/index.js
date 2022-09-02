import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.bitaEvents.findMany({
    orderBy: {
      event_date: "desc",
    },
    include: {
      event: {
        select: { id: true, description: true },
      },
      tipoEvent: {
        select: { id: true, description: true },
      },
    },
  });
  res.json(result);
}
