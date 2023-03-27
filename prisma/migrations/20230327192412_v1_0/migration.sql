-- CreateTable
CREATE TABLE "CardPage" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "linkedinURL" VARCHAR(255) NOT NULL,
    "gitHubURL" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CardPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetadataPage" (
    "id" SERIAL NOT NULL,
    "cardPageId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetadataPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CardPage_name_key" ON "CardPage"("name");

-- CreateIndex
CREATE INDEX "CardPage_name_idx" ON "CardPage"("name");

-- AddForeignKey
ALTER TABLE "MetadataPage" ADD CONSTRAINT "MetadataPage_cardPageId_fkey" FOREIGN KEY ("cardPageId") REFERENCES "CardPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
