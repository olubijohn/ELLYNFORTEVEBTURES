"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

const ContactUs = () => {
  const { router } = useAppContext();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Connect With Us
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Reach out through our social media channels or drop us an email
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-12 px-6 md:px-16 lg:px-32 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media Cards */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Social Media
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Image
                    src={assets.facebook_icon}
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Facebook</h3>
                  <Link
                    href="https://www.facebook.com/ellyngoldcollections?mibextid=wwXIfr&mibextid=wwXIfr"
                    target="_blank"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    @ellynforte
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Image
                    src={assets.instagram_icon}
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Instagram</h3>
                  <Link
                    href="https://www.instagram.com/ellyn_forte_backkup?igsh=Y2tlY3VwMmpiYmEx&utm_source=qr"
                    target="_blank"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    @ellynforte
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Image
                    src={assets.twitter_icon}
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">tiktok</h3>
                  <Link
                    href="https://www.tiktok.com/@ellyne_gold?_t=ZM-8xLlvU9kdlQ&_r=1"
                    target="_blank"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    @ellynforte
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Image
                    src={assets.whatsapp_icon}
                    alt="Whatsapp"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    Join Whatsapp Group
                  </h3>
                  <Link
                    href="
https://chat.whatsapp.com/DDBWWqyuGpC3exSWb5y1rN"
                    target="_blank"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    @ellynforte
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Info
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Image
                    src={assets.email_icon}
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <Link
                    href="mailto:Ellynforteventures@gmail.com"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Ellynforteventures@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Image
                    src={assets.phone_icon}
                    alt="Phone"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600 text-sm">(+234)813-973-5166</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Image
                    src={assets.location_icon}
                    alt="Location"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Location</h3>
                  <p className="text-gray-600 text-sm">
                    Worldgate shopping centre Shop 225 One man village, Maraba
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Need help?
          </h3>
          <p className="text-gray-600 mb-6">
            Check out our{" "}
            <Link href="/faq" className="text-blue-600 hover:underline">
              FAQ page
            </Link>{" "}
            for quick answers to common questions.
          </p>
          <button
            onClick={() => router.push("/faq")}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Visit FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
