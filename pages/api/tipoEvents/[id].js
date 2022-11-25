import prisma from "../../../lib/prisma";
export default async function handle1(req, res) {
  const ID = req.query.id;
  const result = await prisma.tipoEvent.findMany({
    where: {
      id: Number(ID),
    },
    include: {
      _count: {
        select: { events: true },
      },
    },
  });

  res.json(result);
}
