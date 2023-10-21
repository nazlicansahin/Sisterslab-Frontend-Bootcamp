'use client'

import CoinFlipper from "./components/CoinFlipper/index"
import Counter from "./components/Counter/counter"
export default function Home() {
  return (
    <>
      <CoinFlipper />
    </>
    // <Counter initalCount={0} minCount={-1} maxCount={3} />
  )
}
