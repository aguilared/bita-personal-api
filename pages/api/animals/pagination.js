import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.animal.findMany({
    skip: Number(req.query.skip),
    take: Number(req.query.take),
    orderBy: {
      id: "asc",
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
