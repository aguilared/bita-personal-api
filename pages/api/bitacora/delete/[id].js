import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  //console.log("El REQ", req);
  //console.log("El REQ BODY", req.body);
  //console.log("El REQ QUERY", req.query);
  const bitacoraId = req.query.id;
  //console.log("BITACORA ID", bitacoraId);
  const response = await prisma.bitacora.delete({
    where: { id: Number(bitacoraId) },
  });
  console.log("RESPONSE", response);

  if (!response) {
    console.log("Un Error ocurrio", response.status);
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  res.json(response);
}
