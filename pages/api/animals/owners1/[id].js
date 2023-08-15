import prisma from "../../../../lib/prisma";

export default async function handle1(req, res) {
  const results = {};

  const ID = req.query.id;
  const count = await prisma.animal.count({
    where: {
      owner_id: Number(ID),
    },
  });
  const owner = await prisma.user.findUnique({
    where: {
      id: Number(ID),
    },
  });

  const result = await prisma.animal.findMany({
    where: {
      owner_id: Number(ID),
    },
    orderBy: {
      name: "asc",
    },
    include: {
      owner: {
        select: { id: true, name: true },
      },
      clase: {
        select: { id: true, description: true },
      },
    },
  });
  results.count = count;
  results.result = result;
  results.owner = owner;
  //console.log("COUNT", count);
  //console.log("OWNER", owner);
  //console.log("RESULTS", results);

  res.json(results);
}
