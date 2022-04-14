import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.bitacora.findMany();
  res.json(result);
}
