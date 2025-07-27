import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import type { NAVBAR_ITEM_TYPE } from "../types";

const Navbar = () => {
  useGSAP(() => {
    const newTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    newTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex flex-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="md:size-12 object-contain"
          />
          <p>Hippo</p>
        </a>

        <ul>
          {navLinks.map(({ label, id }: NAVBAR_ITEM_TYPE) => (
            <li key={id} className="group">
              <a
                className="hover:text-yellow transition-colors"
                href={`#${id}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
