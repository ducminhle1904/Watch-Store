import Link from "next/link";

function Articles() {
  return (
    <div className="relative pt-12 pb-12">
      <div className="center">
        <div className="flex flex-col md:flex-row justify-between md:justify-around">
          <div className="flex flex-col w-full md:w-[350px] lg:w-[620px] flex-grow-0 lg:flex-grow items-center text-center relative mb-[50px] md:mb-0">
            <Link href="#">
              <a className="mb-10 max-w-[475px] relative w-full">
                <img
                  src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631175241/design-house_1_jzzokg.jpg"
                  alt="design house"
                />
              </a>
            </Link>
            <Link href="#">
              <a className="font-neutratexttf text-2xl hover:opacity-50 duration-200 ease-in-out">
                DESIGNED IN SWEDEN
              </a>
            </Link>
            <p className="max-w-[390px] opacity-75 font-neutratexttf py-6 hidden md:block">
              Experience the excellence of true Swedish craftsmanship. Every
              watch we create is designed in-house, with meticulous precision
              and absolute perfection in mind.
            </p>
            <Link href="#">
              <a
                className="font-neutratexttf text-sm pb-[2px] absolute -bottom-8"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#cab49c",
                }}
              >
                READ MORE
              </a>
            </Link>
          </div>

          <div className="flex flex-col w-full md:w-[350px] lg:w-[620px] flex-grow-0 lg:flex-grow items-center text-center relative">
            <Link href="#">
              <a className="mb-10 max-w-[475px] relative w-full">
                <img
                  src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631175240/materials_uswgoc.jpg"
                  alt="design house"
                />
              </a>
            </Link>
            <Link href="#">
              <a className="font-neutratexttf text-2xl hover:opacity-50 duration-200 ease-in-out">
                ONLY PREMIUM MATERIALS
              </a>
            </Link>
            <p className="max-w-[390px] opacity-75 font-neutratexttf py-6 hidden md:block">
              All Ambassador watches are built with extreme precision and
              attention to detail. We are committed to using the absolute best
              materials while still offering an affordable price.
            </p>
            <Link href="#">
              <a
                className="font-neutratexttf text-sm pb-[2px] absolute -bottom-8"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#cab49c",
                }}
              >
                READ MORE
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
