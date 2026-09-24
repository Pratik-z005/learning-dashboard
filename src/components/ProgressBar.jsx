function ProgressBar({ value }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${value}%` }}></div>
    </div>
  );
}

export default ProgressBar;
