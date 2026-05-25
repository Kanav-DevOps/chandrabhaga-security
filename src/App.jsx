import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import logo from "./assets/logo.png";
import heroBanner from "./assets/hero-banner.png";

import guard1 from "./assets/gallery/guard1.jpg";
import guard2 from "./assets/gallery/guard2.jpg";
import guard3 from "./assets/gallery/guard3.jpg";
import site1 from "./assets/gallery/site1.jpg";

import iso1 from "./assets/certificates/iso1.pdf";
import iso2 from "./assets/certificates/iso2.pdf";
import iso1Preview from "./assets/certificates/iso1-preview.jpg";
import iso2Preview from "./assets/certificates/iso2-preview.jpg";

/* LOADER */
function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 99999,
      }}
    >
      <motion.img
        src={logo}
        alt="logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          width: "120px",
          marginBottom: "30px",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
        style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "800",
          textAlign: "center",
        }}
      >
        Chandrabhaga Security
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 220 }}
        transition={{
          delay: 0.8,
          duration: 1.5,
        }}
        style={{
          height: "4px",
          background: "#2563eb",
          marginTop: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(37,99,235,0.5)",
        }}
      />
    </motion.div>
  );
}

/* REVEAL */
function Reveal({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  const services = [
    {
      title: "Armed Security",
      desc: "Highly trained armed personnel for critical infrastructure and industrial facilities.",
      icon: "🛡️",
    },

    {
      title: "Infrastructure Protection",
      desc: "Advanced operational security for power plants and enterprise sites.",
      icon: "🏭",
    },

    {
      title: "Industrial Surveillance",
      desc: "24×7 monitoring and rapid incident response systems.",
      icon: "📡",
    },

    {
      title: "Manpower Deployment",
      desc: "Professional workforce deployment with supervision and SOP management.",
      icon: "👮",
    },
  ];

  const industries = [
    "Power Plants",
    "Infrastructure",
    "Warehousing",
    "Manufacturing",
    "Construction",
    "Government",
  ];

  const gallery = [
    guard1,
    guard2,
    guard3,
    site1,
    guard1,
    guard2,
  ];

  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* PROGRESS BAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "4px",
          background: "#2563eb",
          zIndex: 99999,
          boxShadow: "0 0 20px rgba(37,99,235,0.7)",
        }}
      />

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919419174662"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          background: "#16a34a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          textDecoration: "none",
          zIndex: 99999,
          boxShadow: "0 0 30px rgba(22,163,74,0.5)",
        }}
      >
        💬
      </a>

      {/* GLOW */}
      <div
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12), transparent)",
          top: "-200px",
          right: "-200px",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",
            padding: "20px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: window.innerWidth < 768 ? "55px" : "70px",
              }}
            />

            <div>
              <h1
                style={{
                  fontSize:
                    window.innerWidth < 768
                      ? "26px"
                      : "38px",
                  fontWeight: "800",
                  margin: 0,
                }}
              >
                Chandrabhaga
              </h1>

              <p
                style={{
                  margin: 0,
                  color: "#9ca3af",
                  fontSize:
                    window.innerWidth < 768
                      ? "16px"
                      : "18px",
                }}
              >
                Security LLP
              </p>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            style={{
              display:
                window.innerWidth < 768
                  ? "block"
                  : "none",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "32px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>

          {/* DESKTOP MENU */}
          <div
            style={{
              display:
                window.innerWidth < 768
                  ? "none"
                  : "flex",
              gap: "30px",
              fontSize: "18px",
            }}
          >
            <a href="#" style={linkStyle}>
              Home
            </a>

            <a href="#services" style={linkStyle}>
              Services
            </a>

            <a href="#industries" style={linkStyle}>
              Industries
            </a>

            <a href="#gallery" style={linkStyle}>
              Gallery
            </a>

            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
              background: "#020617",
            }}
          >
            <a href="#" style={linkStyle}>
              Home
            </a>

            <a href="#services" style={linkStyle}>
              Services
            </a>

            <a href="#industries" style={linkStyle}>
              Industries
            </a>

            <a href="#gallery" style={linkStyle}>
              Gallery
            </a>

            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <motion.section
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          minHeight: "110vh",
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1400px",
            margin: "auto",
            width: "100%",
            padding:
              window.innerWidth < 768
                ? "0 20px"
                : "0 60px",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              paddingTop:
                window.innerWidth < 768
                  ? "220px"
                  : "180px",
              paddingBottom: "100px",
            }}
          >
            <p
              style={{
                color: "#3b82f6",
                letterSpacing: "6px",
                marginBottom: "25px",
                fontSize:
                  window.innerWidth < 768
                    ? "14px"
                    : "18px",
              }}
            >
              PROTECTING WHAT MATTERS
            </p>

            <h1
              style={{
                fontSize:
                  window.innerWidth < 768
                    ? "58px"
                    : "96px",
                lineHeight: 1,
                fontWeight: "900",
                marginBottom: "30px",
              }}
            >
              Enterprise Security

              <span
                style={{
                  display: "block",
                  color: "#3b82f6",
                }}
              >
                Infrastructure Protection
              </span>
            </h1>

            <p
              style={{
                fontSize:
                  window.innerWidth < 768
                    ? "18px"
                    : "24px",
                lineHeight: 1.7,
                color: "#d1d5db",
                maxWidth: "720px",
              }}
            >
              Professional armed & unarmed
              security solutions for industrial
              operations, power projects and
              enterprise infrastructure
              protection.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "50px",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="#services"
                whileHover={{
                  scale: 1.05,
                }}
                style={primaryButton}
              >
                Explore Services
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                }}
                style={secondaryButton}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <Reveal>
        <section
          style={{
            marginTop: "-30px",
            position: "relative",
            zIndex: 20,
            padding:
              window.innerWidth < 768
                ? "0 20px"
                : "0 60px",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              ["24×7", "Operational Support"],
              ["100%", "Verified Personnel"],
              ["250+", "Projects Protected"],
              ["15+", "Industrial Sectors"],
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                style={glassCard}
              >
                <h2 style={statNumber}>
                  {item[0]}
                </h2>

                <p
                  style={{
                    color: "#d1d5db",
                    fontSize: "18px",
                  }}
                >
                  {item[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* SERVICES */}
      <Reveal>
        <section
          id="services"
          style={{
            padding:
              window.innerWidth < 768
                ? "100px 20px"
                : "140px 60px",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "90px",
              }}
            >
              <p style={sectionTag}>
                WHAT WE OFFER
              </p>

              <h2 style={sectionTitle}>
                Security Services
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "35px",
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  style={serviceCard}
                >
                  <div style={serviceIcon}>
                    {service.icon}
                  </div>

                  <h3 style={serviceTitle}>
                    {service.title}
                  </h3>

                  <p style={serviceDesc}>
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* INDUSTRIES */}
      <Reveal>
        <section
          id="industries"
          style={{
            padding:
              window.innerWidth < 768
                ? "100px 20px"
                : "140px 60px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "90px",
              }}
            >
              <p style={sectionTag}>
                INDUSTRIES WE SERVE
              </p>

              <h2 style={sectionTitle}>
                Industrial Coverage
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "25px",
              }}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  style={industryCard}
                >
                  <div
                    style={{
                      fontSize: "50px",
                      marginBottom: "20px",
                    }}
                  >
                    ⚡
                  </div>

                  <h3
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    {industry}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CERTIFICATIONS */}
<Reveal>
  <section
    style={{
      padding:
        window.innerWidth < 768
          ? "100px 20px"
          : "140px 60px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* BACKGROUND GLOW */}
    <div
      style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        background:
          "radial-gradient(circle, rgba(37,99,235,0.18), transparent)",
        top: "-150px",
        right: "-150px",
        filter: "blur(100px)",
      }}
    />

    <div
      style={{
        maxWidth: "1500px",
        margin: "auto",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "90px",
        }}
      >
        <p style={sectionTag}>
          VERIFIED & CERTIFIED
        </p>

        <h2 style={sectionTitle}>
          Globally Certified Security Standards
        </h2>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "850px",
            margin: "25px auto 0",
            lineHeight: 1.9,
            fontSize: "19px",
          }}
        >
          Chandrabhaga Security LLP follows
          internationally recognized operational,
          occupational safety and professional
          manpower management standards.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(420px, 1fr))",
          gap: "40px",
        }}
      >
        {[
          {
            file: iso1,
            preview: iso1Preview,
            title: "ISO 45001:2018",
            subtitle:
              "Occupational Health & Safety",
          },

          {
            file: iso2,
            preview: iso2Preview,
            title: "Certified Security Standards",
            subtitle:
              "Professional Security Operations",
          },
        ].map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              duration: 0.4,
            }}
            style={{
              position: "relative",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "34px",
              overflow: "hidden",
              backdropFilter: "blur(18px)",
              boxShadow:
                "0 10px 50px rgba(0,0,0,0.45)",
            }}
          >
            {/* TOP BLUE LINE */}
            <div
              style={{
                height: "5px",
                background:
                  "linear-gradient(to right,#2563eb,#60a5fa)",
              }}
            />

            {/* CERTIFICATE IMAGE */}
            <div
              style={{
                padding: "25px",
              }}
            >
              <img
                src={cert.preview}
                alt="certificate"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                  borderRadius: "24px",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* CONTENT */}
            <div
              style={{
                padding:
                  "0 30px 35px 30px",
              }}
            >
              {/* VERIFIED BADGE */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background:
                    "rgba(37,99,235,0.12)",
                  border:
                    "1px solid rgba(59,130,246,0.25)",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  marginBottom: "25px",
                  color: "#60a5fa",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                ✅ VERIFIED CERTIFICATION
              </div>

              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "12px",
                  fontWeight: "800",
                }}
              >
                {cert.title}
              </h3>

              <p
                style={{
                  color: "#60a5fa",
                  marginBottom: "20px",
                  fontSize: "18px",
                }}
              >
                {cert.subtitle}
              </p>

              <p
                style={{
                  color: "#9ca3af",
                  lineHeight: 1.9,
                  fontSize: "17px",
                  marginBottom: "35px",
                }}
              >
                Internationally recognized
                operational standards ensuring
                trusted enterprise-grade security
                operations and workforce
                management systems.
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  background:
                    "linear-gradient(135deg,#2563eb,#3b82f6)",
                  color: "white",
                  padding: "18px 32px",
                  borderRadius: "18px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                  boxShadow:
                    "0 0 30px rgba(37,99,235,0.4)",
                }}
              >
                View Official Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
