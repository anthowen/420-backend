/*
  Warnings:

  - You are about to drop the column `totalDays` on the `Stats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stats" DROP COLUMN "totalDays",
ADD COLUMN     "totalHours" INTEGER;
