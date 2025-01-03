import Collections from "./components/Collection";

import Hero from "./components/hero";
import ProductSlider from "./components/ProductSlider";

import Value from "./components/value";
import WelcomeSection from "./components/welcome";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      
      <Hero />
      <WelcomeSection />
      <Value />
      <ProductSlider />
      <Collections />
      
      
    </main>
  )
}

