'use client'

import { goCommand, goLunch, workingWithPromise } from '@/libs/functions/promise'

const callSingleThreadExampleFunctions = () => {
  goCommand()
  workingWithPromise()
  goLunch()
}

export default function Page() {
  return (
    <div>
      <button onClick={callSingleThreadExampleFunctions}>싱글스레드 예제</button>
    </div>
  )
}
