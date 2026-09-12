import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies/Technologies";
import { Suspense } from "react";

const technologiesPromise = fetch("/data.json")
  .then((response) => response.json());

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<p>Loading technologies...</p>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;