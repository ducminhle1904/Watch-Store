import PromoText from "./PromoText";

function Design({ color }) {
  const title = "Designed In-House";
  const p =
    "Don't settle for less. We design everything in-house, down to the smallest details. When you buy an Ambassador watch, you're purchasing a master-crafted timepiece that attracts admiration and compliments.";
  const btn = "LEARN MORE";
  return (
    <div className="relative pb-0 md:pb-16">
      <div className="center">
        <div className="flex mx-auto px-5">
          <PromoText title={title} p={p} btn={btn} color={color} />
          <div className="w-2/4 xl:max-w-[485px] mr-3 hidden md:block">
            <img
              src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631156091/design-house_fxja2g.jpg"
              alt="design house"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="hidden max-w-[330px] lg:flex flex-col">
            <div className="mb-5">
              <img
                src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631156091/design-02_lthdvx.jpg"
                alt="design"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631156091/design-03_xmzzkm.jpg"
                alt="design"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
