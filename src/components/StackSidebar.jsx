import { FiCheckCircle, FiTrash2, FiX } from "react-icons/fi";

function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-sidebar">
      <div className="stack-heading">
        <div>
          <span className="eyebrow">YOUR TOOLKIT</span>
          <h2>Your Stack</h2>
        </div>
        <span className="count-badge">{stack.length}</span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon"><FiCheckCircle /></div>
          <h3>Your stack is empty</h3>
          <p>Add technologies from the list and they will appear here.</p>
        </div>
      ) : (
        <>
          <p className="selected-label">{stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected</p>
          <div className="stack-list">
            {stack.map((item) => (
              <div className="stack-item" key={item.id}>
                <img src={item.icon} alt="" />
                <div className="stack-item-info">
                  <strong>{item.name}</strong>
                  <span>{item.category}</span>
                </div>
                <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
                  <FiX />
                </button>
              </div>
            ))}
          </div>
          <button className="remove-all-btn" onClick={onRemoveAll}>
            <FiTrash2 /> Remove All
          </button>
        </>
      )}

      <div className="stack-tip">
        <strong>Pro tip</strong>
        <span>Mix frontend, backend, database, and DevOps tools to create a complete workflow.</span>
      </div>
    </aside>
  );
}

export default StackSidebar;