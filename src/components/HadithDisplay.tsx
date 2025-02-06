import { Card, CardContent } from "@/components/ui/card"
import type { HadithResponse } from "@/types/hadith"

interface HadithDisplayProps {
  hadith: HadithResponse["data"]
}

export default function HadithDisplay({ hadith }: HadithDisplayProps) {
  return (
    <Card className="bg-white/20 border-white/30 backdrop-blur-sm shadow-lg">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">{hadith.header}</h2>
            <p className="text-lg leading-relaxed text-teal-100 whitespace-pre-line">{hadith.hadith_english.trim()}</p>
          </div>
          <div className="pt-4 border-t border-white/20">
            <div className="text-sm text-teal-200 space-y-1">
              <p>Reference: {hadith.refno}</p>
              <p>Book: {hadith.book}</p>
              <p>Book Name: {hadith.bookName.trim()}</p>
              <p>Chapter: {hadith.chapterName}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

