/*
  Warnings:

  - You are about to drop the column `cancellationDate` on the `RoomOption` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RoomOption" DROP COLUMN "cancellationDate",
ADD COLUMN     "daysToCancell" INTEGER;
