import prisma from "../../../../../../lib/prisma";

export default async function handle1(req, res) {
  const id = req.body.id;
  console.log("ID eventoID", id);
  const result = await prisma.bitaEvents.findUnique({
    where: { id: Number(id) },
  });
  res.json(result);
}
