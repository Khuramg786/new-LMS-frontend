import React from "react";
import {
  Globe,
  Search,
  Smartphone,
  Bot,
  MessageCircle,
  BarChart3,
  CheckCircle,
} from "lucide-react";

function BusinessBranding() {
  const services = [
    {
      icon: <Search size={40} />,
      title: "SEO Services",
      desc: "Rank higher on Google and attract more customers with professional SEO solutions.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Social Media Marketing",
      desc: "Grow your business on Facebook, Instagram, TikTok, LinkedIn and other platforms.",
    },
    {
      icon: <Globe size={40} />,
      title: "Website Development",
      desc: "Modern, fast and responsive websites designed to convert visitors into customers.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      desc: "Android and iOS applications tailored to your business requirements.",
    },
    {
      icon: <Bot size={40} />,
      title: "AI Solutions",
      desc: "AI-powered systems, chatbots and business automation tools for modern companies.",
    },
    {
      icon: <MessageCircle size={40} />,
      title: "WhatsApp Automation",
      desc: "Automate customer support, lead generation and sales using WhatsApp AI Chatbots.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-5">
            Complete Business Branding Solutions
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            We help businesses grow online through SEO, Social Media Marketing,
            Website Development, Mobile Apps, ERP Systems, AI Solutions and
            WhatsApp Automation.
          </p>

          <button className="mt-8 bg-white text-red-600 px-8 py-3 rounded-xl font-bold">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-red-600 mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


<section
  className="py-24"
  style={{
    background: "#021B4D",
  }}
>
  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-7xl font-bold text-white">
        Growing Your
        <span className="text-red-400"> Business?</span>
      </h2>

      <p className="text-white text-lg mt-8 max-w-3xl mx-auto">
        Struggling to manage marketing, websites, social media,
        customer support and business operations all at once?
      </p>

      <p className="text-red-400 text-xl mt-6 font-semibold">
        We handle the digital work while you focus on growth.
      </p>
    </div>

    {/* Main Layout */}
    <div className="grid lg:grid-cols-3 gap-10 items-center">

      {/* Left Side */}
      <div className="space-y-6">

        <div className="bg-blue-900 rounded-3xl px-8 py-6 shadow-xl">
          <p className="text-white font-semibold text-xl">
            😕 Website not generating leads?
          </p>
        </div>

        <div className="bg-blue-900 rounded-3xl px-8 py-6 shadow-xl">
          <p className="text-white font-semibold text-xl">
            😕 No time for SEO?
          </p>
        </div>

        <div className="bg-blue-900 rounded-3xl px-8 py-6 shadow-xl">
          <p className="text-white font-semibold text-xl">
            😕 Social media inactive?
          </p>
        </div>

      </div>

      {/* Center Image */}
      <div className="flex justify-center">

        <div className="relative">

          {/* Yellow Circle */}
          <div
            className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full"
            style={{
              background: "#FFD84D",
            }}
          />

          {/* Your Image */}
          <img
            src="https://ik.imagekit.io/b6iqka2sz/53f40241-e26e-435f-8a14-9ec795f0d34f.png"
            alt=""
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[380px]"
          />

        </div>

      </div>

      {/* Right Side */}
      <div className="space-y-6">

        <div className="bg-blue-900 rounded-3xl px-8 py-6 shadow-xl">
          <p className="text-white font-semibold text-xl">
            😕 Need WhatsApp Automation?
          </p>
        </div>

        <div className="bg-blue-900 rounded-3xl px-8 py-6 shadow-xl">
          <p className="text-white font-semibold text-xl">
            😕 Managing everything alone?
          </p>
        </div>

        <div className="bg-blue-900 rounded-3xl px-8 py-6 shadow-xl">
          <p className="text-white font-semibold text-xl">
            😕 No ERP system in place?
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="flex gap-4">
              <CheckCircle className="text-green-600" />
              <div>
                <h4 className="font-bold text-xl">
                  Experienced Team
                </h4>
                <p>
                  Professional experts in SEO, Marketing and Development.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-green-600" />
              <div>
                <h4 className="font-bold text-xl">
                  Complete Digital Solutions
                </h4>
                <p>
                  Everything your business needs under one roof.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-green-600" />
              <div>
                <h4 className="font-bold text-xl">
                  Affordable Pricing
                </h4>
                <p>
                  Cost-effective packages for startups and enterprises.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-green-600" />
              <div>
                <h4 className="font-bold text-xl">
                  24/7 Support
                </h4>
                <p>
                  Dedicated support for all projects and automation systems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    
      {/* CTA */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-5">
          <h2 className="text-4xl font-bold mb-5">
            Ready To Grow Your Business?
          </h2>

          <p className="text-xl mb-8">
            Let's build your brand with SEO, Social Media Marketing,
            Website Development, Apps, ERP Systems and AI Automation.
          </p>

          <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold">
            Contact Us Today
          </button>
        </div>
      </section>

    </div>
  );
}

export default BusinessBranding;