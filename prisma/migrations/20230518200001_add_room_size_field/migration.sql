/*
  Warnings:

  - Added the required column `size` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "size" INTEGER NOT NULL;
