import prisma from "../../../lib/prisma";

export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  console.log("ID", bitacoraId);
  const result = await prisma.bitacora.findUnique({
    where: {
      id: Number(bitacoraId),
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
