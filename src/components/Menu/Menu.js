"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Rounded from "../../common/RoundedButton";
import { HiBars2 } from "react-icons/hi2";
import "./menu.css";
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const container = useRef();

  const t1 = useRef();

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const toggleMenu = (targetId) => {
    setIsMenuOpen(!isMenuOpen);
    smoothScrollTo(targetId);
  };
  useGSAP(
    () => {
      gsap.set(".menu-links-item-holder", { y: 150 });
      t1.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-links-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );
  useEffect(() => {
    if (isMenuOpen) {
      t1.current.play();
      document.body.style.overflow = "hidden";
    } else {
      t1.current.reverse();
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-open" onClick={toggleMenu}>
          <Rounded className="contact_getintouch_circle">
            <p style={{ zIndex: "23" }}>
              <HiBars2 />
            </p>
          </Rounded>
        </div>
      </div>

      <div className="menu-overlay">
        <div className="menu-links">
          <div className="menu-links-item">
            <div className="menu-links-item-holder" onClick={toggleMenu}>
              <a href="#home" onClick={() => toggleMenu("home")}>
                Home
              </a>
            </div>
          </div>
          <div className="menu-links-item">
            <div className="menu-links-item-holder" onClick={toggleMenu}>
              <a href="#about" onClick={() => toggleMenu("about")}>
                About
              </a>
            </div>
          </div>
          <div className="menu-links-item">
            <div className="menu-links-item-holder" onClick={toggleMenu}>
              <a href="#projects" onClick={() => toggleMenu("projects")}>
                Projects
              </a>
            </div>
          </div>
          <div className="menu-links-item">
            <div className="menu-links-item-holder" onClick={toggleMenu}>
              <a href="#contact" onClick={() => toggleMenu("contact")}>
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
