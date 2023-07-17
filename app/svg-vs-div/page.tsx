'use client'
import Div from '@/components/Div'
import { useEffect } from 'react'

const MAX = 100

export default function Page() {
  useEffect(() => {
    console.log(performance.now())
  }, [])

  return (
    <>
      {new Array(MAX).fill(0).map((_, idx) => (
        <Div key={`svg-${idx}`} />
      ))}
    </>
  )
}