</Reveal>


      {/* GALLERY */}
      <Reveal>
        <section
          id="gallery"
          style={{
            padding:
              window.innerWidth < 768
                ? "100px 20px"
                : "140px 60px",
            background:
              "linear-gradient(to bottom,#020617,#010b2d)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: "1600px",
              margin: "auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "80px",
              }}
            >
              <p style={sectionTag}>
                OPERATIONAL GALLERY
              </p>

              <h2 style={sectionTitle}>
                Field Operations
              </h2>
            </div>

            <Swiper
              modules={[Autoplay]}
              slidesPerView={"auto"}
              spaceBetween={25}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              style={{
                padding: "20px 0",
              }}
            >
              {gallery.map((img, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: "320px",
                  }}
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    style={{
                      position: "relative",
                      height: "520px",
                      borderRadius: "30px",
                      overflow: "hidden",
                      border:
                        "1px solid rgba(255,255,255,0.08)",
                      boxShadow:
                        "0 10px 40px rgba(0,0,0,0.45)",
                    }}
                  >
                    <img
                      src={img}
                      alt="gallery"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.2))",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "25px",
                        right: "25px",
                        zIndex: 5,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "30px",
                          fontWeight: "800",
                          lineHeight: 1.2,
                          marginBottom: "15px",
                        }}
                      >
                        {index % 4 === 0 &&
                          "Industrial Security Personnel"}

                        {index % 4 === 1 &&
                          "Operational Site Patrol"}

                        {index % 4 === 2 &&
                          "Rapid Response Officer"}

                        {index % 4 === 3 &&
                          "Enterprise Security Team"}
                      </h3>

                      <p
                        style={{
                          color: "#d1d5db",
                          lineHeight: 1.7,
                          fontSize: "16px",
                        }}
                      >
                        Professional industrial security
                        operations and enterprise
                        infrastructure deployment.
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer
        id="contact"
        style={{
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          padding:
            window.innerWidth < 768
              ? "60px 20px"
              : "80px 60px",
          background: "#010409",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "25px",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "55px",
                }}
              />

              <div>
                <h2
                  style={{
                    fontSize: "30px",
                    margin: 0,
                  }}
                >
                  Chandrabhaga
                </h2>

                <p
                  style={{
                    color: "#9ca3af",
                    margin: 0,
                  }}
                >
                  Security LLP
                </p>
              </div>
            </div>

            <p
              style={{
                color: "#9ca3af",
                lineHeight: 1.7,
                fontSize: "17px",
              }}
            >
              Delivering enterprise-grade
              security solutions for industrial
              and infrastructure operations.
            </p>
          </div>

          <div>
            <h3 style={footerTitle}>
              Quick Links
            </h3>

            <p style={footerText}>Home</p>
            <p style={footerText}>Services</p>
            <p style={footerText}>Industries</p>
            <p style={footerText}>Gallery</p>
          </div>

          <div>
            <h3 style={footerTitle}>
              Services
            </h3>

            <p style={footerText}>
              Armed Security
            </p>

            <p style={footerText}>
              Infrastructure Security
            </p>

            <p style={footerText}>
              Industrial Surveillance
            </p>

            <p style={footerText}>
              Manpower Deployment
            </p>
          </div>

          <div>
            <h3 style={footerTitle}>
              Contact
            </h3>

            <p style={footerText}>
              📞 +91 9419174662
            </p>

            <p style={footerText}>
              ✉️ chandrabhagallp22@gmail.com
            </p>

            <p style={footerText}>
              📍 India
            </p>

            <p style={footerText}>
              🕒 24×7 Support
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "70px",
            paddingTop: "30px",
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          © 2026 Chandrabhaga Security LLP.
          All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

