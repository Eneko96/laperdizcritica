import Head from "next/head"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-[1280px] mx-auto grid gap-5 p-4 grid-cols-maing">
        <div className="min-w-0">
          <div className="b-1 rounded-md bg-blue-100 h-50">Hi</div>
        </div>
        <div className="min-w-0 scroll-margin-top: 56px">
          <div className="b-1 rounded-md bg-yellow-100 h-50">Hi</div>
        </div>
        <div className="min-w-0 w-[1fr]">
          <div className="b-1 rounded-md bg-white h-50">Hi</div>
        </div>
      </div>
    </main>
  )
}

//
// gap 1 rem
// layout right block righ 1fr left 240px (240px 2fr 1fr)
// padding 1rg-cols-[240px_2fr_1fr]e
