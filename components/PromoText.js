import Link from "next/link";

function PromoText({ title, p, btn, color }) {
  return (
    <div
      className={`relative flex items-start justify-center flex-col py-10 px-8 text-${color} max-w-[1305px] min-h-[490px] mx-auto `}
    >
      <h5 className="font-neutratexttf text-4xl leading-10 mb-3 max-w-[360px]">
        {title}
      </h5>
      <p className="font-neutratexttf max-w-[360px] mb-5 opacity-70 tracking-wider">
        {p}
      </p>
      <Link href="/">
        <a className="font-neutratexttf btn">{btn}</a>
      </Link>
    </div>
  );
}

export default PromoText;
