import { Suspense, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies/Technologies";
import YourStack from "./components/YourStack/YourStack";
import Footer from "./components/Footer";

interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const technologiesPromise: Promise<Technology[]> = fetch(
  "/technologies.json"
).then((response) => response.json());

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: number) => {
    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id)
    );
  };

  // Remove everything
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main className="main-content">
        <Suspense fallback={<p>Loading technologies...</p>}>
          <div className="stack-layout">
            <Technologies
              technologiesPromise={technologiesPromise}
              stack={stack}
              onAddToStack={handleAddToStack}
            />

            <YourStack
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;