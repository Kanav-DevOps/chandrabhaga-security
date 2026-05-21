import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

import logo from "./assets/logo.png";
import heroBanner from "./assets/hero-banner.png";

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
            padding: "20px 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
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
                width: "70px",
              }}
            />

            <div>
              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 38px)",
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
                }}
              >
                Security LLP
              </p>
            </div>
          </div>

          {/* MENU */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              fontSize: "18px",
              flexWrap: "wrap",
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

            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          minHeight: "115vh",
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: `${scrollProgress * 0.5}px`,
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
          }}
        />

        {/* GRID */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1400px",
            margin: "auto",
            width: "100%",
            padding: "0 60px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            style={{
              maxWidth: "1000px",
              paddingTop: "220px",
              paddingBottom: "180px",
            }}
          >
            <p
              style={{
                color: "#3b82f6",
                letterSpacing: "6px",
                marginBottom: "25px",
                fontSize: "18px",
              }}
            >
              PROTECTING WHAT MATTERS
            </p>

            <h1
              style={{
                fontSize: "clamp(56px, 9vw, 96px)",
                lineHeight: 1,
                fontWeight: "900",
                marginBottom: "30px",
                textShadow: "0 0 40px rgba(37,99,235,0.3)",
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
                fontSize: "clamp(18px, 2vw, 28px)",
                lineHeight: 1.7,
                color: "#d1d5db",
                maxWidth: "720px",
              }}
            >
              Professional armed & unarmed security solutions
              for industrial operations, power projects and
              enterprise infrastructure protection.
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "25px",
                marginTop: "50px",
                flexWrap: "wrap",
              }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                style={primaryButton}
              >
                Explore Services
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                style={secondaryButton}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
      <Reveal>
        <section
          style={{
            marginTop: "-30px",
            position: "relative",
            zIndex: 20,
            padding: "0 60px",
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
                <h2
                  style={{
                    ...statNumber,
                    textShadow:
                      "0 0 25px rgba(37,99,235,0.35)",
                  }}
                >
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
            padding: "140px 60px",
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
            padding: "140px 60px",
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

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "80px 60px",
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
              Delivering enterprise-grade security
              solutions for industrial and infrastructure
              operations.
            </p>
          </div>

          <div>
            <h3 style={footerTitle}>
              Quick Links
            </h3>

            <p style={footerText}>Home</p>
            <p style={footerText}>Services</p>
            <p style={footerText}>Industries</p>
            <p style={footerText}>Contact</p>
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
              +91 99999 99999
            </p>

            <p style={footerText}>
              info@chandrabhaga.com
            </p>

            <p style={footerText}>
              India
            </p>

            <p style={footerText}>
              24×7 Support
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
};

const primaryButton = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "20px 42px",
  borderRadius: "18px",
  fontSize: "20px",
  cursor: "pointer",
  boxShadow: "0 0 40px rgba(37,99,235,0.45)",
};

const secondaryButton = {
  background: "rgba(255,255,255,0.05)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "20px 42px",
  borderRadius: "18px",
  fontSize: "20px",
  cursor: "pointer",
};

const glassCard = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(59,130,246,0.15)",
  backdropFilter: "blur(18px)",
  borderRadius: "30px",
  padding: "45px",
  textAlign: "center",
  boxShadow: "0 0 30px rgba(37,99,235,0.08)",
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
  border: "1px solid rgba(59,130,246,0.12)",
  borderRadius: "30px",
  padding: "45px",
  backdropFilter: "blur(14px)",
  boxShadow: "0 0 30px rgba(37,99,235,0.08)",
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
  border: "1px solid rgba(59,130,246,0.12)",
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