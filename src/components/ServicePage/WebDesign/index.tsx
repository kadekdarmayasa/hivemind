import Hero from "./Hero";
import ServiceOffered from "./ServiceOffered";
import { useRef } from "react";

export default function WebDesign({ data }) {
  const { hero, offeredServices } = data;

  const refServiceOffered = useRef();

  return (
    <>
      <Hero hero={hero} refServiceOffered={refServiceOffered} />
      <ServiceOffered servicesOffered={offeredServices} refServiceOffered={refServiceOffered} />
    </>
  )
}