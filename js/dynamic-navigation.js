
    // // Function to load content dynamically
    function loadContent(page) {
        const mainContent = document.getElementById('mainContent');
      
        const contentMap = {
          dashboard: async () => {
            try {
              const response = await fetch('/html-pages/dashboard.html');
              mainContent.innerHTML = await response.text();
            } catch (error) {
              mainContent.innerHTML = '<p>Error loading dashboard content.</p>';
            }
          },
          users: async () => {
            try {
              const response = await fetch('/html-pages/users.html');
              mainContent.innerHTML = await response.text();
            } catch (error) {
              mainContent.innerHTML = '<p>Error loading dashboard content.</p>';
            }
          },
          products: async () => {
            try {
              const response = await fetch('/html-pages/products.html');
              mainContent.innerHTML = await response.text();
            } catch (error) {
              mainContent.innerHTML = '<p>Error loading dashboard content.</p>';
            }
          },
          categories: () => {
            mainContent.innerHTML = '<h3>Categories Management</h3><p>Manage your categories here.</p>';
          },
          orders: () => {
            mainContent.innerHTML = '<h3>Order Management</h3><p>Track and manage customer orders here.</p>';
          },
          analytics: async () => {
            try {
              const response = await fetch('/html-pages/analytics.html');
              mainContent.innerHTML = await response.text();
            } catch (error) {
              mainContent.innerHTML = '<p>Error loading dashboard content.</p>';
            }
          },
          settings: () => {
            mainContent.innerHTML = '<h3>Settings</h3><p>Configure your preferences here.</p>';
          },
        };
      
        // Invoke the appropriate function or show an error
        (contentMap[page] || (() => {
          mainContent.innerHTML = '<p> 404 Page not found.</p>';
        }))();
      }
      