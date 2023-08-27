import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full px-4 items-center bg-white h-[56px] fixed header-shadow left-0 top-0 right-0">
      <div className="max-w-[1280px] flex m-auto h-full w-auto items-center px-4">
        <a href="/">
          <Image src="/lpc.jpg" width={50} height={40} alt="Website logo" />
        </a>
        <input
          type="search"
          placeholder="Search..."
          className="input input-bordered w-full max-w-md ml-5 h-10"
        />
        <div className="flex items-center ml-auto gap-4">
          <a className="ml-20 h-10 text-base hover:text-[#2f3ab2] py-2 px-4 hover:bg-[#3B49DF19] hover:rounded-md">
            Log in
          </a>
          <a className="h-10 mr-2 border-[1px] px-[15px] py-[7px] text-[#3B49DF] items-center inline-flex relative hover:bg-[#3B49DF] border-[#2F3AB2] hover:text-white hover:z-[1] hover:underline rounded-md">
            Crear cuenta
          </a>
        </div>
      </div>
    </header>
  );
}
