import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  console.log("El REQ", req);
  console.log("El REQBODY", req.body);
  const event = await prisma.event.create({ data: req.body });
  res.json(event);
}
