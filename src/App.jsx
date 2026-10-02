import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

const categories = ["All", "Frontend", "Backend", "Database", "Language", "Styling", "DevOps", "Tools"];

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/technologies.json");
        if (!response.ok) throw new Error("Unable to load technology data");
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        toast.error("Could not load technology data.");
      } finally {
        setLoading(false);
      }
    };
    loadTechnologies();
  }, []);

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((technology) => technology.category === activeCategory);

  const addToStack = (technology) => {
    const alreadyAdded = selectedStack.some((item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setSelectedStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const removed = selectedStack.find((item) => item.id === id);
    setSelectedStack((current) => current.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (!selectedStack.length) {
      toast.info("Your stack is already empty.");
      return;
    }
    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <section className="builder-section" id="technologies">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">BUILD YOUR TOOLKIT</span>
                <h2>Choose your <span className="gradient-text">technologies</span></h2>
                <p>Explore popular tools and create a development stack that fits your next project.</p>
              </div>
              <div className="category-filters" aria-label="Technology categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading technologies...</p>
              </div>
            ) : (
              <div className="builder-layout">
                <div className="technology-grid">
                  {filteredTechnologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={selectedStack.some((item) => item.id === technology.id)}
                      onAdd={addToStack}
                    />
                  ))}
                </div>
                <StackSidebar
                  stack={selectedStack}
                  onRemove={removeFromStack}
                  onRemoveAll={removeAll}
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2400} theme="light" />
    </div>
  );
}

export default App;