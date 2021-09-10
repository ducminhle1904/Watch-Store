import Image from "next/image";
import Link from "next/link";

function Collections() {
  return (
    <div className="center">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow mx-1 relative cursor-pointer overflow-hidden scale-95 hover:scale-100 transform transition duration-1000 ease-in-out">
          <Link href="/">
            <a>
              <img
                src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631071638/mens_szn29x.jpg"
                alt="Mens Watch"
              />
            </a>
          </Link>

          <h2 className="font-neutratext text-white absolute bottom-7 left-2/4 -translate-x-2/4">
            MEN'S WATCHES
          </h2>
        </div>

        <div className="flex-grow mx-1 relative cursor-pointer overflow-hidden scale-95 hover:scale-100 transform transition duration-1000 ease-in-out">
          <Link href="/">
            <a>
              <img
                src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631071638/womens_lorpkd.jpg"
                alt="Women Watch"
              />
            </a>
          </Link>

          <h2 className="font-neutratext text-white absolute bottom-7 left-2/4 -translate-x-2/4">
            WOMEN'S WATCHES
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Collections;
