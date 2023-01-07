import prisma from "../../../lib/prisma";

export default async function handle1(req, res) {
  console.log("requery", req);
  const ID = 1;

  res.json(ID);
}
