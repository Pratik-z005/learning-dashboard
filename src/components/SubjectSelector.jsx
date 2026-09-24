function SubjectSelector({ subjects, selectedSubject, onSelect }) {
  return (
    <section className="subject-selector">
      <div className="section-heading">
        <h2>Subjects</h2>
      </div>

      <div className="subject-buttons">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            className={
              selectedSubject.id === subject.id
                ? "subject-button active"
                : "subject-button"
            }
            onClick={() => onSelect(subject)}
          >
            {subject.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SubjectSelector;
