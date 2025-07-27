import { useRef, useState } from "react";
import { allCocktails } from "../constants";
import type { ALL_COCKTAILS_ITEM_TYPE } from "../types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const recipeRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, duration: 1, xPercent: 0, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { opacity: 0, yPercent: 50 },
      { opacity: 1, duration: 1, yPercent: 0, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { opacity: 0, yPercent: 50 },
      { opacity: 1, duration: 1, yPercent: 0, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  const totalCocktails: number = allCocktails.length;

  const goToSlide = (index: number) => {
    const newIndex: number = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset: number) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail: ALL_COCKTAILS_ITEM_TYPE = getCocktailAt(0);
  const prevCocktail: ALL_COCKTAILS_ITEM_TYPE = getCocktailAt(-1);
  const nextCocktail: ALL_COCKTAILS_ITEM_TYPE = getCocktailAt(1);

  return (
    <section id="menu" aria-label="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="slider-left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="slider-right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktails Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map(
          (cocktail: ALL_COCKTAILS_ITEM_TYPE, index: number) => {
            const isActive: boolean = index === currentIndex;

            return (
              <button
                key={cocktail.id}
                className={`${
                  isActive
                    ? "text-white border-white"
                    : "text-white/50 border-white/50"
                }`}
                onClick={() => goToSlide(index)}
              >
                {cocktail.name}
              </button>
            );
          }
        )}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden={true}
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden={true}
            />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.title}
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={recipeRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
