import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.tipoEvent.findMany({
    orderBy: {
      description: "asc",
      // id: "asc",
    },
    include: {
      events: {
        select: {
          id: true,
          description: true,
        },
      },
      _count: {
        select: { events: true },
      },
    },
  });
  res.json(result);
}
