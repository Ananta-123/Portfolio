import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "../Utility/ImageWithFallback.jsx";

export function Hero() {
  const containerRef = useRef();

  useEffect(() => {
    let handlers = [];

    const ctx = gsap.context(() => {
      // ✅ Split MERN text (gradient animation)
      const splitSubheading = new SplitType(".split-gradient", {
        types: "chars"
      });

      gsap.to(splitSubheading.chars, {
        backgroundImage:
          "linear-gradient(90deg, #6366F1, #8B5CF6, #14B8A6)",
        backgroundClip: "text",
        color: "transparent",
        stagger: {
          each: 0.05,
          repeat: -1
        },
        duration: 1,
        ease: "none"
      });

      // ✅ Split hover text
      const splitHover = new SplitType(".split-hover", {
        types: "chars"
      });

      splitHover.chars.forEach((char) => {
        const enter = () => {
          gsap.to(char, {
            backgroundImage:
              "linear-gradient(90deg, #6366F1, #8B5CF6, #14B8A6)",
            backgroundClip: "text",
            color: "transparent",
            duration: 0.3
          });
        };

        const leave = () => {
          gsap.to(char, {
            backgroundImage: "none",
            color: "#F8FAFC", // keep dark theme text
            duration: 0.3
          });
        };

        char.addEventListener("mouseenter", enter);
        char.addEventListener("mouseleave", leave);

        handlers.push({ char, enter, leave });
      });

      // ✅ Entry animation for split text
      gsap.from(splitHover.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.02,
        duration: 0.6,
        ease: "power2.out"
      });

      // ✅ Main timeline (your original)
      const tl = gsap.timeline();

      tl.from(".hero-content", {
        opacity: 0,
        x: -50,
        duration: 0.8
      })
        .from(".badge", {
          opacity: 0,
          y: 20,
          duration: 0.4
        }, "-=0.5")
        .from(".heading", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".subheading", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".description", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".location", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".buttons", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".socials", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.8
          },
          "-=0.6"
        );

      // ✅ Optional: floating image (premium feel)
      gsap.to(".hero-image", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
      });

      // ✅ Cleanup
      return () => {
        handlers.forEach(({ char, enter, leave }) => {
          char.removeEventListener("mouseenter", enter);
          char.removeEventListener("mouseleave", leave);
        });

        splitSubheading.revert();
        splitHover.revert();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="space-y-8 hero-content">
            <div className="space-y-4">

              {/* Badge */}
              

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight heading">
                <span className="text-[#F8FAFC] split-hover">
                  Ananta Prasad
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
                  Behera
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-2xl sm:text-3xl text-[#94A3B8] font-semibold subheading split-gradient">
                MERN Stack Developer
              </p>

              {/* Description */}
              <p className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl description split-hover">
                Full-stack developer specializing in the MERN stack...
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-[#94A3B8] location split-hover">
                <MapPin size={18} className="text-[#14B8A6]" />
                <span>Cuttack, Odisha, India</span>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 buttons">
              {/* Add your buttons here */}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-4 socials">
              {/* Add socials */}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block hero-image">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] rounded-2xl blur-2xl opacity-20"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1E293B] p-2">
              <ImageWithFallback
                src="https://res.cloudinary.com/dl58sdjnk/image/upload/v1773810370/Gemini_Generated_Image_wwrup2wwrup2wwru_1_bctsl1.png"
                alt="Developer Workspace"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}