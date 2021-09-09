import Link from "next/link";

function Banner() {
  return (
    <div className="relative pt-32 h-90v">
      <div className="absolute top-0 bottom-0 w-full">
        <img
          src="https://res.cloudinary.com/dppndtfp8/image/upload/v1630976962/head-bg-01_c9ok2k.jpg"
          alt="Prime Ambassador Watches"
          style={{ height: "100%", width: "100%" }}
        />
        <div
          className="absolute bottom-0"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            src="https://res.cloudinary.com/dppndtfp8/image/upload/v1630976991/watch-half_gb4z7r.png"
            alt="Prime Ambassador Watches"
            style={{ width: 500 }}
          />
        </div>
      </div>

      <div className="absolute mx-auto max-w-[1345px] flex flex-col items-center text-center top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-white">
        <h1 className="text-5xl font-neutratexttf tracking-wider leading-10 mb-3">
          THE PRIME AMBASSADOR
        </h1>
        <div className="max-w-[720px] mb-8">
          <p className="font-neutratext tracking-wide">
            Set yourself apart from the realm of the ordinary and make your mark
            with a unique, stunning horological masterpiece. The Prime
            Ambassador is a classical testament to exceptional craftsmanship.
          </p>
        </div>

        <Link href="/">
          <a className="font-neutratexttf px-7 py-3 border-[#e4c7a5] border relative inline-block btn flex-shrink-0 align-middle hover:bg-[#9c8265] duration-300 ease-in-out">
            MAKE YOUR MARK
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
