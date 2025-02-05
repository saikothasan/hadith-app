"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

interface HadithResponse {
  data: {
    book: string
    bookName: string
    chapterName: string
    hadith_english: string
    header: string
    id: number
    refno: string
  }
}

export default function HadithGenerator() {
  const [hadith, setHadith] = useState<HadithResponse["data"] | null>(null)
  const [loading, setLoading] = useState(false)
  const [collection, setCollection] = useState("bukhari")
  const [hadithNumber, setHadithNumber] = useState("")
  const { toast } = useToast()

  const fetchRandomHadith = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://random-hadith-generator.vercel.app/${collection}`)
      if (!response.ok) throw new Error("Failed to fetch hadith")
      const data: HadithResponse = await response.json()
      setHadith(data.data)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch hadith. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchCustomHadith = async () => {
    if (!hadithNumber) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a hadith number",
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`https://random-hadith-generator.vercel.app/${collection}/${hadithNumber}`)
      if (!response.ok) throw new Error("Failed to fetch hadith")
      const data: HadithResponse = await response.json()
      setHadith(data.data)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch hadith. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b2d4c] to-[#1f2037]">
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <h1 className="text-3xl font-bold text-white">Random Hadith Generator</h1>
          <p className="text-white/70">Discover the wisdom of authentic hadiths</p>
        </div>

        <div className="w-full max-w-2xl space-y-8">
          {/* Random Hadith Generator */}
          <div className="flex gap-4 justify-center">
            <Select value={collection} onValueChange={setCollection}>
              <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select collection" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bukhari">Bukhari</SelectItem>
                <SelectItem value="muslim">Muslim</SelectItem>
                <SelectItem value="abudawud">Abu Dawud</SelectItem>
                <SelectItem value="tirmidhi">Tirmidhi</SelectItem>
                <SelectItem value="ibnmajah">Ibn Majah</SelectItem>
                <SelectItem value="nasai">Nasai</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={fetchRandomHadith}
              disabled={loading}
              className="border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Generate Random
            </Button>
          </div>

          {/* Custom Hadith Generator */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4">
              <Input
                type="number"
                placeholder="Enter Hadith Number"
                value={hadithNumber}
                onChange={(e) => setHadithNumber(e.target.value)}
                className="w-[180px] bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
              <Select value={collection} onValueChange={setCollection}>
                <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select collection" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bukhari">Bukhari</SelectItem>
                  <SelectItem value="muslim">Muslim</SelectItem>
                  <SelectItem value="abudawud">Abu Dawud</SelectItem>
                  <SelectItem value="tirmidhi">Tirmidhi</SelectItem>
                  <SelectItem value="ibnmajah">Ibn Majah</SelectItem>
                  <SelectItem value="nasai">Nasai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="outline"
              onClick={fetchCustomHadith}
              disabled={loading}
              className="border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Generate Custom
            </Button>
          </div>

          {/* Hadith Display */}
          {hadith && (
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-white">{hadith.header}</h2>
                    <p className="text-lg leading-relaxed text-white whitespace-pre-line">
                      {hadith.hadith_english.trim()}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm text-white/70 space-y-1">
                      <p>Reference: {hadith.refno}</p>
                      <p>Book: {hadith.book}</p>
                      <p>Book Name: {hadith.bookName.trim()}</p>
                      <p>Chapter: {hadith.chapterName}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-white/70">
          <p className="flex items-center justify-center gap-2">
            Created by{" "}
            <a
              href="https://t.me/drkingbd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/90 flex items-center gap-1 font-medium"
            >
              @Drkingbd
              <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </footer>
      </main>
      <Toaster />
    </div>
  )
}

