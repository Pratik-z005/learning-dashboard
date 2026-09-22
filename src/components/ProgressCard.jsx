function ProgressCard({ title, value, description }) {
  return (
    <div className="progress-card">
      <p>{title}</p>
      <h2>{value}</h2>
      <span>{description}</span>
    </div>
  );
}

export default ProgressCard;
