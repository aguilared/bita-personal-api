import prisma from "../../../../lib/prisma";

export default async function handle1(req, res) {
  const id = req.query.id;
  const [result] = await prisma.$transaction([
    prisma.tipoEvent.findMany({
      where: { id: Number(id) },
      orderBy: { description: "asc" },
    }),
  ]);
  res.json(result);
}
