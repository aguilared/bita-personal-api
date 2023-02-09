import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.tipoEvent.findMany({
    orderBy: {
      description: "asc",
    },
  });
  res.json(result);
}
