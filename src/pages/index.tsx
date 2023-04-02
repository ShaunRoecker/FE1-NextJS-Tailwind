import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-slate-400 w-full h-16 flex">
      <h1 className="text-5xl">
        The Home Page
      </h1>
      <ul className="flex">
        <li>
          <Link href="/portfolio" className="text-red-400 text-xl">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients" className="text-red-400 text-xl">Clients</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage;