import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export const setCharTimeline = (
  character: THREE.Object3D,
  camera: THREE.PerspectiveCamera
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#landingDiv",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      id: "work",
    },
  });

  tl.to(
    character.position,
    {
      x: window.innerWidth > 1024 ? 2 : 0,
      y: window.innerWidth > 1024 ? 8 : 6,
      z: window.innerWidth > 1024 ? 10 : 5,
      duration: 1,
    },
    0
  );

  tl.to(
    character.scale,
    {
      x: window.innerWidth > 1024 ? 1.2 : 0.8,
      y: window.innerWidth > 1024 ? 1.2 : 0.8,
      z: window.innerWidth > 1024 ? 1.2 : 0.8,
      duration: 1,
    },
    0
  );

  tl.to(
    camera.position,
    {
      z: window.innerWidth > 1024 ? 35 : 20,
      duration: 1,
    },
    0
  );
};

export const setAllTimeline = () => {
  const splitElements = document.querySelectorAll(".split-h2");

  splitElements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      x: 0,
      opacity: 1,
      duration: 0.5,
    });
  });
};
