import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.animal.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      owner: {
        select: { name: true },
      },
    },
  });
  res.json(result);
}
