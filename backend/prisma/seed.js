import { productData } from "./mockdata.js";
import prisma from "./prisma.js";

async function main() {
  await prisma.product.createMany({
    data: productData,
  });

  console.log("Seed-data har lagts till!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
