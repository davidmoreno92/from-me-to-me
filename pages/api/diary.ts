import { connectToDatabase } from "@lib/database";
import { PaginationOptionsType } from "types/paginationOptions";

type getProps = {
  paginationOptions?: PaginationOptionsType;
};

export default async function handler(req, res) {
  const paginationOptions: PaginationOptionsType = req.query;

  const data = await getDiaryItems({ paginationOptions });
  res.json(data);
}

export async function getDiaryItems({ paginationOptions = {} }: getProps) {
  const { db } = await connectToDatabase();

  console.log(paginationOptions);
  const diaryCollection = await db.collection("diary-items");

  const diaryCount = await diaryCollection
    .aggregate([
      {
        $facet: {
          totalCount: [{ $count: "count" }],
        },
      },
    ])
    .next();

  const diaryData = await diaryCollection
    .find({})
    .sort({ dateCreated: 1 })
    .limit(10)
    .toArray();

  return {
    items: diaryData,
    count: diaryCount.totalCount[0].count,
    pagesNumber: Math.ceil(diaryCount.totalCount[0].count / 10),
    currentPage: 5,
  };
}
