import prisma from "../../../lib/prisma";
const id = 57;
export default async function handle(req, res) {
  const result = await prisma.$queryRaw`SELECT * FROM bitacoras WHERE id=${id}`;
  res.json(result);
}
