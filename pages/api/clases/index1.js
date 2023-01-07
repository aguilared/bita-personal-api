import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const [clases, totalClases] = await prisma.$transaction([
    prisma.clase.findMany(),
    prisma.clase.count(),
  ]);

  res.json({ totalClases, clases });
}
