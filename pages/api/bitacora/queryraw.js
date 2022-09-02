import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.$queryRaw`SELECT * FROM bitacoras`;
  res.json(result);
}
