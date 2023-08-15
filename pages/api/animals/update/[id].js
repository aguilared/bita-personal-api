import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  //console.log("REQ", req);
  const id = req.query.id;
  const animal = await prisma.animal.update({
    where: { id: Number(id) },
    data: req.body,
  });
  res.json(animal);
}
