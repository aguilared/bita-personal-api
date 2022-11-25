import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("El REQ", req);
  console.log("El REQBODY", req.body);
  const bitacora = await prisma.user.create({
    data: req.body,
  });
  console.log("El RESP", bitacora);

  res.json(bitacora);
}
