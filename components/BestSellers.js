import Link from "next/link";
import Intro from "./Intro";

function BestSellers() {
  const title = "LEAVE ORDINARY BEHIND";
  const p =
    "You don't believe in the commonplace, and neither do we. We strive for absolute greatness - and our watches are the living illustration of that ideology. Are you ready to make your mark?";

  return (
    <div className="relative mt-[6rem] h-[85vh] lg:h-[65vh] mb-24 md:mb-0 xl:mb-[155px]">
      <div className="absolute text-center w-full text-[345px] leading-3 opacity-10 left-0 top-[25%] font-thin hidden xl:block">
        2021
      </div>
      <div className="center">
        <h3 className="font-neutratext w-full text-center text-2xl absolute left-2/4 -translate-x-2/4 -top-10">
          THE TOP SELLERS
        </h3>
        <div className="flex justify-evenly mx-auto">
          <div className="max-w-[210px] flex-grow z-10" data-aos="fade-up">
            <Link href="/">
              <a className="flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631085981/watch-1921_wtzytu.png"
                  alt="Heritage 1921"
                  className="scale-95 hover:scale-100 transform transition duration-1000 ease-in-out"
                />
                <div
                  className="font-neutratexttf text-xl"
                  style={{ color: "#9c8265" }}
                >
                  Heritage 1921
                </div>
                <div className="font-neutratexttf text-gray-400">$149</div>
              </a>
            </Link>
          </div>
          <div className="max-w-[210px] flex-grow z-10" data-aos="fade-up">
            <Link href="/">
              <a className="flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631085983/watch-1863_iruotu.png"
                  alt="Heritage 1921"
                  className="scale-95 hover:scale-100 transform transition duration-1000 ease-in-out"
                />
                <div
                  className="font-neutratexttf text-xl"
                  style={{ color: "#9c8265" }}
                >
                  Heritage 1863
                </div>
                <div className="font-neutratexttf text-gray-400">$149</div>
              </a>
            </Link>
          </div>
          <div className="max-w-[210px] flex-grow z-10" data-aos="fade-up">
            <Link href="/">
              <a className="flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631085982/watch-1959_pnbfgi.png"
                  alt="Heritage 1921"
                  className="scale-95 hover:scale-100 transform transition duration-1000 ease-in-out"
                />
                <div
                  className="font-neutratexttf text-xl"
                  style={{ color: "#9c8265" }}
                >
                  Heritage 1959
                </div>
                <div className="font-neutratexttf text-gray-400">$149</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Intro title={title} p={p} />
    </div>
  );
}

export default BestSellers;
