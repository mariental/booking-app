/*
  Warnings:

  - You are about to drop the column `type` on the `Accommodation` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Accommodation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accommodation" DROP COLUMN "type",
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "AccommodationType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AccommodationType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Accommodation" ADD CONSTRAINT "Accommodation_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "AccommodationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
