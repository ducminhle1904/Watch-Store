import Link from "next/link";

function Promo() {
  return (
    <div className="relative h-[60vh]">
      <div className="relative center">
        <div className="absolute top-0 bottom-0 w-full h-[490px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631109902/promo-01_r1rqpg.jpg"
            alt="promo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-start justify-center flex-col py-10 px-8 text-white max-w-[1305px] min-h-[490px] mx-auto">
          <h5 className="font-neutratexttf text-4xl leading-10 mb-3 max-w-[360px]">
            Meet the mystery behind it all
          </h5>
          <p className="font-neutratexttf max-w-[360px] mb-5 opacity-70 tracking-wider">
            This tale begins with our namesake’s profession: the ambassador.
            Like all envoys, the original ambassador’s job was to be the
            manifestation of his homeland on foreign soils. But, he was always
            different...
          </p>
          <Link href="/">
            <a className="font-neutratexttf px-7 py-3 border-[#e4c7a5] border relative inline-block btn flex-shrink-0 align-middle hover:bg-[#9c8265] duration-300 ease-in-out">
              READ OUR STORY
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Promo;
