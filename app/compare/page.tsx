'use client'
import { useEffect, useMemo, useState } from 'react'

export default function Page() {
  const [count, setCount] = useState<{ count: number }>({ count: 0 })

  useEffect(() => {
    console.log('useEffect 🚀')
  }, [count])

  useEffect(() => {
    console.log('useEffect 🔥')
  }, [count.count])

  const test = useMemo(() => {
    return count.count
  }, [count])

  return (
    <div>
      <h1>첫번째 방법</h1>
      <button
        onClick={() =>
          setCount((prev) => {
            const newPrev = prev
            newPrev.count += 1
            console.log(`change : ${newPrev.count} ✨`)
            return newPrev
          })
        }
      >
        클릭
      </button>
      <h3>{count.count}</h3>
      <h3>{test}</h3>
      <hr />
    </div>
  )
}
