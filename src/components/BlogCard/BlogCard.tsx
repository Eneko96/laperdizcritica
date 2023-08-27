import Image from "next/image";
const tag = "mb-2 font-sm flex wrap gap-[1px] text-gray-800 ml-[-4px]";
const imgs = [
  "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg",
  "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg",
  "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg",
  "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
  "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg",
];

export const BlogCard = ({
  image,
  isSaved,
}: {
  image: number;
  isSaved: boolean;
}) => {
  return (
    <div className="b-1 rounded-md bg-white h-50 mb-2 shadow-card">
      <div className="h-full w-full aspect-auto object-scale-down rounded-t-md">
        {image === 1 && (
          <Image
            src="https://picsum.photos/650/275"
            alt="Presentation image"
            width={650}
            height="275"
            className="w-full aspect-auto object-scale-down rounded-t-md"
          />
        )}
      </div>
      <div className="story-body p-5">
        <div className="mb-2">
          <div className="flex items-center">
            <div className="relative mr-2">
              <a>
                <Image
                  alt="Person profile"
                  src="https://picsum.photos/32/32"
                  width={32}
                  height={32}
                  className="inline-block rounded-xl w-7 h-7"
                />
              </a>
            </div>
            <div>
              <button className="text-sm">Gnefaugh</button>
              <a className="text-grey-100 text-xs block">
                {Intl.DateTimeFormat("default", {
                  day: "2-digit",
                  month: "short",
                }).format(Date.now())}
              </a>
            </div>
          </div>
        </div>
        <div className="story pl-7">
          <h3 className="break-words text-2xl text-[#171717] font-bold mb-1">
            <a
              className="text-inherit block hover:text-[#2F3AB2] hover:transition-colors cursor-pointer"
              href="/article"
            >
              Article title {image}
            </a>
          </h3>
          <div className="story-tags mb-2 font-sm flex wrap gap-[1px] text-gray-800 ml-[-4px]">
            <a className="story-tag text-sm">#sometag</a>
            <a className="story-tag text-sm">#sometag</a>
            <a className="story-tag text-sm">#sometag</a>
            <a className="story-tag text-sm">#sometag</a>
          </div>
        </div>
        <div className="story-bottom flex justify-between items-center text-sm">
          <div className="flex ml[-8px]">
            <a className="pl[8px] hover:bg-[#00000009] hover:border-transparent hover:shadow-none hover:text-[#090909] hover:z-[1] pb-1 pl-2 pr-3 pt-1 rounded transition-button">
              <div className="pointer-events-none flex items-center">
                <span className="flex items-center flex-row">
                  {[1, 2, 3, 4].map((idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#f5f5f5] border-[2px] border-solid border-white rounded-[15px] mr-[-0.75em] w-7 h-7 cursor-pointer"
                    >
                      <Image
                        alt="reaction"
                        src={imgs[idx]}
                        className="mt-[3px] ml-[3px] align-middle"
                        width="18"
                        height="18"
                      />
                    </span>
                  ))}
                </span>
                <span className="reactions-counter ml-[1em] text-[#3D3D3D]">
                  45 reactions
                </span>
              </div>
            </a>
            <a className="flex items-center pl[8px] hover:bg-[#00000009] hover:border-transparent hover:shadow-none hover:text-[#090909] hover:z-[1] pb-1 pl-2 pr-3 pt-1 rounded transition-button text-[#3D3D3D]">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="crayons-icon mr-1"
              >
                <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
              </svg>
              <span className="pointer-events-none">11</span>
              <span className="inline">&nbsp;Comments</span>
            </a>
          </div>
          <div className="story-save flex items-center">
            <small className="text-xs mr-2 text-[#525252]">2 min read</small>
            <button className="p-2 hover:bg-[#3B49DF1A] relative inline-block rounded-md items-center cursor-pointer border-none">
              <svg
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className={`crayons-icon c-btn__icon ${
                  isSaved ? "fill-[#245cfd]" : "fill-inherit"
                }`}
              >
                <path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
