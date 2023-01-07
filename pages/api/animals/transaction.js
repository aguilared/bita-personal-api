import prisma from "../../../lib/prisma";

export default async function handle1(req, res) {
  console.log("Query", req.query);
  console.log("QueryID", req.query.owner_id);
  console.log("QueryClase", req.query.clase_id);

  const [result, totalAnimals] = await prisma.$transaction([
    prisma.animal.findMany({
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
    }),
    prisma.animal.count(),
  ]);
  res.json({ totalAnimals, result });
}
