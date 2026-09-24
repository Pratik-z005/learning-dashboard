function ConceptTracker({ subject, completedConcepts, onToggle }) {
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
                onClick={() => onToggle(concept.id)}
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
