-- DropIndex
DROP INDEX "CardPage_name_idx";

-- DropIndex
DROP INDEX "CardPage_name_key";

-- CreateTable
CREATE TABLE "CardPageURL" (
    "id" SERIAL NOT NULL,
    "nameURL" VARCHAR(255) NOT NULL,
    "cardPageId" INTEGER NOT NULL,

    CONSTRAINT "CardPageURL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CardPageURL_nameURL_key" ON "CardPageURL"("nameURL");

-- CreateIndex
CREATE INDEX "CardPageURL_nameURL_idx" ON "CardPageURL"("nameURL");

-- AddForeignKey
ALTER TABLE "CardPageURL" ADD CONSTRAINT "CardPageURL_cardPageId_fkey" FOREIGN KEY ("cardPageId") REFERENCES "CardPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
