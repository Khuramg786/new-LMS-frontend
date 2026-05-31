import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Users,
  BookOpen,
  Award,
  Target,
  Eye,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const teamMembers = [
  {
    name: "Yasin Shakir",
    role: "Founder & CEO",
    image:
      "https://ik.imagekit.io/b6iqka2sz/shakir.webp",
  },
  {
    name: "Mustafa Sahib",
    role: "Manager IT Operations",
    image:
      "https://ik.imagekit.io/b6iqka2sz/mustafa-sahib.webp",
  },
   {
    name: "Muhammad Ismail",
    role: "IT Professional",
    image:
      "https://ik.imagekit.io/b6iqka2sz/ismael.webp",
  },
  {
    name: "Saad Zafar",
    role: "Head Social Media Marketing",
    image:
      "https://ik.imagekit.io/b6iqka2sz/saad.webp",
  },
  {
    name: "Muhammad Khuram",
    role: "Head Web Dev",
    image:
      "https://ik.imagekit.io/b6iqka2sz/khurram.webp",
  },
  {
    name: "Amir Taqvi",
    role: "Manager Media Production",
    image:
      "https://ik.imagekit.io/b6iqka2sz/amir.webp",
  },
];

function About() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  // AUTO SLIDER
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] md:h-[550px]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="w-full px-5 md:px-12 lg:px-20">

            <div className="max-w-3xl">
              <p className="text-red-500 font-semibold uppercase tracking-widest mb-4">
                Welcome To Life Changers Club Pakistan 
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Learn Modern Skills &
                <span className="text-red-500"> Grow Your Career</span>
              </h1>

              <p className="text-gray-200 text-base md:text-lg mt-6 leading-relaxed">
                Empowering learners worldwide through innovative and quality education.
              </p>

              <button className="mt-8 bg-red-500 hover:bg-red-600 transition text-white px-7 py-4 rounded-full text-lg font-semibold shadow-lg">
                Explore Courses
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full py-16 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow-md">
            <Users className="mx-auto text-red-500 mb-4" size={40} />
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="text-gray-500 mt-2">Active Trainees</p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow-md">
            <BookOpen className="mx-auto text-red-500 mb-4" size={40} />
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="text-gray-500 mt-2">Total Courses</p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow-md">
            <Award className="mx-auto text-red-500 mb-4" size={40} />
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-gray-500 mt-2">Success Rate</p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow-md">
            <Target className="mx-auto text-red-500 mb-4" size={40} />
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-gray-500 mt-2">Coching Support</p>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full py-16 md:py-24 px-5 md:px-12 lg:px-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/about%20image.webp"
              alt=""
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-red-500">10+</h3>
              <p className="text-gray-600 text-sm">
                Years of Experience
              </p>
            </div>
          </div>

          <div>
            <p className="text-red-500 font-bold uppercase tracking-wider">
              About Our Company
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-4">
             The Success Story of Yasin Shakir
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              In a world shaken by uncertainty, rapid change, and constant crisis, Yasin Shakir dared to ask a question few were asking:

              What if success wasn't one-dimensional? What if real growth meant transforming every part of life—business, mindset, health, relationships, and spirit—together?

              That single question became a revolutionary idea.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex gap-3">
                <CheckCircle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Expert Trainers</h4>
                  <p className="text-gray-500 text-sm">
                    Learn from professionals.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Live Classes</h4>
                  <p className="text-gray-500 text-sm">
                    Interactive online sessions.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Certification</h4>
                  <p className="text-gray-500 text-sm">
                    Professional certificates.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Career Support</h4>
                  <p className="text-gray-500 text-sm">
                    Freelancing & job guidance.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="w-full py-16 md:py-24 px-5 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-[#f8fafc] rounded-3xl p-10 shadow-md">
            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
              <Eye className="text-red-500" size={34} />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our vision is to become a leading global learning platform
              that empowers students with modern digital skills.
            </p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-10 shadow-md">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
              <Rocket className="text-blue-500" size={34} />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
             We believe quality training is the right of every individual for growth & success. So, we are providing practical training to everyone. We aim at making training accessible to everyone to break down the barriers and create opportunities across the glob
            </p>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-full py-16 md:py-24 px-5 md:px-12 lg:px-20 bg-[#f8fafc] overflow-hidden">

        {/* TOP */}
        <div className="flex items-center justify-between flex-wrap gap-5 mb-14">

          <div>
            <p className="text-red-500 font-bold uppercase tracking-widest">
              Our Team
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
              Meet Our Professional Team
            </h2>
          </div>

          {/* SLIDER BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

        </div>

        {/* SLIDER */}
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 320}px)`,
          }}
        >

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[300px] bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition duration-300 mr-6"
            >

              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-red-100">
                <img
                  src={member.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                {member.name}
              </h3>

              <p className="text-red-500 font-medium mt-2">
                {member.role}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-5 md:px-12 lg:px-20 bg-red-500 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Start Learning & Build Your Future Today
          </h2>

          <p className="text-red-100 text-lg mt-6">
            Join thousands of students learning modern skills with our
            expert-led online courses.
          </p>

          <button className="mt-8 bg-white text-red-500 hover:bg-gray-100 transition px-8 py-4 rounded-full font-bold text-lg shadow-lg">
            Get Started Now
          </button>

        </div>
      </section>

    </div>
  );
}

export default About;