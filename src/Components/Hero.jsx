import React from "react";
import "../Styles/hero.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextSplitter } from "./TextSplitter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Colors } from "../Contants/Color/Color";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const introT1 = gsap.timeline();
    introT1
      .set(".hero-wrapper", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 2,
        opacity: 0,
        ease: "power4.in",
        delay: 0.2,
        stagger: 1,
      })
      .from(
        ".secondary-heading",
        {
          opacity: 0,
          y: 30,
        },
        "+=0.8",
      )
      .from(".subtitle", {
        opacity: 0,
        y: 10,
      })
      .from(".cta", {
        opacity: 0,
        y: 10,
        duration: 0.6,
      });

    const scrollT1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });

    scrollT1
      .fromTo(
        "body",
        {
          backgroundColor: Colors.yellowBackground,
        },
        {
          backgroundColor: Colors.greenBackground,
          overwrite: "auto",
        },
        1,
      )
      .from(".primary-heading2 .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".subtitle2", {
        y: 20,
        opacity: 0,
      });
  });

  return (
    <div className="hero-wrapper">
      <div className="hero">
        <h1 className="primary-heading">
          <TextSplitter
            text={`LIVE GUTSY`}
            wordDisplayStyle="block"
            className="hero-header-word"
          />
        </h1>
        <h3 className="secondary-heading">Soda Perfected</h3>
        <p className="subtitle">
          3-5g of sugar. 9g of fiber. 5 delicious flavors.
        </p>
        <button className="cta">SHOP NOW</button>
      </div>

      <div className="container1">
        <h2 className="primary-heading2">
          <TextSplitter text={`TRY ALL FIVE FLAVORS`} />
        </h2>
        <p className="subtitle2">
          Our soda is made with real fruit juice and a touch of cane
          <br /> sugar. We never use artificial sweeteners or high fructose
          <br /> corn syrup. Try all five flavors and find your favorite!
        </p>
      </div>
    </div>
  );
};

export default Hero;
