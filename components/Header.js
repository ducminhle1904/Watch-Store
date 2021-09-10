import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [show, handleShow] = useState(false);
  const [open, setOpen] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div
      className={`transition duration-100 ${
        show ? "bg-black" : ""
      } fixed z-20 w-screen mx-auto `}
    >
      <header className="container flex items-center mx-auto justify-between lg:justify-around h-16 left-0 right-0 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <Link href="/">
          <a className="font-neutratext text-2xl">PRIME AMBASSADOR</a>
        </Link>

        <ul className="hidden items-center lg:flex">
          <li className="mx-6 relative">
            <Link href="#">
              <a className="nav__link font-neutratext relative inline-block">
                MEN'S
              </a>
            </Link>
          </li>
          <li className="mx-6 relative">
            <Link href="#">
              <a className="nav__link font-neutratext relative inline-block">
                WOMEN'S
              </a>
            </Link>
          </li>
          <li className="mx-6 relative">
            <Link href="#">
              <a className="nav__link font-neutratext relative inline-block">
                STRAPS
              </a>
            </Link>
          </li>
          <li className="mx-6 relative">
            <Link href="#">
              <a className="nav__link font-neutratext relative inline-block">
                BRAND
              </a>
            </Link>
          </li>
          <li className="mx-6 relative">
            <Link href="#">
              <a className="nav__link font-neutratext relative inline-block">
                SERVICE
              </a>
            </Link>
          </li>
        </ul>

        <div className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <Link href="/cart">
            <a className="font-neutratext ml-1 hidden md:block">CART</a>
          </Link>
        </div>
      </header>
      <ul id="menu" className={`${open ? "transform-none !important" : ""}`}>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">
              Men's Watches
            </a>
          </Link>
        </li>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">
              Women's Watches
            </a>
          </Link>
        </li>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">Straps</a>
          </Link>
        </li>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">The Story</a>
          </Link>
        </li>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">
              Design House
            </a>
          </Link>
        </li>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">Lookbook</a>
          </Link>
        </li>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">Ambassadors</a>
          </Link>
        </li>
        <li className="mb-1" style={{ borderBottom: "1px solid white" }}>
          <Link href="">
            <a className="font-neutratexttf text-2xl text-white">Reviews</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
