   // Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Dark/Light Mode Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });

        // Pricing Toggle
        const monthlyToggle = document.getElementById('monthly-toggle');
        const yearlyToggle = document.getElementById('yearly-toggle');
        const planPrices = document.querySelectorAll('.plan-price');

        yearlyToggle.addEventListener('click', () => {
            yearlyToggle.classList.add('active');
            monthlyToggle.classList.remove('active');
            planPrices.forEach(price => {
                const yearlyPrice = price.getAttribute('data-yearly');
                price.textContent = yearlyPrice + ' /year';
            });
        });

        monthlyToggle.addEventListener('click', () => {
            monthlyToggle.classList.add('active');
            yearlyToggle.classList.remove('active');
            planPrices.forEach(price => {
                const monthlyPrice = price.getAttribute('data-monthly');
                price.textContent = monthlyPrice + ' /month';
            });
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll Animation
        const fadeElements = document.querySelectorAll('.fade-in');

        const appearOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -100px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            });
        }, appearOptions);

        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                header.style.background = 'var(--light)';
            } else {
                header.style.boxShadow = 'none';
                header.style.background = 'var(--light)';
            }
        });