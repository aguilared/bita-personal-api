import prisma from "../../../lib/prisma";

export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  console.log("ID", bitacoraId);
  const result = await prisma.user.findUnique({
    where: {
      id: Number(bitacoraId),
    },
  });

  res.json(result);
}
