import prisma from "../../../../lib/prisma";

export default async function handle1(req, res) {
  console.log("REQBODY", req.body);
  console.log("REQQUERY", req.query);
  const ID = req.query.id;
  const [result] = await prisma.$transaction([
    prisma.bitaEvents.findMany({
      where: { id: Number(ID) },
      orderBy: { id: "asc" },
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
    }),
  ]);
  res.json(result);
}
