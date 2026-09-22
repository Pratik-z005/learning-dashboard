import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import TodayLearning from "../components/TodayLearning";
import ConceptTracker from "../components/ConceptTracker";

// data!
import learningData from "../data/learningData";

import { getProgress } from "../utils/progressUtils";
const progressData = getProgress(learningData);

console.log(progressData);
// console.log(learningData);

function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header />

        <section className="progress-grid">
          <ProgressCard
            title="Overall Progress"
            value={`${progressData.progress}%`}
            description="Keep improving"
          />

          <ProgressCard
            title="Learning Streak"
            value="7 Days"
            description=" Great consistency"
          />

          <ProgressCard
            title="Completed Concepts"
            value={progressData.completed}
            description={`Out of ${progressData.total} concepts`}
          />
        </section>

        <TodayLearning />

        <ConceptTracker subject={learningData[2]} />
      </main>
    </div>
  );
}

export default Dashboard;
