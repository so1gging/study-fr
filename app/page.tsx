import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>Root page</h2>
      <ul>
        <li>
          <Link href="/react-hook-form">react-hook-form</Link>
        </li>
        <li>
          <Link href="./todo-list">투두리스트</Link>
        </li>
      </ul>
    </div>
  )
}
