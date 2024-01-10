export default function observer(
  elements,
  addClass,
  threshold = 0.5,
  margin = "0px 0px 0px 0px",
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(addClass);
          observer.unobserve(entry.target);
          
        }
      });
    },
    { threshold: threshold, rootMargin: margin },
  );
  elements.forEach((item) => {
    observer.observe(item);
  });
}
