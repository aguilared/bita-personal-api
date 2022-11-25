import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  const eventId = req.query.id;
  console.log("EVENT ID", eventId);
  const response = await prisma.bitaEvents.delete({
    where: { id: Number(eventId) },
  });
  console.log("RESPONSE", response);

  if (!response) {
    console.log("Un Error ocurrio", response.status);
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  res.json(response);
}
