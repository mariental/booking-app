/*
  Warnings:

  - You are about to drop the column `date` on the `CancellationType` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `MealType` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CancellationType" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "MealType" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "RoomOption" ADD COLUMN     "cancellationPrice" DOUBLE PRECISION,
ADD COLUMN     "mealPrice" DOUBLE PRECISION;
