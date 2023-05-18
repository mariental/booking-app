/*
  Warnings:

  - You are about to drop the column `reviewId` on the `Rate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rate" DROP CONSTRAINT "Rate_reviewId_fkey";

-- AlterTable
ALTER TABLE "Rate" DROP COLUMN "reviewId";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL DEFAULT 0;
