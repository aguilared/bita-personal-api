import prisma from "../../../lib/prisma";

export default async function handle1(req, res) {
  const ID = req.query.id;
  const result = await prisma.animal.findUnique({
    where: {
      id: Number(ID),
    },
    include: {
      owner: {
        select: { id: true, name: true },
      },
      clase: {
        select: { id: true, description: true },
      },
    },
  });

  res.json(result);
}
