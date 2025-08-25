import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const skills = [
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "Go" },
    { name: "Английский" },
    { name: "Латышский" },
    { name: "Греческий" },
    { name: "Математика" },
    { name: "Биология" },
    { name: "Физика" },
    { name: "Кунилингустика" },
    { name: "Pytuhon" },
    { name: "Гитара" },
    { name: "Аналитика данных" },
    { name: "Java" },
  ];

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
