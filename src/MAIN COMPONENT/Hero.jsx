import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "../Utility/ImageWithFallback.jsx";
import "@fontsource/sora";
import "@fontsource/inter";

export function Hero() {
  const containerRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    let handlers = [];

    const ctx = gsap.context(() => {
      const splitSubheading = new SplitType(".split-gradient", {
        types: "chars"
      });

      gsap.from(splitSubheading.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5
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
        ease: "none",
        delay: 1
      });

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
            color: "#F8FAFC",
            duration: 0.3
          });
        };

        char.addEventListener("mouseenter", enter);
        char.addEventListener("mouseleave", leave);

        handlers.push({ el: char, enter, leave });
      });

      // Typing Effect
      const nameText = "Ananta Prasad Behera";
      const element = nameRef.current;

      element.innerHTML = "";

      let cursor = document.createElement("span");
      cursor.innerHTML = "|";
      cursor.style.marginLeft = "5px";
      element.appendChild(cursor);

      let i = 0;

      function type() {
        if (i < nameText.length) {
          const charSpan = document.createElement("span");
          charSpan.textContent = nameText[i];
          element.insertBefore(charSpan, cursor);

          charSpan.addEventListener("mouseenter", () => {
            gsap.to(charSpan, {
              textShadow: "0 0 12px rgba(99,102,241,0.8)",
              scale: 1.1,
              duration: 0.2
            });
          });

          charSpan.addEventListener("mouseleave", () => {
            gsap.to(charSpan, {
              textShadow: "none",
              scale: 1,
              duration: 0.2
            });
          });

          i++;
          setTimeout(type, 70);
        }
      }

      type();

      gsap.to(cursor, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.6
      });

      gsap.from(splitHover.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.02,
        duration: 0.6,
        ease: "power2.out"
      });

      const tl = gsap.timeline();

      tl.from(".hero-content", {
        opacity: 0,
        x: -50,
        duration: 0.8
      })
        .from(".heading", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".subheading", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".description", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".location", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".buttons", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".socials", { opacity: 0, y: 20, duration: 0.4 }, "-=0.3")
        .from(".hero-image", { opacity: 0, scale: 0.8, duration: 0.8 }, "-=0.6");

      gsap.to(".hero-image", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
      });

      const image = containerRef.current.querySelector(".hero-image");

      const enterHandler = () => {
        gsap.to(image, { scale: 1.05, duration: 0.4 });
      };

      const moveHandler = (e) => {
        const bounds = image.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        gsap.to(image, {
          rotationX: -(y - centerY) / 20,
          rotationY: (x - centerX) / 20,
          transformPerspective: 500,
          duration: 0.2
        });
      };

      const leaveHandler = () => {
        gsap.to(image, {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          duration: 0.5
        });
      };

      image.addEventListener("mouseenter", enterHandler);
      image.addEventListener("mousemove", moveHandler);
      image.addEventListener("mouseleave", leaveHandler);

      handlers.push({ el: image, enter: enterHandler, move: moveHandler, leave: leaveHandler });

      return () => {
        handlers.forEach(({ el, enter, move, leave }) => {
          if (enter) el.removeEventListener("mouseenter", enter);
          if (move) el.removeEventListener("mousemove", move);
          if (leave) el.removeEventListener("mouseleave", leave);
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

          {/* IMAGE FIRST ON MOBILE */}
          <div className="relative hero-image order-1 lg:order-2 flex justify-center mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] rounded-2xl blur-2xl opacity-20"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1E293B] p-2">
              <ImageWithFallback
                src="https://res.cloudinary.com/dl58sdjnk/image/upload/v1773810370/Gemini_Generated_Image_wwrup2wwrup2wwru_1_bctsl1.png"
                alt="Developer Workspace"
                className="w-full max-w-sm mx-auto lg:max-w-full rounded-xl"
              />
            </div>
          </div>

          {/* CONTENT SECOND ON MOBILE */}
          <div className="space-y-8 hero-content order-2 lg:order-1">

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-heading font-bold tracking-tight leading-tight heading">
                <span className="text-4xl bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
                  Hi,&nbsp;
                </span>
                <span className="text-[#F8FAFC] split-hover text-4xl">
                  I'm
                </span>
                <br />
                <span
                  ref={nameRef}
                  className="text-[#F8FAFC] text-2xl sm:text-5xl lg:text-5xl font-heading tracking-tight"
                ></span>
              </h1>

              <p className="text-3xl sm:text-xl text-[#94A3B8] font-heading font-semibold tracking-wide subheading split-gradient">
                MERN Stack Developer
              </p>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl description split-hover font-body">
                I build scalable and high-performance web applications using the MERN stack.
              </p>

              <div className="flex items-center gap-2 text-[#94A3B8] location split-hover font-body">
                <MapPin size={18} className="text-[#14B8A6]" />
                <span>Cuttack, Odisha, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 buttons"></div>
            <div className="flex items-center gap-4 pt-4 socials"></div>

          </div>
        </div>
      </div>
    </section>
  );
}