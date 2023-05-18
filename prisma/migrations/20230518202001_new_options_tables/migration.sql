/*
  Warnings:

  - You are about to drop the column `cancellationType` on the `RoomOption` table. All the data in the column will be lost.
  - You are about to drop the column `meadIncluded` on the `RoomOption` table. All the data in the column will be lost.
  - Added the required column `cancellationTypeId` to the `RoomOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mealTypeId` to the `RoomOption` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoomOption" DROP COLUMN "cancellationType",
DROP COLUMN "meadIncluded",
ADD COLUMN     "cancellationTypeId" INTEGER NOT NULL,
ADD COLUMN     "mealTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CancellationType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3),

    CONSTRAINT "CancellationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION,

    CONSTRAINT "MealType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomOption" ADD CONSTRAINT "RoomOption_cancellationTypeId_fkey" FOREIGN KEY ("cancellationTypeId") REFERENCES "CancellationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomOption" ADD CONSTRAINT "RoomOption_mealTypeId_fkey" FOREIGN KEY ("mealTypeId") REFERENCES "MealType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
