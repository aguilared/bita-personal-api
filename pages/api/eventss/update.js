import prisma from "../../../lib/prisma";

export default async function handle(req,res) {
  const event = await prisma.event.update({
    where: { id: req.body.id },
    data: req.body,
  });
  res.json(event);
}

