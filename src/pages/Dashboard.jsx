import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import TodayLearning from "../components/TodayLearning";
import ConceptTracker from "../components/ConceptTracker";
import NeedsWork from "../components/NeedsWork";

import SubjectSelector from "../components/SubjectSelector";

import learningData from "../data/learningData";

import { getProgress, getNeedsWork } from "../utils/progressUtils";

function Dashboard() {
  const [selectedSubject, setSelectedSubject] = useState(learningData[0]);

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

  const progressData = getProgress(learningData, completedConcepts);

  const needsWork = getNeedsWork(learningData);

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header />

        <SubjectSelector
          subjects={learningData}
          selectedSubject={selectedSubject}
          onSelect={setSelectedSubject}
        />

        <section className="progress-grid">
          <ProgressCard
            title="Overall Progress"
            value={`${progressData.progress}%`}
            description="Keep improving"
          />

          <ProgressCard
            title="Learning Streak"
            value="7 Days"
            description="🔥 Great consistency"
          />

          <ProgressCard
            title="Completed Concepts"
            value={progressData.completed}
            description={`Out of ${progressData.total} concepts`}
          />
        </section>

        <TodayLearning />

        <ConceptTracker
          subject={selectedSubject}
          completedConcepts={completedConcepts}
          onToggle={toggleConcept}
        />

        <NeedsWork concepts={needsWork} />
      </main>
    </div>
  );
}

export default Dashboard;
