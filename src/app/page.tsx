import { BlogCard } from "@/components/BlogCard/BlogCard";
import Image from "next/image";

async function getMockData() {
  const res = await new Promise((res, rej) => res(5));
  const image = await fetch("https://picsum.photos/275/650");
  return {
    count: res,
    image: await image.blob(),
  };
}

export default async function Home() {
  const { count, image } = await getMockData();
  console.log(count, image);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-[1280px] mx-auto grid gap-5 p-4 grid-cols-maing">
        <div className="min-w-0">
          <div className="b-1 rounded-md h-50 shadow-sm bg-white shadow-card">
            <div className="p-4">
              <h2 className="mb-4 text-gray-900 text-xl leading-5 font-bold">
                La Perdiz Critica es una comunidad de impresionantes libres
                pensadores
              </h2>
              <p className="mb-4 text-gray-700">
                Bla bla bla mucho texto que si que no me cuentes tu vida mi
                brodel
              </p>
              <button className="btn btn-outline btn-primary w-full mb-1">
                Create account
              </button>
              <button className="btn btn-ghost w-full">Log in</button>
            </div>
          </div>
        </div>
        <div className="min-w-0 scroll-margin-top: 56px">
          {[1, 2, 3, 4, 5].map((_) => (
            <BlogCard image={_} key={_} />
          ))}
        </div>
        <div className="min-w-0 w-[1fr]">
          <div className="b-1 rounded-md bg-white h-50 p-4 shadow-card">Hi</div>
        </div>
      </div>
    </main>
  );
}
