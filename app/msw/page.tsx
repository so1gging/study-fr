'use client'
export default function Page() {
  const getData = async () => {
    const test = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await test.json()
    console.log(data)
  }

  return (
    <>
      <button onClick={getData}>api호출</button>
    </>
  )
}
