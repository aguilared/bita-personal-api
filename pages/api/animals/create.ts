import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log("El REQ", req);
  // console.log("El REQBODY", req.body);
  const tipoEvent = await prisma.animal.create({ data: req.body });
  res.json(tipoEvent);
}
