import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("El REQ", req);
  console.log("El REQ BODY", req.body);
  const bitacoraId = req.body.id;
  console.log("BITACORA ID", bitacoraId);
  const bitacora = await prisma.bitacora.delete({
    where: { id: Number(bitacoraId) },
  });
  res.json(bitacora);
}
const bitacoraId = req.query.id;
