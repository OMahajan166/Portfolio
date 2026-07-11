// =====================================================
// PORTFOLIO V2 - SCRIPT.JS (PART 1)
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Loader
    // ==========================================

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {

                loader.classList.add("loader-hidden");

                setTimeout(() => {

                    loader.remove();

                }, 600);

            }

        }, 1200);

    });

    // ==========================================
    // Navbar
    // ==========================================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("navbar-scroll");

        } else {

            navbar.classList.remove("navbar-scroll");

        }

    });

    // ==========================================
    // Mobile Menu
    // ==========================================

    const menuToggle = document.getElementById("menuToggle");

    const navLinks = document.getElementById("navLinks");

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuToggle.classList.toggle("open");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("open");

        });

    });

    // ==========================================
    // Theme Toggle
    // ==========================================

    const themeBtn = document.getElementById("themeBtn");

    const body = document.body;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light-mode");

        if (themeBtn) {

            themeBtn.innerHTML = '<i class="ri-sun-fill"></i>';

        }

    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            body.classList.toggle("light-mode");

            if (body.classList.contains("light-mode")) {

                localStorage.setItem("theme", "light");

                themeBtn.innerHTML = '<i class="ri-sun-fill"></i>';

            }

            else {

                localStorage.setItem("theme", "dark");

                themeBtn.innerHTML = '<i class="ri-moon-fill"></i>';

            }

        });

    }

    // ==========================================
    // Scroll Progress Bar
    // ==========================================

    const progressBar = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

        const totalHeight =

            document.documentElement.scrollHeight -

            document.documentElement.clientHeight;

        const progress =

            (window.scrollY / totalHeight) * 100;

        if (progressBar) {

            progressBar.style.width = progress + "%";

        }

    });

    // ==========================================
    // Back To Top Button
    // ==========================================

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show-top");

        }

        else {

            topBtn.classList.remove("show-top");

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    // ==========================================
    // Active Navigation
    // ==========================================

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =

                section.offsetTop - 150;

            const sectionHeight =

                section.clientHeight;

            if (

                pageYOffset >= sectionTop &&

                pageYOffset < sectionTop + sectionHeight

            ) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active-link");

            if (

                link.getAttribute("href") ===

                "#" + current

            ) {

                link.classList.add("active-link");

            }

        });

    });

});




// =====================================================
// PORTFOLIO V2 - SCRIPT.JS (PART 2)
// Typewriter + Counters + Skill Bars + Scroll Effects
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Typewriter Effect
    // ==========================================

    const typingElement = document.getElementById("typing");

    const roles = [

        "Full Stack Java Developer",
        "Spring Boot Developer",
        "Backend Developer",
        "Problem Solver",
        "Clean Code Advocate"

    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(0, charIndex++);

            if (charIndex > currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;
            }

        }

        else {

            typingElement.textContent =
                currentRole.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {

                    roleIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 45 : 100);

    }

    typeEffect();

    // ==========================================
    // Animated Counters
    // ==========================================

    const counters = document.querySelectorAll(".counter");

    let counterStarted = false;

    function animateCounters() {

        if (counterStarted) return;

        const stats = document.querySelector(".stats");

        if (!stats) return;

        const trigger = stats.getBoundingClientRect().top;

        if (trigger > window.innerHeight - 150) return;

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            const isDecimal = target % 1 !== 0;

            let value = 0;

            const step = target / 80;

            const timer = setInterval(() => {

                value += step;

                if (value >= target) {

                    value = target;

                    clearInterval(timer);

                }

                counter.textContent =

                    isDecimal

                        ? value.toFixed(2)

                        : Math.floor(value);

            }, 20);

        });

    }

    window.addEventListener("scroll", animateCounters);

    animateCounters();

    // ==========================================
    // Skill Progress Bars
    // ==========================================

    let skillAnimated = false;

    function animateSkills() {

        if (skillAnimated) return;

        const skills = document.getElementById("skills");

        if (!skills) return;

        const trigger = skills.getBoundingClientRect().top;

        if (trigger > window.innerHeight - 150) return;

        skillAnimated = true;

        const widths = {

            java: "95%",
            spring: "90%",
            hibernate: "88%",
            rest: "90%",

            html: "95%",
            css: "90%",
            js: "85%",

            python: "75%",
            cpp: "70%"

        };

        Object.keys(widths).forEach(name => {

            const bar = document.querySelector("." + name);

            if (bar) {

                bar.style.width = widths[name];

            }

        });

    }

    window.addEventListener("scroll", animateSkills);

    animateSkills();

    // ==========================================
    // Fade Up Animation
    // ==========================================

    const revealElements = document.querySelectorAll(

        ".project-card, .skill-card, .stat-card, .timeline-item, .achievement-card, .education-card"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach(item => {

        observer.observe(item);

    });

    // ==========================================
    // Hero Floating Animation
    // ==========================================

    const imageCard = document.querySelector(".image-card");

    if (imageCard) {

        let degree = 0;

        setInterval(() => {

            degree += 0.4;

            imageCard.style.transform =

                `translateY(${Math.sin(degree / 10) * 8}px)`;

        }, 30);

    }

});




