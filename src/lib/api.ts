import type { HadithResponse } from "@/types/hadith"

export async function fetchHadith(collection: string, hadithNumber?: string): Promise<HadithResponse["data"]> {
  const url = hadithNumber
    ? `https://random-hadith-generator.vercel.app/${collection}/${hadithNumber}`
    : `https://random-hadith-generator.vercel.app/${collection}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Failed to fetch hadith")
  }
  const data: HadithResponse = await response.json()
  return data.data
}

