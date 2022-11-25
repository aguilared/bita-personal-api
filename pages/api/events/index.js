import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.event.findMany({
    orderBy: {
      description: "asc",
    },
  });
  res.json(result);
}
