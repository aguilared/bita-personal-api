import prisma from "../../../../lib/prisma";
const id = 57;
export default async function handle(req, res) {
  const result =
    await prisma.$queryRaw`SELECT bitacora_id, be.id, be.event_date, be.tipo_event_id, te.description, be.events_id, e.description, be.description FROM bita_events AS be INNER JOIN tipo_events AS te ON te.id = be.tipo_event_id  INNER JOIN events AS e ON e.id = be.events_id WHERE be.id=${id}`;
  res.json(result);
}
