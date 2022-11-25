import prisma from "../../../../../../lib/prisma";

export default async function handle(req, res) {
  console.log("Data????", req.body);
  const bitacora = await prisma.bitaEvents.update({
    where: { id: req.body.id },
    data: req.body,
  });
  console.log("Result", bitacora);
  res.json(bitacora);
}
