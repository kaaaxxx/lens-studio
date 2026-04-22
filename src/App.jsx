import { useEffect } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import imgUrl1 from "./img/1.jpg";
import imgUrl2 from "./img/2.jpg";
import imgUrl3 from "./img/3.jpg";
import imgUrl4 from "./img/4.jpg";
import imgUrl5 from "./img/5.jpg";
import imgUrl6 from "./img/6.jpg";
import imgUrl7 from "./img/7.jpg";
import imgUrl8 from "./img/8.jpg";
import imgUrl9 from "./img/9.jpg";
import imgUrl10 from "./img/10.jpg";
import imgUrl11 from "./img/11.jpg";
import imgUrl12 from "./img/12.jpg";
import imgUrl13 from "./img/13.jpg";
import imgUrl14 from "./img/14.jpg";
import imgUrl15 from "./img/15.jpg";
import imgUrl16 from "./img/16.jpg";
import imgUrl17 from "./img/17.jpg";
import imgUrl18 from "./img/18.jpg";
import imgUrl19 from "./img/19.jpg";
import imgUrl20 from "./img/20.jpg";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // const boxes = document.querySelectorAll(".elem");

    // boxes.forEach((box) => {
    //   // Generates a random value between 50 and 200
    //   const randomWidth = Math.floor(Math.random() * 151) + 50;
    //   const randomHeight = Math.floor(Math.random() * 151) + 50;

    //   box.style.width = `${randomWidth}px`;
    //   box.style.height = `${randomHeight}px`;
    // });
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start",
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: elem,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start",
        )
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
  });

  return (
    <>
      <div className="w-full bg-zinc-900 overflow-hidden">
        <div className="grid gap-2 grid-cols-4 md:grid-cols-8 min-h-screen">
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 1, "--c": 7, "--c-mobile": 4}}
          >
            <img src={imgUrl1} alt="Image 2" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 2, "--c-mobile": 1 }}
          >
            <img src={imgUrl2} alt="Image 3" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 6, "--c-mobile": 3 }}
          >
            <img src={imgUrl3} alt="Image 4" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 4, "--c-mobile": 2 }}
          >
            <img src={imgUrl4} alt="Image 5" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 8, "--c-mobile": 4 }}
          >
            <img src={imgUrl5} alt="Image 6" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 1, "--c-mobile": 1 }}
          >
            <img src={imgUrl6} alt="Image 7" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 4, "--c-mobile": 3 }}
          >
            <img src={imgUrl7} alt="Image 8" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 2, "--c-mobile": 2 }}
          >
            <img src={imgUrl8} alt="Image 9" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 6, "--c-mobile": 4 }}
          >
            <img src={imgUrl9} alt="Image 10" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 3, "--c-mobile": 1 }}
          >
            <img src={imgUrl10} alt="Image 11" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 7, "--c-mobile": 3 }}
          >
            <img src={imgUrl11} alt="Image 12" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 5, "--c-mobile": 2 }}
          >
            <img src={imgUrl12} alt="Image 13" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 8, "--c-mobile": 4 }}
          >
            <img src={imgUrl3} alt="Image 14" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 1, "--c-mobile": 1 }}
          >
            <img src={imgUrl14} alt="Image 15" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 4, "--c-mobile": 3 }}
          >
            <img src={imgUrl15} alt="Image 16" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 2, "--c-mobile": 2 }}
          >
            <img src={imgUrl16} alt="Image 17" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 6, "--c-mobile": 4 }}
          >
            <img src={imgUrl17} alt="Image 18" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 3, "--c-mobile": 1 }}
          >
            <img src={imgUrl18} alt="Image 19" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 7, "--c-mobile": 3 }}
          >
            <img src={imgUrl19} alt="Image 20" />
          </div>
        </div>
        <div className="font-Kaush fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl md:text-6xl lg:text-8xl mb-2 md:mb-4">
            Akash kumar<sup>®</sup>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl">Lens Studio</h2>
        </div>
        <div className="w-full bg-[#D1D1D1] flex items-center justify-center mx-auto py-24 md:py-36 relative z-999 text-center px-6">
          <p className="text-xl md:text-3xl lg:text-5xl w-full md:w-3/4 leading-relaxed md:leading-[4.2rem] text-black font-regular text-left">
            The web is my infinite canvas, and code is my medium. I don't just build sites; I compose them, weaving raw logic into a living bridge between ethereal design and grounded architecture. Every line I write is a deliberate, clean stroke—crafted with the precision of an artist and the soul of a storyteller—to transform your vision into an immersive digital reality®
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
