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

  const [conceptStatuses, setConceptStatuses] = useState(() => {
    const savedStatuses = localStorage.getItem("conceptStatuses");

    return savedStatuses ? JSON.parse(savedStatuses) : {};
  });

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

  useEffect(() => {
    localStorage.setItem("conceptStatuses", JSON.stringify(conceptStatuses));
  }, [conceptStatuses]);

  function toggleConcept(conceptId) {
    setCompletedConcepts((previous) => {
      if (previous.includes(conceptId)) {
        return previous.filter((id) => id !== conceptId);
      }

      return [...previous, conceptId];
    });
  }

  function updateConceptStatus(conceptId, status) {
    setConceptStatuses((previous) => ({
      ...previous,
      [conceptId]: status,
    }));
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
          conceptStatuses={conceptStatuses}
          onStatusChange={updateConceptStatus}
        />

        <NeedsWork concepts={needsWork} />
      </main>
    </div>
  );
}

export default Dashboard;
