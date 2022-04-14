import prisma from "../../../lib/prisma";
export default async function handle1(req, res) {
  console.log("REQ", req);
  const bitacoraId = req.query.id;
  const result = await prisma.bitacora.findUnique({
    where: { id: Number(bitacoraId) },
    include: {
      author: {
        select: { name: true },
      },
      _count: {
        select: { bita_events: true },
      },
      bita_events: {
        select: { event: true, description: true },
      },
    },
  });

  res.json(result);
}
