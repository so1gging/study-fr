'use client'

import { goCommand, goLunch, workingWithPromise, 버스를_타러_갑시다 } from '@/libs/functions/promise'
import { log } from 'util'

const callSingleThreadExampleFunctions = () => {
  goCommand()
  workingWithPromise()
  goLunch()
}

const promise = () => {
  const 민수 = 버스를_타러_갑시다(7, '지하철')
  const 철수 = 버스를_타러_갑시다(8, '지하철')

  민수.then((result) => console.log(`민수 ` + result)).catch((reason) => {
    console.log(`민수 최후의 수단으로 ${reason}를 타러 가고 있어요.`)
  })

  철수.then((result) => console.log('철수 ' + result)).catch((reason) => {
    console.log(`철수 최후의 수단으로 ${reason}를 타러 가고 있어요. 😅`)
  })
}

export default function Page() {
  return (
    <div>
      <button onClick={callSingleThreadExampleFunctions}>싱글스레드 예제</button>
      <button onClick={promise}>Promise 예제</button>
    </div>
  )
}
