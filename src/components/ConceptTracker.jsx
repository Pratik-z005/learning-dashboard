function ConceptTracker({
  subject,
  completedConcepts,
  onToggle,
  conceptStatuses,
  onStatusChange,
}) {
  const statuses = [
    "not-started",
    "learning",
    "understood",
    "needs-practice",
    "needs-revision",
    "mastered",
  ];

  return (
    <section className="concept-tracker">
      <div className="section-heading">
        <div>
          <h2>{subject.name}</h2>

          <p className="subject-description">
            Track your concepts and learning status.
          </p>
        </div>

        <span>{subject.topics.length} topics</span>
      </div>

      {subject.topics.map((topic) => (
        <div className="topic" key={topic.id}>
          <div className="topic-header">
            <h3>{topic.name}</h3>

            <span>{topic.concepts.length} concepts</span>
          </div>

          <div className="concept-list">
            {topic.concepts.map((concept) => {
              const isCompleted = completedConcepts.includes(concept.id);

              const currentStatus =
                conceptStatuses[concept.id] || concept.status;

              return (
                <div
                  className={`concept ${isCompleted ? "completed" : ""}`}
                  key={concept.id}
                >
                  <div
                    className="concept-info"
                    onClick={() => onToggle(concept.id)}
                  >
                    <span className="concept-icon">
                      {isCompleted ? "✓" : "○"}
                    </span>

                    <div>
                      <h4>{concept.name}</h4>

                      <p>
                        {subject.name} → {topic.name}
                      </p>
                    </div>
                  </div>

                  <div className="concept-actions">
                    <select
                      value={currentStatus}
                      onChange={(event) =>
                        onStatusChange(concept.id, event.target.value)
                      }
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status.replace("-", " ")}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ConceptTracker;
