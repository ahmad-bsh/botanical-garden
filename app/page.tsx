import Image from "next/image"
import { Discover, Hero, NewsAndUpdates } from "./_components"

export default function Home() {
  return (
    <div>
      <Hero />
      <Discover/>
      <NewsAndUpdates/>
    </div>
  )
}
