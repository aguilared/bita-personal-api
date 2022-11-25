import prisma from "../../../lib/prisma";
export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  const result = await prisma.event.findMany({
    orderBy: { description: "asc" },
    where: {
      tipo_event_id: Number(bitacoraId),
    },
  });
  res.json(result);
}
