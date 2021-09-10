import Intro from "./Intro";

function PrimeCollections() {
  const title = "The Prime Collection";
  const p =
    "A stunning classic featuring sapphire, crystals, elegant details, and refined movement backed by a decade-long warranty. Because you shouldn't settle for less.";
  const btn = "EXPLORE THE COLLECTION";
  return (
    <div className="relative h-[90vh] md:h-[55vh] ">
      <div className="absolute w-full h-full">
        <img
          src="https://res.cloudinary.com/dppndtfp8/image/upload/v1631157181/collection-bg_nbilnm.jpg"
          alt="collection-bg"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Intro title={title} p={p} btn={btn} color={true} />
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className="watches"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dppndtfp8/image/upload/v1631159701/collection-3-right_yazgpl.png')",
            right: "calc(50% - 475px)",
          }}
        ></div>
        <div
          className="watches"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dppndtfp8/image/upload/v1631159702/collection-3-left_gqmsd9.png')",
            left: "calc(50% - 475px)",
          }}
        ></div>
        <div
          className="watches"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dppndtfp8/image/upload/v1631159702/collection-2-right_ikiibi.png')",
            right: "calc(50% - 376px)",
          }}
        ></div>
        <div
          className="watches"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dppndtfp8/image/upload/v1631159701/collection-2-left_x5j0mn.png')",
            left: "calc(50% - 376px)",
          }}
        ></div>
        <div
          className="watches"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dppndtfp8/image/upload/v1631159701/collection-1-right_rczrqf.png')",
            right: "calc(50% - 270px)",
          }}
        ></div>
        <div
          className="watches"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dppndtfp8/image/upload/v1631159701/collection-1-left_ajmvpv.png')",
            left: "calc(50% - 270px)",
          }}
        ></div>
        <div
          className="watches"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dppndtfp8/image/upload/v1631159701/collection-center_tfzzwz.png')",
            left: "calc(50% - 150px)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default PrimeCollections;
