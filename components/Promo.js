import PromoText from "./PromoText";

function Promo({ color, img, title, p, btn }) {
  return (
    <div className="relative h-[60vh]">
      <div className="relative center">
        <div className="absolute top-0 bottom-0 w-full h-[490px] overflow-hidden">
          <img src={img} alt="promo" className="w-full h-full object-cover" />
        </div>
        <PromoText title={title} p={p} btn={btn} color={color} />
      </div>
    </div>
  );
}

export default Promo;
