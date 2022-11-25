import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  console.log("Data????", req.body);

  res.json(200);
}
