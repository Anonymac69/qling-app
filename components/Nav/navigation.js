import Link from 'next/Link'

export const Navigation = () => {
  return (
    <nav className="bg-gray-900 flex justify-center">
      <div className="flex font-bold justify-between px-3 py-3 text-lg text-white w-full">
        <p className="mx-2"><Link href="/">Qingly</Link></p>
        <ul>
          <small className="mx-2 text-xs"><Link href="/about">About</Link></small>
          <small className="mx-2 text-xs"><Link href="/profile">Profile</Link></small>
          <small className="mx-2 text-xs"><Link href="/account">Account</Link></small>
        </ul>
      </div>
    </nav>
  )
}