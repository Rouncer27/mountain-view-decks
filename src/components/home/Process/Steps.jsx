import React, { useEffect } from "react";
import iconOne from "../../../assets/one.png";
import iconTwo from "../../../assets/two.png";
import iconThree from "../../../assets/three.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Steps = ({ processSteps }) => {
  console.log("iconOne", iconOne);
  useEffect(() => {
    const trigger = document.querySelector("#pro-steps");
    const process = document.querySelectorAll(".process-steps-step");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 50%",
        markers: false,
      },
    });

    tl.fromTo(
      process,
      { autoAlpha: 0, y: 200 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power1.out",
        stagger: {
          each: 0.5,
        },
      },
    );
  }, []);

  return (
    <div id="pro-steps" className="process-steps">
      {processSteps.map((step, index) => {
        return (
          <div className="process-steps-step" key={index}>
            <div className="process-steps-step-icon">
              <img
                src={
                  index === 0
                    ? iconOne.src
                    : index === 1
                      ? iconTwo.src
                      : iconThree.src
                }
                alt={`Step ${index === 0 ? "one" : index === 1 ? "two" : "three"}`}
              />
            </div>
            <div>
              <h3>{step.title}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: step.content }} />
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
