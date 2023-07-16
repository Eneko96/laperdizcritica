import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full px-4 items-center h-[56px] bg-red-100 fixed">
      <div className="max-w-[1280px] flex m-auto h-full w-auto items-center px-4">
        <Image
          src="/lpc.jpg"
          width={60}
          height={40}
          alt="Website logo"
        />
        <input type="search" placeholder="Type here" className="input input-bordered w-full max-w-md ml-5" />
        <div className="flex items-center m-auto gap-4">
          <a className="btn ml-20">Log in</a>
          <button className="btn btn-outline btn-primary">Create account</button>
        </div>
      </div>
    </header>
  )
}
