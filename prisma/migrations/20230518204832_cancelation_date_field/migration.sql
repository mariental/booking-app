/*
  Warnings:

  - You are about to drop the column `cancellationPrice` on the `RoomOption` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RoomOption" DROP COLUMN "cancellationPrice",
ADD COLUMN     "cancellationDate" TIMESTAMP(3);