// =====================================================
// PORTFOLIO V2 - SCRIPT.JS (PART 3)
// Contact Form + Cursor + Particles + Final
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Contact Form
    // ==========================================

    const contactForm = document.getElementById("contactForm");

    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const submitBtn = contactForm.querySelector("button");

            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {

                showToast("Please fill all fields.", "error");

                return;

            }

            submitBtn.disabled = true;

            submitBtn.innerHTML =
                '<i class="ri-loader-4-line ri-spin"></i> Sending...';

            try {

                const response = await fetch("/api/contact", {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify({

                        name,

                        email,

                        message

                    })

                });

                const data = await response.json();

                if (data.success) {

                    contactForm.reset();

                    formMessage.className = "form-message success";

                    formMessage.textContent = "✓ Message Sent Successfully";

                    showToast("Message Sent Successfully", "success");

                }

                else {

                    formMessage.className = "form-message error";

                    formMessage.textContent = data.message;

                    showToast(data.message, "error");

                }

            }

            catch (e) {

                formMessage.className = "form-message error";

                formMessage.textContent =
                    "Unable to connect to server.";

                showToast("Server Connection Failed", "error");

            }

            finally {

                submitBtn.disabled = false;

                submitBtn.innerHTML =
                    '<i class="ri-send-plane-fill"></i> Send Message';

            }

        });

    }

    // ==========================================
    // Toast Notification
    // ==========================================

    function showToast(message, type) {

        const oldToast = document.querySelector(".toast");

        if (oldToast) oldToast.remove();

        const toast = document.createElement("div");

        toast.className = "toast " + type;

        toast.innerHTML = message;

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.classList.add("show");

        }, 100);

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => {

                toast.remove();

            }, 300);

        }, 3000);

    }

    // ==========================================
    // Smooth Anchor Scroll
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (href === "#") return;

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

    // ==========================================
    // Mouse Glow Effect
    // ==========================================

    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    // ==========================================
    // Floating Background Animation
    // ==========================================

    document.querySelectorAll(".hero-bg span").forEach((blob, index) => {

        let angle = index * 120;

        setInterval(() => {

            angle += 0.2;

            blob.style.transform =

                `translate(${Math.sin(angle/20)*25}px,
                ${Math.cos(angle/20)*25}px)`;

        }, 40);

    });

    // ==========================================
    // Tilt Effect
    // ==========================================

    document.querySelectorAll(".project-card").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 10;

            const rotateX = ((y / rect.height) - 0.5) * -10;

            card.style.transform =

                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =

                "perspective(900px) rotateX(0) rotateY(0)";

        });

    });

    // ==========================================
    // Button Ripple Effect
    // ==========================================

    document.querySelectorAll(".btn,.project-btn,.submit-btn").forEach(btn => {

        btn.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            ripple.style.left =

                e.offsetX + "px";

            ripple.style.top =

                e.offsetY + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    // ==========================================
    // Console Message
    // ==========================================

    console.clear();

    console.log("%cWelcome Recruiter 👋",

        "font-size:28px;color:#6c63ff;font-weight:bold");

    console.log("%cPortfolio Developed by Om Mahajan",

        "font-size:16px;color:#00d4aa");

    console.log("%cGitHub : https://github.com/OMahajan166",

        "font-size:15px;color:white");

    console.log("%cLinkedIn : https://linkedin.com/in/om-mahajan-216b2925a",

        "font-size:15px;color:white");

});