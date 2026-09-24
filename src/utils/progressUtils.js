function getAllConcepts(learningData) {
  const concepts = [];

  learningData.forEach((subject) => {
    subject.topics.forEach((topic) => {
      topic.concepts.forEach((concept) => {
        concepts.push(concept);
      });
    });
  });

  return concepts;
}

function getProgress(learningData, completedConcepts) {
  const concepts = getAllConcepts(learningData);

  const total = concepts.length;

  const completed = concepts.filter((concept) =>
    completedConcepts.includes(concept.id),
  ).length;

  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return {
    total,
    completed,
    progress,
  };
}

export { getAllConcepts, getProgress };
