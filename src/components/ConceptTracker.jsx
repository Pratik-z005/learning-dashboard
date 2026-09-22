import { useEffect, useState } from "react";

function ConceptTracker({ subject }) {
  const [completedConcepts, setCompletedConcepts] = useState(() => {
    const savedConcepts = localStorage.getItem("completedConcepts");

    return savedConcepts ? JSON.parse(savedConcepts) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "completedConcepts",
      JSON.stringify(completedConcepts),
    );
  }, [completedConcepts]);

  function toggleConcept(conceptId) {
    setCompletedConcepts((previous) => {
      if (previous.includes(conceptId)) {
        return previous.filter((id) => id !== conceptId);
      }

      return [...previous, conceptId];
    });
  }

  return (
    <section className="concept-tracker">
      <div className="section-heading">
        <h2>{subject.name}</h2>
      </div>

      {subject.topics.map((topic) => (
        <div className="topic" key={topic.id}>
          <h3>{topic.name}</h3>

          {topic.concepts.map((concept) => {
            const isCompleted = completedConcepts.includes(concept.id);

            return (
              <div
                className={`concept ${isCompleted ? "completed" : ""}`}
                key={concept.id}
                onClick={() => toggleConcept(concept.id)}
              >
                <span>
                  {isCompleted ? "✓" : "○"} {concept.name}
                </span>

                <span>{isCompleted ? "Completed" : concept.status}</span>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}

export default ConceptTracker;
