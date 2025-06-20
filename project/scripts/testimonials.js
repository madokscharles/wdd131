document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      image: "images/testimonial1.jpg",
      quote: "\u201cJoining Stay Prayed has been a blessing in my life. I\u2019ve found strength and support every week.\u201d",
      author: "\u2014 Grace M., UK"
    },
    {
      image: "images/testimonial2.jpg",
      quote: "\u201cThe prayer groups are filled with warmth and purpose. I always leave encouraged.\u201d",
      author: "\u2014 Samuel T., Nigeria"
    },
    {
      image: "images/testimonial3.jpg",
      quote: "\u201cIt\u2019s like having a global prayer family. Thank you Stay Prayed!\u201d",
      author: "\u2014 Aisha R., Malaysia"
    }
  ];

  let index = 0;
  const slide = document.querySelector(".testimonial-slide");

  function updateTestimonial() {
    const testimonial = testimonials[index];
    slide.innerHTML = `
      <img src="${testimonial.image}" alt="Testimonial Image">
      <div class="testimonial-text">
        <p class="quote">${testimonial.quote}</p>
        <p class="author">${testimonial.author}</p>
      </div>
    `;
    index = (index + 1) % testimonials.length;
  }

  setInterval(updateTestimonial, 5000);
});
