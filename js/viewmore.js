// Set current year in footer
document.addEventListener("DOMContentLoaded", function() {
    // Update the year in the footer
    const yearSpan = document.getElementById("displayDateYear");
    if (yearSpan) {
      yearSpan.innerHTML = new Date().getFullYear();
    }
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add animation for service features
    const features = document.querySelectorAll('.service_features .feature');
    if (features.length) {
      features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
          feature.style.opacity = '1';
          feature.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
      });
    }
  });
  
  // Highlight active nav item
  function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.parentElement.classList.add('active');
      } else {
        link.parentElement.classList.remove('active');
      }
    });
  }
  
  // Call the function when page loads
  window.addEventListener('load', highlightCurrentPage);