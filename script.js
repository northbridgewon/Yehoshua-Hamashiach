document.addEventListener('DOMContentLoaded', () => {
  // Create additional energy particles dynamically
  const svg = document.querySelector('.sacred-geometry');
  
  for (let i = 0; i < 12; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('class', 'energy-particle');
    circle.setAttribute('r', '2');
    circle.setAttribute('fill', '#fff');
    
    const animate = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
    animate.setAttribute('dur', `${8 + Math.random() * 4}s`);
    animate.setAttribute('repeatCount', 'indefinite');
    animate.setAttribute('path', `M250,250 A${100 + i * 15},${100 + i * 15} 0 1,1 250,249 z`);
    
    circle.appendChild(animate);
    svg.appendChild(circle);
  }
  
  // Add mousemove interaction
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
    
    // Subtle rotation of sacred geometry based on mouse position
    const geometry = document.querySelector('.sacred-geometry');
    geometry.style.transform = `rotate(${(x - 0.5) * 10}deg) scale(${0.9 + y * 0.2})`;
  });
});