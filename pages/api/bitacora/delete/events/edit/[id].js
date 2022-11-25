import prisma from "../../../../../../lib/prisma";

export default async function handle(req, res) {
  console.log("REQ", req);
  const id = req.query.id;

  const bitacora = await prisma.bitaEvents.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json(bitacora);
}
