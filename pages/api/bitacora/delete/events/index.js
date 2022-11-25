import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.bitaEvents.findMany({
    orderBy: {
      bitacora_id: "desc",
    },
    include: {
      event: {
        select: { id: true, description: true },
      },
      tipoEvent: {
        select: { id: true, description: true },
      },
      bitacora: {
        select: { id: true, author: true },
      },
    },
  });
  res.json(result);
}
