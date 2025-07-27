import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        // markers:true
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div className="flex flex-col md:flex-row md:items-center items-start">
              <div>
                <div className="flex flex-row justify-start gap-0">
                  {Array.from({ length: 4 }).map((_, i: number) => (
                    <p key={i} className="text-sm text-yellow">
                      <TiStarFullOutline size={20} />
                    </p>
                  ))}
                  <p className="text-sm text-yellow">
                    <FaRegStarHalfStroke size={20} />
                  </p>
                </div>
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +12000 customers
                </p>
              </div>

              <hr className="border-r-[3px] border-neutral-800 h-full hidden md:block" />
              <hr className="border-t-[3px] border-neutral-800 w-full max-w-64 block md:hidden" />

              <div className="relative p-8 overflow-hidden">
                <div className="line-gradient absolute top-0 left-0 w-full h-full rounded-full opacity-20" />
                <div className="noisy rounded-full" />
                <div className="flex flex-row">
                  <img
                    src="/images/profile1.png"
                    alt="profile-1"
                    className="relative z-20"
                  />
                  <img
                    src="/images/profile2.png"
                    alt="profile-2"
                    className="-ml-4 relative z-20"
                  />
                  <img
                    src="/images/profile3.png"
                    alt="profile-3"
                    className="-ml-4 relative z-20"
                  />
                  <img
                    src="/images/profile4.png"
                    alt="profile-4"
                    className="-ml-4 relative z-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};
export default About;
