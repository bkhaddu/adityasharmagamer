import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Globe2,
  LineChart,
  Megaphone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  WalletCards,
  Zap
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Store,
    title: "Store Strategy",
    text: "Conversion-led ecommerce planning, offer architecture, catalog structure, and buying journey improvements."
  },
  {
    icon: ShoppingBag,
    title: "Website Builds",
    text: "Modern Shopify, WooCommerce, and custom storefront experiences designed for speed, trust, and checkout clarity."
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    text: "Campaign structure, creatives, landing pages, and tracking systems for profitable acquisition."
  },
  {
    icon: LineChart,
    title: "Growth Analytics",
    text: "Dashboards, funnel reviews, customer cohorts, and practical actions that turn data into revenue decisions."
  }
];

const metrics = [
  ["120+", "Store audits"],
  ["38%", "Avg. CRO lift"],
  ["4.9/5", "Client rating"],
  ["24 hr", "Response time"]
];

const stack = [
  "Shopify",
  "WooCommerce",
  "React",
  "Meta Ads",
  "Google Ads",
  "GA4",
  "Klaviyo",
  "Razorpay"
];

const process = [
  "Discover the brand, catalog, margins, and current funnel gaps.",
  "Design a revenue roadmap with quick wins and deeper growth systems.",
  "Build, launch, measure, and refine every important customer touchpoint."
];

const faqs = [
  {
    q: "Do you only consult or also build ecommerce websites?",
    a: "Both. I can advise your team, create the complete strategy, or build the store experience with a focused execution plan."
  },
  {
    q: "Which ecommerce platforms do you support?",
    a: "I work with Shopify, WooCommerce, custom React storefronts, and marketplaces where the brand needs cleaner systems."
  },
  {
    q: "Can you help with ads and conversion together?",
    a: "Yes. The strongest results usually come from improving traffic quality, landing pages, product pages, checkout, and retention together."
  }
];

function App() {
  const [formSent, setFormSent] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}aditya-sharma-logo.png`;

  function handleSubmit(event) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aditya Sharma home">
          <img src={logoSrc} alt="Aditya Sharma Ecommerce Consultant logo" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#contact">
          Book a Call
          <ArrowRight size={18} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            Ecommerce growth consulting
          </div>
          <h1>Build a sharper ecommerce business with Aditya Sharma.</h1>
          <p>
            I help growing brands launch better stores, improve conversion, and
            turn marketing spend into measurable revenue.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Start Your Growth Plan
              <ArrowRight size={19} />
            </a>
            <a className="secondary-button" href="#services">View Services</a>
          </div>
          <div className="trust-row">
            <span><CheckCircle2 size={18} /> Store audits</span>
            <span><CheckCircle2 size={18} /> CRO strategy</span>
            <span><CheckCircle2 size={18} /> Ads + analytics</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ecommerce growth dashboard preview">
          <div className="visual-top">
            <img src={logoSrc} alt="" />
            <div>
              <strong>Revenue Command Center</strong>
              <span>Live growth snapshot</span>
            </div>
          </div>
          <div className="visual-grid">
            <div className="metric-card large">
              <span>Monthly revenue</span>
              <strong>₹18.4L</strong>
              <small><TrendingUp size={14} /> +31% after funnel fixes</small>
            </div>
            <div className="metric-card">
              <span>Conversion</span>
              <strong>4.8%</strong>
            </div>
            <div className="metric-card">
              <span>ROAS</span>
              <strong>5.6x</strong>
            </div>
          </div>
          <div className="mini-chart">
            <i style={{ height: "35%" }} />
            <i style={{ height: "52%" }} />
            <i style={{ height: "44%" }} />
            <i style={{ height: "69%" }} />
            <i style={{ height: "61%" }} />
            <i style={{ height: "84%" }} />
            <i style={{ height: "76%" }} />
          </div>
          <div className="audit-panel">
            <BadgeCheck size={18} />
            <span>Checkout friction reduced with clearer offers, trust signals, and faster pages.</span>
          </div>
        </div>
      </section>

      <section className="logo-band" aria-label="Core ecommerce outcomes">
        {["Launch", "Optimize", "Advertise", "Retain", "Scale"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section intro-section">
        <div className="section-kicker">Our Vision</div>
        <div className="split">
          <h2>Practical ecommerce systems for brands that want profitable growth.</h2>
          <p>
            Your online store should do more than look good. It should guide the
            right customers, make buying easy, and give you clear numbers for
            every decision. That is the work: strategy, execution, and iteration.
          </p>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Our Services</div>
            <h2>Everything your ecommerce growth engine needs.</h2>
          </div>
          <a className="text-link" href="#contact">Discuss a project <ArrowRight size={17} /></a>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="icon-wrap"><Icon size={25} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section" id="work">
        <div className="proof-copy">
          <div className="section-kicker">We Win When You Win</div>
          <h2>Focused consulting for founders, D2C brands, and retail teams.</h2>
          <p>
            From the first audit to the post-launch growth loop, every step is
            shaped around revenue, retention, and operational simplicity.
          </p>
        </div>
        <div className="stats-grid">
          {metrics.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section case-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Featured Solutions</div>
            <h2>Growth work built around real commerce problems.</h2>
          </div>
        </div>
        <div className="case-grid">
          <article>
            <Target size={27} />
            <h3>Product Page Conversion</h3>
            <p>Sharper product messaging, comparison blocks, reviews, bundles, and shipping clarity.</p>
          </article>
          <article>
            <WalletCards size={27} />
            <h3>Checkout Confidence</h3>
            <p>Payment options, trust cues, abandoned cart recovery, and a cleaner path to purchase.</p>
          </article>
          <article>
            <BarChart3 size={27} />
            <h3>Marketing Measurement</h3>
            <p>GA4 events, campaign dashboards, customer value tracking, and weekly action reviews.</p>
          </article>
        </div>
      </section>

      <section className="section stack-section">
        <div>
          <div className="section-kicker">Tech Stack</div>
          <h2>Tools that keep your store fast, trackable, and ready to scale.</h2>
        </div>
        <div className="stack-list">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-kicker">How It Works</div>
        <h2>A calm process from messy store issues to clear growth actions.</h2>
        <div className="process-list">
          {process.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <div className="section-kicker">Let’s Get Started</div>
          <h2>Ready to make your ecommerce store work harder?</h2>
          <p>
            Share your store goals, and I’ll help you map the next practical
            moves for design, conversion, marketing, and analytics.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Website
            <input type="url" placeholder="https://yourstore.com" />
          </label>
          <label>
            What do you need?
            <textarea placeholder="Tell me about your ecommerce goal"></textarea>
          </label>
          <button type="submit">
            Send Enquiry
            <ArrowRight size={18} />
          </button>
          {formSent && (
            <p className="form-note">Thank you. Your ecommerce enquiry is ready for follow-up.</p>
          )}
        </form>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-kicker">Frequently Asked Questions</div>
        <h2>Quick answers before we talk.</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}<ChevronDown size={18} /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <img src={logoSrc} alt="Aditya Sharma Ecommerce Consultant logo" />
        <div>
          <strong>Aditya Sharma</strong>
          <span>Ecommerce Consultant</span>
        </div>
        <p>© 2026 Aditya Sharma. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
