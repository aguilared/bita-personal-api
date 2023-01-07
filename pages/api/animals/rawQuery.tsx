import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const [animals, totalAnimals] = await prisma.$transaction([
    prisma.$queryRaw`SELECT id,name, owner_id  FROM animals`,
    prisma.$executeRaw`SELECT * FROM animals`,
  ]);

  res.json({ totalAnimals, animals });
}
