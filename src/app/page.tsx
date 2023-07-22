import Image from "next/image";

async function getMockData() {
  const res = await new Promise((res, rej) => res(5))
  const image = await fetch('https://picsum.photos/275/650')
  return {
    count: res,
    image: await image.blob()
  }
}

export default async function Home() {
  const { count, image } = await getMockData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-[1280px] mx-auto grid gap-5 p-4 grid-cols-maing">
        <div className="min-w-0">
          <div className="b-1 rounded-md h-50 shadow-sm bg-white">
            <div className="p-4">
              <h2 className="mb-4 text-gray-900 text-xl leading-5 font-bold">La Perdiz Critica es una comunidad de impresionantes libres pensadores</h2>
              <p className="mb-4 text-gray-700">Bla bla bla mucho texto que si que no me cuentes tu vida mi brodel</p>
              <button className="btn btn-outline btn-primary w-full mb-1">Create account</button>
              <button className="btn btn-ghost w-full">Log in</button>
            </div>
          </div>
        </div>
        <div className="min-w-0 scroll-margin-top: 56px">
          <div className="b-1 rounded-md bg-white h-50">
            <div className="h-full w-full aspect-auto object-scale-down rounded-t-md">
              <Image src='https://picsum.photos/650/275' alt="Presentation image" width={650} height="275" className="w-full aspect-auto object-scale-down rounded-t-md" />
              <div className="p-5">
                <div className="flex items-center">
                  <div className="relative mr-2">
                    <a className="w-7 h-7">
                      <Image alt="Person profile" src="https://picsum.photos/32/32" width={32} height={32} className="w-full h-full inline-block rounded-xl" />
                    </a>
                  </div>
                  <div>
                    <div>Name Surname</div>
                    <a className="text-grey-100 font-xs">{Intl.DateTimeFormat('default', { day: '2-digit', month: 'short' }).format(Date.now())}</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="min-w-0 w-[1fr]">
          <div className="b-1 rounded-md bg-white h-50 p-4">Hi</div>
        </div>
      </div>
    </main>
  )
}

//
// gap 1 rem
// layout right block righ 1fr left 240px (240px 2fr 1fr)
// padding 1rg-cols-[240px_2fr_1fr]e
