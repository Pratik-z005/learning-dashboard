function TodayLearning({ learning }) {
  return (
    <section className="today-learning">
      <div className="section-heading">
        <div>
          <h2>Today's Learning</h2>
          <p>Keep moving forward with today's concepts.</p>
        </div>

        <span>Day {learning.day}</span>
      </div>

      {learning.concepts.map((concept) => (
        <div
          className={`learning-item ${concept.completed ? "completed" : ""}`}
          key={concept.id}
        >
          <span>{concept.completed ? "✓" : "○"}</span>

          <p>{concept.name}</p>
        </div>
      ))}
    </section>
  );
}

export default TodayLearning;
