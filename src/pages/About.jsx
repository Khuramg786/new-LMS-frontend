import React, { useEffect, useState, useRef } from "react";
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
    image: "https://ik.imagekit.io/b6iqka2sz/shakir.webp",
  },
  {
    name: "Mustafa Sahib",
    role: "Manager IT Operations",
    image: "https://ik.imagekit.io/b6iqka2sz/mustafa-sahib.webp",
  },
  {
    name: "Muhammad Ismail",
    role: "IT Professional",
    image: "https://ik.imagekit.io/b6iqka2sz/ismael.webp",
  },
  {
    name: "Saad Zafar",
    role: "Head Social Media Marketing",
    image: "https://ik.imagekit.io/b6iqka2sz/saad.webp",
  },
  {
    name: "Muhammad Khuram",
    role: "Head Web Dev",
    image: "https://ik.imagekit.io/b6iqka2sz/khurram.webp",
  },
  {
    name: "Amir Taqvi",
    role: "Manager Media Production",
    image: "https://ik.imagekit.io/b6iqka2sz/amir.webp",
  },
];

function About() {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const sliderRef = useRef(null);

  // Window resize handle karne ke liye takke innerWidth error na de
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  // AUTO SLIDER (Desktop ke liye auto-scroll)
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  // Mobile/Tablet smooth scrolling effect
  useEffect(() => {
    if (sliderRef.current && !isDesktop) {
      const cardWidth = sliderRef.current.querySelector(".team-card")?.offsetWidth || 296;
      sliderRef.current.scrollTo({
        left: current * (cardWidth + 24), // card width + gap margin
        behavior: "smooth",
      });
    }
  }, [current, isDesktop]);

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* Scrollbar CSS Injector (Aapko alag se CSS file me likhne ki zaroorat nahi) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative w-full h-[460px] md:h-[550px]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="Life Changers Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65 flex items-center">
          <div className="w-full px-4 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">
                Welcome To Life Changers Club Pakistan
              </p>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Learn Business Management &
                <span className="text-red-500 block sm:inline"> Grow Your Business Income</span>
              </h1>

              <p className="text-gray-200 text-sm md:text-lg mt-4 max-w-xl leading-relaxed">
                Empowering SMEs in Business Management, Leadership & Team Building
              </p>

              <button className="mt-6 md:mt-8 bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 md:px-7 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full py-12 md:py-16 px-4 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-[#f8fafc] rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-sm border border-gray-100">
            <Users className="mx-auto text-red-500 mb-3" size={36} />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">5000+</h3>
            <p className="text-gray-500 text-sm mt-1">Active Trainees</p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-sm border border-gray-100">
            <BookOpen className="mx-auto text-red-500 mb-3" size={36} />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">150+</h3>
            <p className="text-gray-500 text-sm mt-1">Total Courses</p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-sm border border-gray-100">
            <Award className="mx-auto text-red-500 mb-3" size={36} />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-500 text-sm mt-1">Success Rate</p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-sm border border-gray-100">
            <Target className="mx-auto text-red-500 mb-3" size={36} />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-500 text-sm mt-1">Coaching Support</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full py-12 md:py-24 px-4 md:px-12 lg:px-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

          <div className="relative order-2 lg:order-1">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/about%20image.webp"
              alt="CEO Yasin Shakir"
              className="rounded-2xl md:rounded-3xl shadow-xl w-full h-[350px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-red-500">10+</h3>
              <p className="text-gray-600 text-xs md:text-sm">Years of Experience</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-red-500 font-bold uppercase tracking-wider text-sm">
              About Our CEO
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mt-2">
              The Success Story of Yasin Shakir
            </h2>
            <div className="text-gray-600 text-sm md:text-lg leading-relaxed mt-4 h-[180px] overflow-y-auto pr-2 custom-scrollbar">
              <p className="mb-4">
                In a world shaken by uncertainty, rapid change, and constant crisis, Yasin Shakir dared to ask a question few were asking:
              </p>
              <p className="font-semibold text-gray-900 bg-red-50/50 border-l-4 border-red-500 pl-3 py-2 my-4 rounded-r-xl">
                What if success wasn't one-dimensional? What if real growth meant transforming every part of life—business, mindset, health, relationships, and spirit—together?
              </p>
              <p className="mb-4">
                That single question became a revolutionary idea.
              </p>

              <h4 className="font-bold text-gray-900 text-base md:text-xl mt-6 mb-2">From Observation to Obsession</h4>
              <p className="mb-4">
                Yasin Shakir closely observed a painful reality around him. Talented individuals were stuck. SMEs were collapsing not because of lack of effort, dreams or degrees, but because of lack of modern leadership, soft skills, emotional intelligence, and adaptive thinking. Traditional education had taught them what to do—but not how to live, lead, or sustain success in a fast-changing world of uncertain challenges.
              </p>

              <div className="bg-gray-900 text-white p-4 my-4 rounded-xl text-center font-medium">
                "Businesses don't fail first. People do. <br />
                And when people rise—businesses follow the growth."
              </div>

              <h4 className="font-bold text-gray-900 text-base md:text-xl mt-6 mb-2">Yselti: Elevating Human Potential</h4>
              <p className="mb-4">
                Feeling & knowing the true impact, Yasin Shakir launched Yselti in 2017—a platform built on the idea of elevation: Modern Soft skills for everyone not as an option but as a rightful right. Yselti wasn't just about success; it was about sustainable growth & excellence.
              </p>
              <p className="mb-4 font-medium text-gray-800">
                Here, individuals and organizations & businesses learn how to:
              </p>
              <p className="mb-4 italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                Thrive during uncertainty. Lead during crisis. Adapt in dynamic markets. Build resilient teams. Scale without burnout. Grow professionally. Stand out Tall in the competition.
              </p>
              <p className="mb-4">
                Yselti has become a bridge between personal mastery and professional success.
              </p>

              <h4 className="font-bold text-gray-900 text-base md:text-xl mt-6 mb-2">A Vision Rooted in Fairness</h4>
              <p className="mb-4">
                What truly sets Yasin Shakir apart is his vision for SMEs. While premium training remains inaccessible for many, Yasin Shakir took a humanitarian stand:
              </p>
              <p className="mb-4 font-semibold text-red-500">
                Quality business and leadership training should not be a privilege—it should be a right.
              </p>
              <p className="mb-4">
                Life Changers Club Pakistan and Yselti are designed to deliver world-class training at a very fair price, empowering small and medium enterprises—the backbone of the economy—to not just survive, but sustain and thrive.
              </p>

              <h4 className="font-bold text-gray-900 text-base md:text-xl mt-6 mb-2">Impact Beyond Numbers</h4>
              <p className="mb-4">
                Today, thousands of lives have been touched. Individuals who once lacked confidence now lead with clarity. Businesses that once struggled now grow with strategy. Leaders who once reacted in fear now respond with wisdom.
              </p>
              <p className="mb-4 font-medium text-gray-800">
                But for Yasin Shakir, success isn't measured only in revenue or reach. It's measured in:
              </p>
              <p className="mb-4 italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                Lives transformed. Leaders awakened. Businesses strengthened. Hope restored. Companies helping economy.
              </p>

              <h4 className="font-bold text-gray-900 text-base md:text-xl mt-6 mb-2">The Birth of Life Changers Club Pakistan</h4>
              <p className="mb-4">
                With limited resources but limitless conviction, Yasin Shakir founded Life Changers Club Pakistan—not as a typical training company, but as a movement to transform Businesses & lives together.
              </p>
              <p className="mb-4 font-semibold text-gray-900">
                His mission is bold: To transform lives 360 degrees—personally, professionally, financially, emotionally, mentally, physically, socially, and spiritually.
              </p>
              <p className="mb-4">
                Life Changers Club is offering physical and virtual trainings designed for real people facing real challenges. The focus isn't theory—it is practical transformation:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                <li>Business growth strategies for SMEs.</li>
                <li>Team Management Mastery.</li>
                <li>Modern leadership.</li>
                <li>Professional Communication skills.</li>
                <li>Emotional and mental resilience.</li>
                <li>Financial Management.</li>
                <li>Relationship mastery.</li>
                <li>Health and wellbeing.</li>
                <li>Social networking and influence.</li>
                <li>Spiritual alignment and purpose.</li>
              </ul>
              <p className="mb-4">
                All integrated into a multi-dimensional growth model—because Yasin Shakir believes balance is not a luxury, it's a necessity. He has a keen observation of the miserable reality of today's life what he calls "Dis-balanced Growth in Life". His mission is to help the nation achieve "Balanced Growth" that contributes & beautifies individual's life but the lives of the community as a whole.
              </p>

              <h4 className="font-bold text-gray-900 text-base md:text-xl mt-6 mb-2">The Ongoing Journey</h4>
              <p className="mb-4">
                Yasin's story is not one of overnight success—it is a story of very hard early days, sheer purpose determination, persistence, and people-centric leadership. From a single idea to a multi-dimensional ecosystem of growth, he continues to prove that true success is holistic.
              </p>

              <div className="bg-red-50 border border-red-200 text-red-700 p-4 my-4 rounded-xl font-medium text-center">
                "Change your skills. Change your mindset. Change your life. <br />
                Transform yourself 360°—and you can transform the world."
              </div>

              <p className="mb-4 font-medium">
                Let's join hands together to make this world a balanced place to live & leave peacefully. Feel & own this platform your own and start your transformation today.
              </p>
              <p className="font-bold text-gray-950 mt-6">Looking Forward!</p>
              <p className="font-bold text-red-500">Life Changers Club, Pakistan</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Expert Trainers</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Qualified Industry Leaders.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Physical + Live + Recorded</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Interactive Training Sessions.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Certification</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Professional Business certificates.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Whatsapp Coaching</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Q/A + Consultation Support.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="w-full py-12 md:py-24 px-4 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#f8fafc] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-gray-500/5">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-red-100 flex items-center justify-center mb-4 md:mb-6">
              <Eye className="text-red-500" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
              To transform one million SME owners, leaders, and professionals into high-performing business builders who create profitable enterprises, meaningful employment opportunities, and positive economic impact.
            </p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-gray-500/5">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-100 flex items-center justify-center mb-4 md:mb-6">
              <Rocket className="text-blue-500" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
              Our mission is to become the most trusted business coaching organization, empowering Small and Medium Enterprises (SMEs) to achieve sustainable growth, develop high-performing teams, and build profitable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-full py-12 md:py-24 px-4 md:px-12 lg:px-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">

          {/* TOP HEADER */}
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-red-500 font-bold uppercase tracking-widest text-sm">Our Team</p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                Meet Our Professional Team
              </h2>
            </div>

            {/* SLIDER BUTTONS */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* SLIDER WRAPPER */}
          <div
            ref={sliderRef}
            className="flex md:transition-transform md:duration-500 md:ease-in-out overflow-x-auto md:overflow-visible gap-6 pb-4 md:pb-0 scroll-smooth snap-x mandatory"
            style={{
              transform: isDesktop ? `translateX(-${current * 324}px)` : "none",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card min-w-[270px] md:min-w-[300px] bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-md hover:shadow-xl transition duration-300 snap-start"
              >
                <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-4 border-red-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-4 md:mt-6">
                  {member.name}
                </h3>
                <p className="text-red-500 font-medium text-sm md:text-base mt-1 md:mt-2">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-14 md:py-20 px-4 md:px-12 lg:px-20 bg-red-500 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-extrabold text-white leading-tight">
            Start Learning & Build Your Future Today
          </h2>
          <p className="text-red-100 text-sm md:text-lg mt-4 max-w-xl mx-auto">
            Join thousands of students learning modern skills with our expert-led online courses.
          </p>
          <button className="mt-6 md:mt-8 bg-white text-red-500 hover:bg-gray-100 transition px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg">
            Get Started Now
          </button>
        </div>
      </section>

    </div>
  );
}

export default About;