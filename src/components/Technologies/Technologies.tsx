import { use } from "react";

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

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
}

const Technologies = ({
  technologiesPromise,
  stack,
  onAddToStack,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="technologies-section">
      <div className="technologies-header">
        <h2>Technologies</h2>

        <p>
          Explore technologies by category to build your ideal
          stack.
        </p>
      </div>

      <div className="technology-grid">
        {technologies.map((technology) => {
          const isAdded = stack.some(
            (item) => item.id === technology.id
          );

          return (
            <div
              className="technology-card"
              key={technology.id}
            >
              <div className="card-top">
                <img
                  src={technology.icon}
                  alt={technology.name}
                />

                <span className="technology-badge">
                  {technology.badge}
                </span>
              </div>

              <h3>{technology.name}</h3>

              <p className="technology-description">
                {technology.description}
              </p>

              <div className="technology-info">
                <span>{technology.category}</span>

                <span>{technology.difficulty}</span>

                <span className="rating">
                  ⭐ {technology.rating}
                </span>
              </div>

              <button
                className={`stack-button ${
                  isAdded ? "added-button" : ""
                }`}
                onClick={() => onAddToStack(technology)}
                disabled={isAdded}
              >
                {isAdded
                  ? "✓ Added to Stack"
                  : "Add to Stack"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;