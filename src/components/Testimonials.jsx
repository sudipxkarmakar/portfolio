import React from "react";
import PanelShell from "./PanelShell";

const testimonials = [
  {
    id: 1,
    quote: "Very dedicated and focused on problem-solving. Always delivers working solutions.",
    author: "Peer Review"
  },
  {
    id: 2,
    quote: "Strong understanding of practical development and system thinking.",
    author: "Academic Feedback"
  },
  {
    id: 3,
    quote: "Shows consistency and willingness to learn new technologies.",
    author: "Mentor"
  },
  {
    id: 4,
    quote: "Turns ideas into clear prototypes with calm, practical execution.",
    author: "Project Partner"
  }
];

const Testimonials = ({ activeSection }) => {
  return (
    <PanelShell id="testimonials" activeSection={activeSection} size="compact" className="testimonials-panel">
      <h2 className="section-title compact-title">TESTIMONIALS</h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-avatar" aria-hidden="true">{testimonial.author.slice(0, 1)}</div>
            <div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          </article>
        ))}
      </div>
    </PanelShell>
  );
};

export default Testimonials;
