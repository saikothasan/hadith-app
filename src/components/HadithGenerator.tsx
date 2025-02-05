"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import HadithDisplay from "@/components/HadithDisplay"
import { fetchHadith } from "@/lib/api"
import type { HadithResponse } from "@/types/hadith"

export default function HadithGenerator() {
  const [hadith, setHadith] = useState<HadithResponse["data"] | null>(null)
  const [loading, setLoading] = useState(false)
  const [collection, setCollection] = useState("bukhari")
  const [hadithNumber, setHadithNumber] = useState("")
  const { toast } = useToast()

  const handleFetchHadith = async (isRandom: boolean) => {
    if (!isRandom && !hadithNumber) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a hadith number",
      })
      return
    }

    setLoading(true)
    try {
      const data = await fetchHadith(collection, isRandom ? undefined : hadithNumber)
      setHadith(data)
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
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-3xl font-bold text-white">Random Hadith Generator</h1>
        <p className="text-white/70">Discover the wisdom of authentic hadiths</p>
      </div>

      <div className="w-full max-w-2xl space-y-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Select value={collection} onValueChange={setCollection}>
            <SelectTrigger className="w-full sm:w-[180px] bg-white/5 border-white/10 text-white">
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
            onClick={() => handleFetchHadith(true)}
            disabled={loading}
            className="w-full sm:w-auto border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors"
          >
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Generate Random
          </Button>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <Input
              type="number"
              placeholder="Enter Hadith Number"
              value={hadithNumber}
              onChange={(e) => setHadithNumber(e.target.value)}
              className="w-full sm:w-[180px] bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            <Button
              variant="outline"
              onClick={() => handleFetchHadith(false)}
              disabled={loading}
              className="w-full sm:w-auto border-white/10 text-white hover:bg-white/10 hover:text-white transition-colors"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Generate Custom
            </Button>
          </div>
        </div>

        {hadith && <HadithDisplay hadith={hadith} />}
      </div>

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
  )
}

