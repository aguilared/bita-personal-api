import prisma from "../../../../../lib/prisma";

export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  const result = await prisma.bitaEvents.findMany({
    where: { bitacora_id: Number(bitacoraId) },
    include: {
      event: {
        select: { description: true },
      },
    },
  });

  res.json(result);
}
