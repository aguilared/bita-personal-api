import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const {
    query: { id, name },
    method,
  } = req;
  switch (method) {
    case "GET":
      // Get data from your database
      const result = await prisma.tipoEvent.findMany({
        orderBy: {
          description: "asc",
        },
      });
      res.json(result);
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
