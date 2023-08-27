import Image from "next/image";
const actions = new Map([
  ["like", "text-[#dc2626]"],
  ["comment", "text-[#F59E0B]"],
  ["save", "text-[#4f46E5]"],
]);

export default async function Article() {
  return (
    <div>
      <div className="layout text-base w-full max-w-[1280px] mx-auto grid gap-4 grid-cols-article-layout p-4">
        <aside className="block row-end-initial w-[4rem]">
          <div className="actions p-0 bg-[rgb_245_245_245] grid gap-6 sticky shadow-none justify-stretch top-[129px]">
            <div className="grid gap-4 justify-stretch">
              {Array.from(actions).map(([key, value], idx) => (
                <div key={`key_${key}`} className="flex flex-col">
                  <button className="relative inline-flex flex-col items-center">
                    <span className="p-2 text-[#3d3d3d] transitions-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        role="img"
                        aria-hidden="true"
                        className={`story-icon fill-current hover:${value} transition-all`}
                      >
                        <g
                          clip-path="url(#clip0_988_3276)"
                          className="fill-current"
                        >
                          <path
                            className="fill-current"
                            d="M19 14V17H22V19H18.999L19 22H17L16.999 19H14V17H17V14H19ZM20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.992L19.059 11.574C20.39 10.05 20.32 7.65998 18.827 6.16998C17.324 4.67098 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09103 4.60598 6.67503 4.66798 5.17203 6.17198C3.68203 7.66198 3.60703 10.047 4.98003 11.623L13.412 20.069L12 21.485L3.52003 12.993C1.41603 10.637 1.49503 7.01898 3.75603 4.75698C6.02103 2.49298 9.64403 2.41698 12 4.52898C14.349 2.41998 17.979 2.48998 20.242 4.75698H20.243Z"
                            fill="#525252"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_988_3276">
                            <rect width="24" height="24" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="w-[40px] h-[40px] p-2 transition-all text-[#575757] text-sm">
                      {idx + 10}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="scroll-mt-[56px] grid gap-4">
          <div className="min-w-0">
            <div className="b-1 rounded-md bg-white h-50 mb-2 shadow-card">
              <header>
                <div className="article-meta px-[64px] pt-[32px]">
                  <div className="flex sm:items-start flex-col sm:flex-row">
                    <div className="flex flex-1 mb-5 items-start">
                      <div className="relative">
                        <a href="/pavanbelagatti">
                          <Image
                            className="rounded-full align-middle"
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--2vX_-1o2--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/68703/6b2032e7-c028-4024-b132-260b569d1989.jpeg"
                            width="40"
                            height="40"
                            alt="Pavan Belagatti"
                          />
                        </a>
                      </div>
                      <div className="pl-3 flex-1">
                        <a
                          href="/pavanbelagatti"
                          className="story-link font-bold text-base hover:text-[#336699]"
                        >
                          Fina Ramos
                        </a>
                        <p className="text-xs text-gray-500">
                          Posted on{" "}
                          <time
                            dateTime="2023-08-25T04:27:39Z"
                            className="date-no-year"
                            title="Friday, August 25, 2023 at 5:27:39 AM"
                          >
                            Aug 25
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold sm:font-heavy  mb-2 medium">
                    La agenda ONU para 2030
                  </h1>
                  <div className="spec__tags flex flex-wrap">
                    <a
                      className="story-tag hover:bg-[#ED155619]"
                      href="/t/database"
                    >
                      <span className="story-tag__prefix text-[#ED1556] transition-all flex-shrink-0">
                        #
                      </span>
                      actualidad
                    </a>
                    <a className="story-tag hover:bg-[#2D2A2A1A]" href="/t/ai">
                      <span className="story-tag__prefix text-[#2d2a2a] transition-all flex-shrink-0">
                        #
                      </span>
                      critica
                    </a>
                    <a
                      className="story-tag hover:bg-[#06B5001A] "
                      href="/t/devops"
                    >
                      <span className="story-tag__prefix text-[#06B500] transition-all flex-shrink-0">
                        #
                      </span>
                      europa
                    </a>
                    <a
                      className="story-tag hover:bg-[#3B49DF1A]"
                      href="/t/developers"
                    >
                      <span className="story-tag__prefix text-[#3b49df] transition-all flex-shrink-0">
                        #
                      </span>
                      liberalismo
                    </a>
                  </div>
                </div>
              </header>
              <div className="py-8 px-16">
                <p className="content-p">
                  Los siguientes son cinco breves artículos y enlaces a dos
                  podcasts cortos en los que la Agenda 2030 de las Naciones
                  Unidas se expone y decodifica. La Agenda 20130, por supuesto,
                  es simplemente la Agenda 21 de las Naciones Unidas sobre los
                  esteroides. Otros sinónimos de la Agenda 21 de la ONU son
                  &quot;crecimiento inteligente&quot;, &quot;planificación
                  integral del uso de la tierra&quot; y &quot;desarrollo
                  sostenible&quot;. No se deje engañar por todos los cambios de
                  nombre. Estos programas sancionados por la ONU están diseñados
                  para dar paso a una dictadura totalitaria mundial judía
                  comunista / sionista que empobrecería, esclavizaría y
                  &quot;genocidiaría&quot; a la gran mayoría de la humanidad.
                </p>
                <p className="content-p">
                  I. La Agenda 2030 de las Naciones Unidas decodificada: es un
                  plan para la esclavitud global de la humanidad bajo la bota de
                  los maestros corporativos
                </p>
              </div>
            </div>
          </div>
        </main>
        <aside className="block w-[3fr]">
          <div className="grid gap-4 pb-4 break-words">
            <div className="border-t-[#551029] grid pt-0 p-4 gap-4 bg-white shadow-card rounded-md border-t-[2rem] border-solid">
              <div className="-mt-4">
                <a href="/pavanbelagatti" className="flex">
                  <span className="crayons-avatar crayons-avatar--xl  mr-2 shrink-0">
                    <Image
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--yN1AKjH3--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/68703/6b2032e7-c028-4024-b132-260b569d1989.jpeg"
                      className="crayons-avatar__image rounded-full"
                      alt=""
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                  </span>
                  <span className="crayons-link crayons-subtitle-2 mt-5 text-xl font-bold">
                    Fina Ramos
                  </span>
                </a>
              </div>
              <div>
                <button className="whitespace-nowrap w-full relative inline-block py-2 px-4 rounded-md text-base transition-all bg-blue-500 text-white hover:bg-blue-800">
                  Seguir
                </button>
              </div>
              <div>
                <ul className="list-none m-0 p-0">
                  <li className="m-0">
                    <div className="text-xs font-bold uppercase text-gray-500">
                      Unido
                    </div>
                    <div className="">
                      <time dateTime="2022-04-11T18:13:36Z" className="date">
                        Apr 11, 2022
                      </time>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
