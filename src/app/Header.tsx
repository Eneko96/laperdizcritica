import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full flex justify-between m-auto p-x-4 items-center h-[56px]">
      <div className="flex gap-10">
        <Image
          src="/lpc.jpg"
          width={60}
          height={40}
          alt="Website logo"
        />
        <input type="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="flex align-middle gap-5">
        <button className="btn">Log in</button>
        <button className="btn btn-outline btn-primary">Create account</button>
      </div>
    </header>
  )
}
