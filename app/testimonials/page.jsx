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

const Testimonials = () => {
  const { router } = useAppContext();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frequent Customer",
      content:
        "I've been shopping with Ellyn Forte Ventures for over a year now and I'm consistently impressed with the quality of their products. Their customer service is exceptional - they always go above and beyond!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Adebayo",
      role: "First-time Buyer",
      content:
        "The delivery was incredibly fast and the product exceeded my expectations. The attention to detail is remarkable. Will definitely be shopping here again!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Amina Yusuf",
      role: "Loyal Customer",
      content:
        "What I love most is their personalized service. It feels like they really understand my style and needs. The quality is consistently excellent.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 4,
    },
    {
      id: 4,
      name: "David Okafor",
      role: "Business Owner",
      content:
        "As someone who buys wholesale, I appreciate their reliability and product consistency. Their team is professional and responsive to inquiries.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
    },
    {
      id: 5,
      name: "Chioma Eze",
      role: "Fashion Blogger",
      content:
        "Ellyn Forte Ventures is my go-to for unique pieces that help me stand out. The quality is always premium and their styles are always on trend.",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      rating: 5,
    },
    {
      id: 6,
      name: "Emeka Nwankwo",
      role: "Corporate Client",
      content:
        "We've used Ellyn Forte for our corporate gifts multiple times. They always deliver on time and the recipients are consistently impressed.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />

        {/* Testimonials Hero Section */}
        <div className="py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experiences with Ellyn
            Forte Ventures
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {renderStars(testimonial.rating)}
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    {/* <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}

        <ContactUs />
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