/* STYLES */

const linkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "18px",
};

const primaryButton = {
  background:
    "linear-gradient(135deg,#2563eb,#3b82f6)",
  color: "white",
  border: "none",
  padding: "20px 42px",
  borderRadius: "18px",
  fontSize: "20px",
  cursor: "pointer",
  boxShadow:
    "0 0 40px rgba(37,99,235,0.45)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "600",
};

const secondaryButton = {
  background: "rgba(255,255,255,0.05)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "20px 42px",
  borderRadius: "18px",
  fontSize: "20px",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "600",
};

const glassCard = {
  background: "rgba(255,255,255,0.06)",
  border:
    "1px solid rgba(59,130,246,0.15)",
  backdropFilter: "blur(18px)",
  borderRadius: "30px",
  padding: "45px",
  textAlign: "center",
  boxShadow:
    "0 0 30px rgba(37,99,235,0.08)",
};

const sectionTag = {
  color: "#3b82f6",
  letterSpacing: "5px",
  marginBottom: "20px",
};

const sectionTitle = {
  fontSize: "clamp(42px, 7vw, 64px)",
  fontWeight: "900",
};

const serviceCard = {
  background: "rgba(255,255,255,0.05)",
  border:
    "1px solid rgba(59,130,246,0.12)",
  borderRadius: "30px",
  padding: "45px",
  backdropFilter: "blur(14px)",
  boxShadow:
    "0 0 30px rgba(37,99,235,0.08)",
};

const serviceIcon = {
  fontSize: "60px",
  marginBottom: "25px",
};

const serviceTitle = {
  fontSize: "34px",
  marginBottom: "20px",
};

const serviceDesc = {
  color: "#d1d5db",
  lineHeight: 1.8,
  fontSize: "18px",
};

const industryCard = {
  background: "rgba(255,255,255,0.05)",
  border:
    "1px solid rgba(59,130,246,0.12)",
  borderRadius: "25px",
  padding: "40px",
  textAlign: "center",
  backdropFilter: "blur(14px)",
};

const statNumber = {
  fontSize: "54px",
  color: "#3b82f6",
};

const footerTitle = {
  fontSize: "24px",
  marginBottom: "25px",
};

const footerText = {
  color: "#9ca3af",
  marginBottom: "15px",
};

export default App;