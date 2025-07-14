import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo_main} alt="logo" />
          <p className="mt-6 text-sm">
            Get Affordabel and reliable wears here.
          </p>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center"></div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © ellynforte.
      </p>
    </footer>
  );
};

export default Footer;
