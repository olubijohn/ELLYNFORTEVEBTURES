"use client";
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white">
      {/* Logo and Mobile Menu Button */}
      <div className="flex items-center">
        <button
          className="md:hidden mr-4 text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Logo - Using placeholder initially */}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link
          href="/"
          className="hover:text-gray-900 transition text-sm lg:text-base"
        >
          Home
        </Link>
        <Link
          href="/all-products"
          className="hover:text-gray-900 transition text-sm lg:text-base"
        >
          Shop
        </Link>
        <Link
          href="/about-us"
          className="hover:text-gray-900 transition text-sm lg:text-base"
        >
          About Us
        </Link>
        <Link
          href="/testimonials"
          className="hover:text-gray-900 transition text-sm lg:text-base"
        >
          Testimonials
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-gray-100 transition"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <button
          className="p-1 hover:bg-gray-100 rounded-full transition"
          aria-label="Search"
        >
          <span className="text-lg">🔍</span>
        </button>
        {user ? (
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
            <button
              onClick={() => router.push("/cart")}
              className="hover:text-gray-900 transition"
              aria-label="Cart"
            >
              <span className="text-lg">🛒</span>
            </button>
            <button
              onClick={() => router.push("/my-orders")}
              className="hover:text-gray-900 transition"
              aria-label="My Orders"
            >
              <span className="text-lg">📦</span>
            </button>
          </div>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition text-sm lg:text-base"
          >
            <span className="text-lg">👤</span>
            Account
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg border-t border-gray-200 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="hover:text-gray-900 transition py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/all-products"
              className="hover:text-gray-900 transition py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
            <Link
              href="/about-us"
              className="hover:text-gray-900 transition py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/testimonials"
              className="hover:text-gray-900 transition py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </Link>

            <div className="flex flex-col space-y-3 pt-4">
              {user && (
                <>
                  <button
                    onClick={() => {
                      router.push("/cart");
                      toggleMobileMenu();
                    }}
                    className="flex items-center gap-2 hover:text-gray-900 transition py-2"
                  >
                    <span className="text-lg">🛒</span> Cart
                  </button>
                  <button
                    onClick={() => {
                      router.push("/my-orders");
                      toggleMobileMenu();
                    }}
                    className="flex items-center gap-2 hover:text-gray-900 transition py-2"
                  >
                    <span className="text-lg">📦</span> My Orders
                  </button>
                </>
              )}

              {!user && (
                <button
                  onClick={() => {
                    openSignIn();
                    toggleMobileMenu();
                  }}
                  className="flex items-center gap-2 hover:text-gray-900 transition py-2"
                >
                  <span className="text-lg">👤</span> Account
                </button>
              )}

              {isSeller && (
                <button
                  onClick={() => {
                    router.push("/seller");
                    toggleMobileMenu();
                  }}
                  className="text-xs border px-4 py-1.5 rounded-full hover:bg-gray-100 transition w-fit"
                >
                  Seller Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Actions (always visible) */}
      <div className="flex md:hidden items-center gap-4">
        <button className="p-1" aria-label="Search">
          <span className="text-lg">🔍</span>
        </button>
        {user ? (
          <>
            <button
              onClick={() => router.push("/cart")}
              className="hover:text-gray-900 transition"
              aria-label="Cart"
            >
              <span className="text-lg">🛒</span>
            </button>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="hover:text-gray-900 transition"
            aria-label="Account"
          >
            <span className="text-lg">👤</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
