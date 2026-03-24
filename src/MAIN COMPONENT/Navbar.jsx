import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const resumeBtnRef = useRef(null);
  const shineRef = useRef(null);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // ✅ Navbar entry animation
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100 },
      { y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  // ✅ Scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [isOpen]);

  // ✅ Smooth scroll
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (!target) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 70,
      },
      ease: "power3.out",
    });

    setIsOpen(false);
  };

  // ✅ Active link + section animations
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    sections.forEach((section, index) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(navLinks[index].href),
        onEnterBack: () => setActive(navLinks[index].href),
      });

      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // ✅ Shine setup
  useEffect(() => {
    gsap.set(shineRef.current, { x: "-120%", opacity: 0 });
  }, []);

  useEffect(() => {
    const el = resumeBtnRef.current;
    if (!el) return;

    const animate = () => {
      gsap.fromTo(
        shineRef.current,
        { x: "-120%", opacity: 0 },
        {
          x: "120%",
          opacity: 0.6,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    };

    el.addEventListener("mouseenter", animate);
    return () => el.removeEventListener("mouseenter", animate);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1120]/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#hero");
            }}
            className="text-xl font-bold bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent transition-transform hover:scale-105"
          >
            Ananta
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className={`relative transition-colors ${
                  active === link.href
                    ? "text-white"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#14B8A6] transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}

            {/* Resume Button (Desktop) */}
            <a
              ref={resumeBtnRef}
              href="/AnantaResume.pdf"
              className="relative overflow-hidden px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white hover:shadow-lg hover:shadow-[#6366F1]/50 transition-all duration-300"
            >
              My Resume
              <span
                ref={shineRef}
                className="absolute top-0 left-0 w-1/3 h-full bg-white/30 blur-lg rotate-12 pointer-events-none"
              />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden bg-[#1E293B]/95 backdrop-blur-lg border-b border-white/10"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className={`block ${
                active === link.href
                  ? "text-white"
                  : "text-[#94A3B8]"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* ✅ FIXED: Resume Button in Mobile */}
          <a
            href="/AnantaResume.pdf"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white text-center mt-4"
          >
            My Resume
          </a>
        </div>
      </div>
    </nav>
  );
}