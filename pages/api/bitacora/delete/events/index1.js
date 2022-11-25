import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.bitaEvents.findMany({
    orderBy: {
      bitacora_id: "asc",
    },
    include: {
      event: {
        select: { description: true },
      },
    },
  });
  res.json(result);
}
