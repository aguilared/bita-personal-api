import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      _count: {
        select: { animal: true },
      },
      animal: {
        select: { id: true, name: true },
      },
    },
  });
  res.json(result);
}
