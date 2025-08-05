"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import NewsLetter from "@/components/NewsLetter";
import HeaderSlider from "@/components/HeaderSlider";

const AboutUs = () => {
  const { router } = useAppContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        {/* <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the passion and dedication behind Ellyn Forte Ventures
          </p>
        </div>
      </div> */}

        {/* Main Content */}
        <div className="py-12 px-6 md:px-16 lg:px-32 max-w-6xl mx-auto">
          {/* Our Story Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Ellyn Forte Ventures is more than just a shopping destination
                  - we're a community of fashion enthusiasts dedicated to
                  bringing you quality products that elevate your style and
                  confidence.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded in [Year], we started as a small boutique with big
                  dreams. Today, we've grown into a trusted name in fashion and
                  lifestyle products, serving customers across Nigeria and
                  beyond.
                </p>
                <p className="text-gray-600">
                  Our journey has been guided by our core values of quality,
                  authenticity, and exceptional customer service.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={assets.logo_main}
                  alt="Our Team"
                  fit
                  className="object-fit"
                />
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {/* <Image
                  src={assets.target_icon} // You'll need to add this to your assets
                  alt="Mission"
                  width={24}
                  height={24}
                /> */}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600">
                To empower individuals through fashion by providing
                high-quality, affordable products that inspire confidence and
                self-expression. We strive to create a seamless shopping
                experience that exceeds our customers' expectations.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Image
                    src={assets.heart_icon} // You'll need to add this to your assets
                    alt="Values"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Values
                </h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Quality: We source only the best products for our customers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Integrity: Honest business practices and transparent pricing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Customer Focus: Your satisfaction is our top priority
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Innovation: Constantly evolving to meet your needs
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}

          {/* CTA Section */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ready to shop with us?
            </h3>
            <p className="text-gray-600 mb-6">
              Discover our curated collection of quality products
            </p>
            <button
              onClick={() => router.push("/all-products")}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Browse Products
            </button>
          </div>
        </div>
        <ContactUs />
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
