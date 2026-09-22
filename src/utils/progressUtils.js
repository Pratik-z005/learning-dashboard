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

function getProgress(learningData) {
  const concepts = getAllConcepts(learningData);

  const total = concepts.length;

  const completed = concepts.filter(
    (concept) => concept.status === "mastered",
  ).length;

  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return {
    total,
    completed,
    progress,
  };
}

export { getAllConcepts, getProgress };
