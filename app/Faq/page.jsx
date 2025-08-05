"use client";
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import HeaderSlider from "@/components/HeaderSlider";
import Link from "next/link";

const FAQ = () => {
  const { router } = useAppContext();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I place an order?",
      answer:
        "You can place an order directly through our website by browsing our products, adding items to your cart, and proceeding through checkout. If you need assistance, you can also contact us via WhatsApp for personalized service.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, credit/debit cards, and payment through our WhatsApp business account. All payments are secure and encrypted.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times vary depending on your location. Within Lagos, delivery typically takes 1-2 business days. For other states in Nigeria, please allow 3-5 business days. We'll provide tracking information once your order ships.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 7 days of delivery for unused items in their original packaging. Please contact our customer service to initiate a return. Note that certain items may be final sale.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, we'll send you a tracking number via email or WhatsApp. You can use this to track your package through our delivery partners.",
    },
    {
      question: "Do you offer wholesale or bulk purchases?",
      answer:
        "Yes! We offer special pricing for bulk orders. Please contact us directly at Ellynforteventures@gmail.com or through our WhatsApp business line to discuss wholesale options.",
    },
    {
      question: "How do I contact customer service?",
      answer:
        "You can reach our customer service team through WhatsApp at (+234)813-973-5166, via email at Ellynforteventures@gmail.com, or through our social media channels. We typically respond within 24 hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />

        {/* FAQ Hero Section */}
        <div className="py-16 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about shopping with Ellyn Forte
            Ventures
          </p>
        </div>

        {/* FAQ Content */}
        <div className="py-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6 pt-0 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our customer service team is
              ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://wa.me/2348139735166"
                target="_blank"
                className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-200 text-center"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>

        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
