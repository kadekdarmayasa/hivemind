import Hero from "./Hero";
import ServiceOffered from "./ServiceOffered";
import Process from "./Process";
import WorkSample from "./WorkSample";
import PriceList from "./PriceList";
import Testimony from "./Testimony";
import { useRef } from "react";

export default function WebDesign({ data }) {
  const { hero, offeredServices, process, workSample, priceList, clients } = data;

  const refServiceOffered = useRef();

  return (
    <>
      <Hero hero={hero} refServiceOffered={refServiceOffered} />
      <ServiceOffered servicesOffered={offeredServices} refServiceOffered={refServiceOffered} />
      <Process process={process} />
      <WorkSample workSample={workSample} />
      <PriceList priceList={priceList} />
      <Testimony clients={clients} />
    </>
  )
}