function TodayLearning() {
  return (
    <section className="today-learning">
      <div className="section-heading">
        <h2>Today's Learning</h2>
        <span>Day 12</span>
      </div>

      <div className="learning-item completed">
        <span>✓</span>
        <p>JavaScript Fundamentals</p>
      </div>

      <div className="learning-item completed">
        <span>✓</span>
        <p>React Components</p>
      </div>

      <div className="learning-item">
        <span>○</span>
        <p>HashMap Practice</p>
      </div>

      <div className="learning-item">
        <span>○</span>
        <p>REST API — GET Request</p>
      </div>
    </section>
  );
}

export default TodayLearning;
