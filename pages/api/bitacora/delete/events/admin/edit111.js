import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  console.log("Data????", req.params);
  const { id } = req.params;
  const bitacora = await prisma.bitaEvents.update({
    where: { id: Number(id) },
    data: req.params,
  });
  res.json(bitacora);
}
