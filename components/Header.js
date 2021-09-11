import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

function Header() {
  const { user, error, isLoading } = useUser();
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
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

        <div className="flex items-center">
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

          <div className="ml-5 pl-5 border-l-[1px] items-center">
            {user ? (
              <Link href="/api/auth/logout">
                <a className="font-neutratext cursor-pointer">LOGOUT</a>
              </Link>
            ) : (
              <Link href="/api/auth/login">
                <a className="font-neutratext cursor-pointer">LOGIN</a>
              </Link>
            )}
          </div>
        </div>
      </header>
      <div id="menu" className={`${open ? "transform-none !important" : ""}`}>
        <ul>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">
                Men's Watches
              </a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">
                Women's Watches
              </a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">Straps</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">The Story</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">
                Design House
              </a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">Lookbook</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">
                Ambassadors
              </a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <a className="font-neutratexttf text-2xl text-white">Reviews</a>
            </Link>
          </li>
        </ul>

        <div className="menu2 font-neutratexttf text-base text-[#978d8d] flex flex-wrap justify-between mt-5">
          <ul>
            <li>
              <Link href="#">
                <a>Strap Manual</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Ambassador Care</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Size Guide</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Shipping & Delivery</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Return & Exchanges</a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="#">
                <a>Materials</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Track My Order</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Journal</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
