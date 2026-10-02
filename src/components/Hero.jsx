import { FiArrowRight, FiCode, FiLayers, FiZap } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge"><span></span> Developer toolkit, simplified</div>
          <h1>Build your perfect <span className="gradient-text">Dev Stack.</span></h1>
          <p>
            Discover modern technologies, compare your options, and assemble a
            development stack that matches the way you build.
          </p>
          <div className="hero-actions">
            <a href="#technologies" className="primary-btn">Explore Technologies <FiArrowRight /></a>
            <a href="#about" className="secondary-btn">Learn More</a>
          </div>
          <div className="hero-stats">
            <div><strong>15+</strong><span>Technologies</span></div>
            <div><strong>7</strong><span>Categories</span></div>
            <div><strong>100%</strong><span>Free to explore</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-top">
              <div className="window-dots"><i></i><i></i><i></i></div>
              <span>my-stack.config</span>
            </div>
            <div className="code-body">
              <div><span className="code-number">01</span><span className="purple">const</span> <span className="blue">myStack</span> = [</div>
              <div className="indent"><span className="orange">"React"</span>,</div>
              <div className="indent"><span className="orange">"Node.js"</span>,</div>
              <div className="indent"><span className="orange">"PostgreSQL"</span>,</div>
              <div className="indent"><span className="orange">"Docker"</span></div>
              <div>];</div>
              <div className="code-comment">// ready to build something great</div>
            </div>
            <div className="floating-card card-a"><FiCode /><span>Clean Code</span></div>
            <div className="floating-card card-b"><FiLayers /><span>Modern Stack</span></div>
            <div className="floating-card card-c"><FiZap /><span>Ship Faster</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;