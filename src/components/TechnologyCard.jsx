import { FiCheck, FiPlus, FiStar } from "react-icons/fi";

function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <article className={`tech-card ${isAdded ? "is-added" : ""}`}>
      <div className="card-top">
        <div className="tech-icon-wrap">
          <img src={technology.icon} alt={`${technology.name} logo`} className="tech-icon" />
        </div>
        <span className="tech-badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="tech-description">{technology.description}</p>

      <div className="tech-meta">
        <span className="category-chip">{technology.category}</span>
        <span className="difficulty">{technology.difficulty}</span>
      </div>

      <div className="card-bottom">
        <span className="rating"><FiStar /> {technology.rating}</span>
        <button
          className={`add-btn ${isAdded ? "added" : ""}`}
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded ? <><FiCheck /> Added to Stack</> : <><FiPlus /> Add to Stack</>}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;