import prisma from "../../../lib/prisma";

export default async function handle1(req, res) {
  const ID = req.query.id;
  const result = await prisma.user.findUnique({
    where: {
      id: Number(ID),
    },
    include: {
      animal: {
        select: {
          id: true,
          name: true,
          clase_id: true,
          clase: {
            select: { id: true, description: true },
          },
        },
      },
      _count: {
        select: { animal: true },
      },
    },
  });
  res.json(result);
}
