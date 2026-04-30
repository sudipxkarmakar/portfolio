import React from "react";

// Testimonials Component
// Displays feedback or generic testimonials in a grid
const Testimonials = () => {
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
    }
  ];

  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">TESTIMONIALS</h2>
      
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-text">{testimonial.quote}</p>
            <p className="testimonial-author">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
