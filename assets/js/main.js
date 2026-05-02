document.addEventListener('DOMContentLoaded', function() {
      // Sidebar toggle functionality (if needed)
                              const sidebar = document.querySelector('.sidebar');
      const toggleBtn = document.querySelector('.toggle-btn');

                              if (toggleBtn) {
                                        toggleBtn.addEventListener('click', () => {
                                                      sidebar.classList.toggle('collapsed');
                                        });
                              }

                              // Add active class to current nav item
                              const navLinks = document.querySelectorAll('.nav-links a');
      const currentPath = window.location.pathname;

                              navLinks.forEach(link => {
                                        if (link.getAttribute('href') === currentPath || 
                                                        (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
                                                      link.parentElement.classList.add('active');
                                        }
                              });

                              // Dynamic data simulation (for demo effect)
                              console.log('Noor ERP Demo Loaded');
});
