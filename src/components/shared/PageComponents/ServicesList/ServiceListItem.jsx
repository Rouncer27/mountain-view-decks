import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceListItem = ({ service, index }) => {
  useEffect(() => {
    const trigger = document.querySelector(
      `.services-list-service-${index + 1}`,
    );
    const content = trigger.querySelector(".services-list-service-content");
    const image = trigger.querySelector(".services-list-service-image");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 70%",
        markers: false,
      },
    });

    tl.add("start")
      .fromTo(
        content,
        { autoAlpha: 0, x: index % 2 === 0 ? -200 : 200 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.out",
        },
      )
      .fromTo(
        image,
        { autoAlpha: 0, x: index % 2 === 0 ? 200 : -200 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.out",
        },
        "start+=0.5",
      );
  }, []);
  return (
    <div
      className={`services-list-service services-list-service-${index + 1} ${index % 2 === 0 ? "" : "services-list-service-reverse"}`}
    >
      <div className="services-list-service-content">
        <div className="services-list-service-content-title">
          <h2>{service.title}</h2>
        </div>
        <div
          className="services-list-service-content-excerpt"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
        <div className="services-list-service-content-link">
          <a href={service.buttonLink.edges[0].node.uri}>Learn More</a>
        </div>
      </div>
      <div className="services-list-service-image">
        <img
          src={service.image.node.sourceUrl}
          alt={service.image.node.altText}
        />
      </div>
    </div>
  );
};

export default ServiceListItem;
