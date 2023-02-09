import prisma from "../../../../lib/prisma";

export default async function handle(req,res) {
  const bitacoraId = req.body.id;
  const bitacora = await prisma.bitacora.delete({
    where: { id: Number(bitacoraId) },
  });
  res.json(bitacora);
}
