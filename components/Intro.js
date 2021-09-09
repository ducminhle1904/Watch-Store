import Link from "next/link";

function Intro({ title, p, btn, color }) {
  return (
    <div className="pt-10 pb-20">
      <div className="center">
        <div className="flex flex-col items-center text-center">
          <div
            className="h-9 mb-6 w-[1px] animate-bounce"
            style={{ backgroundColor: "#beb7b1" }}
          ></div>
          <div
            className="font-neutratexttf mb-4 text-base z-10"
            style={{ color: "#9c8265" }}
          >
            Explore
          </div>
          <div className={`font-neutratext leading-5 text-4xl mb-4 z-10`}>
            <h3 className={color && "text-white"}>{title}</h3>
          </div>
          <p
            className={`max-w-[500px] opacity-70 leading-7 tracking-wider mb-2 ${
              color && "text-white"
            }`}
          >
            {p}
          </p>
          {btn ? (
            <Link href="/">
              <a
                className={`font-neutratexttf px-7 py-3 border-[#e4c7a5] border relative inline-block btn flex-shrink-0 align-middle hover:bg-[#9c8265] duration-300 ease-in-out ${
                  color && "text-white"
                }`}
              >
                {btn}
              </a>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Intro;
