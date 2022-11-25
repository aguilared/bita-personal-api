import prisma from "../../../../../lib/prisma";

export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  const [result] = await prisma.$transaction([
    prisma.bitaEvents.findMany({
      where: { bitacora_id: Number(bitacoraId) },
      orderBy: { id: "asc" },
      include: {
        event: {
          select: { id: true, description: true },
        },
        tipoEvent: {
          select: { id: true, description: true },
        },
      },
    }),
  ]);
  res.json(result);
}
