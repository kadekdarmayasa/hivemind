import Hero from "./Hero";

export default function WebDesign({ data }) {
  const { hero } = data;

  return (
    <>
      <Hero hero={hero} />
    </>
  )
}