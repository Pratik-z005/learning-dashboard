function NeedsWork({ concepts }) {
  return (
    <section className="needs-work">
      <div className="section-heading">
        <h2>Needs Work</h2>
        <span>{concepts.length} concepts</span>
      </div>

      {concepts.length === 0 ? (
        <p className="empty-message">🎉 Nothing needs attention right now!</p>
      ) : (
        concepts.map((concept) => (
          <div className="needs-work-item" key={concept.id}>
            <div>
              <h3>{concept.name}</h3>

              <p>
                {concept.subject} → {concept.topic}
              </p>
            </div>

            <span className={`status ${concept.status}`}>
              {concept.status.replace("-", " ")}
            </span>
          </div>
        ))
      )}
    </section>
  );
}

export default NeedsWork;
