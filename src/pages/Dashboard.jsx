import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import TodayLearning from "../components/TodayLearning";

function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header />

        <section className="progress-grid">
          <ProgressCard
            title="Overall Progress"
            value="42%"
            description="Keep improving"
          />

          <ProgressCard
            title="Learning Streak"
            value="7 Days"
            description=" Great consistency"
          />

          <ProgressCard
            title="Completed Concepts"
            value="38"
            description="Out of 90 concepts"
          />
        </section>

        <TodayLearning />
      </main>
    </div>
  );
}

export default Dashboard;
