import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      animal: {
        select: { id: true, name: true },
      },
      _count: {
        select: { animal: true },
      },
    },
  });
  res.json(result);
}
