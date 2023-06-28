import Link from "next/link"

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="bg-pink-300 h-12 w-12 rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>
          </div>
          <span className="ml-3 text-xl">Crypto Start</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/tags/bitcoin"} className="mr-5 font-bold hover:text-pink-500">Về Bitcoin</Link>
          <Link href={"/tags/altcoin"} className="mr-5 font-bold hover:text-pink-500">AltCoin</Link>
          <Link href={"/tags/airdrop"} className="mr-5 font-bold hover:text-pink-500">Săn Airdrop</Link>
          <Link href={"/tags/blockchain"} className="mr-5 font-bold hover:text-pink-500">Kiến thức Blockchain</Link>
          <Link href={"/tags/crypto"} className="mr-5 font-bold hover:text-pink-500">Crypto</Link>
        </nav>
        <button className="inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0">
          Start / Bắt đầu
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  )
}