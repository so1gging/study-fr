export const goCommand = () => {
  console.log('로봇이 대신 처리하도록 ! 🤖')
}

export const goLunch = () => {
  console.log('우리 식사하러 갈까요? 🍚')
}

export const working = () => {
  // 5초 이상 걸리는 작업
  try {
    setTimeout(() => {
      console.log('첫번째 작업 완료 ! 🤖')
      working2()
    }, 5000)
  } catch (e) {
    console.log('으악! 😵')
  }
}

export const workingWithPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('첫번째 작업 완료 ! 🤖')
    }, 5000)
  })
    .then((value) => {
      console.log(value)
    })
    .catch((e) => {
      console.log('으악! 😵')
    })
}

export const working2 = () => {
  // 5초 이상 걸리는 작업
  setTimeout(() => {
    console.log('두번째 작업 완료 ! 🤖')
    working3()
  }, 5000)
}

export const working3 = () => {
  // 5초 이상 걸리는 작업
  setTimeout(() => {
    console.log('세번째 작업 완료 ! 🤖')
  }, 5000)
}

const fullCallbackWorking = () => {
  setTimeout(() => {
    console.log('첫번째 작업 완료 ! 🤖')
    setTimeout(() => {
      console.log('두번째 작업 완료 ! 🤖')
      setTimeout(() => {
        console.log('세번째 작업 완료 ! 🤖')
        setTimeout(() => {
          console.log('네번째 작업 완료 ! 🤖')
          setTimeout(() => {
            console.log('다섯번째 작업 완료 ! 🤖')
          }, 5000)
        }, 5000)
      }, 5000)
    }, 5000)
  }, 5000)
}
