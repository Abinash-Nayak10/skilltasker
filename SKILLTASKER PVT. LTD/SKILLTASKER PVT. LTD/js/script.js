// Index

 // Intersection observer to reveal about image once in viewport
  document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".img-cover2");
    if (img) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.classList.add("show-img");
            observer.unobserve(img);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(img);
    }
  });

  // Ensure the marquee-track restarts when window resized (keeps smoothness)
  (function adjustMarquee(){
    const track = document.querySelector('.marquee-track');
    if(!track) return;
    // duplicate if content width smaller than container (safety)
    const container = track.parentElement;
    function ensureDuplicate() {
      if(track.scrollWidth < container.clientWidth * 2) {
        // already duplicated in markup; nothing required
      }
    }
    window.addEventListener('load', ensureDuplicate);
    window.addEventListener('resize', ensureDuplicate);
  })();

  document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-left, .slide-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // remove on scroll out to repeat animation
      }
    });
  }, { threshold: 0.2 });

  slideElements.forEach(el => observer.observe(el));
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const topbar = document.querySelector('.topbar');

  // When you scroll past the topbar height
  if (window.scrollY > topbar.offsetHeight) {
    navbar.classList.add('fixed-top-scroll');
  } else {
    navbar.classList.remove('fixed-top-scroll');
  }
});


// Index

// Aboutus
 AOS.init({ once: true, offset: 100 });

  // Counter animation
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    const startCounters = () => {
      counters.forEach(counter => {
        counter.innerText = "0+";
        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const current = +counter.innerText.replace("+", "");
          const increment = Math.ceil(target / 200);
          if (current < target) {
            counter.innerText = current + increment + "+";
            setTimeout(updateCounter, 40);
          } else {
            counter.innerText = target + "+";
          }
        };
        updateCounter();
      });
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          startCounters();
          started = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    observer.observe(document.querySelector(".counter-section"));
  });

  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".slide-left, .slide-right");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // stop observing once animation triggers
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

  // Aboutus

// Career
    function showPopup() {
      document.getElementById("popup").style.display = "flex";
    }

    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }

    // Close popup when clicking outside
    document.getElementById("popup").addEventListener("click", function(e) {
      if (e.target === this) closePopup();
    });
// Career


  // Form Submit Handler
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // prevent real submit
    const successMsg = document.getElementById("successMsg");

    // Show message
    successMsg.classList.remove("d-none");

    // Clear form
    this.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      successMsg.classList.add("d-none");
    }, 5000);
  });

  // Search functionality (checks both title and description)

  // Training

 document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const courses = document.querySelectorAll("#courseList .course-card-wrapper");
  const icons = document.querySelectorAll("#animatedIcons .icon");

  // Show all icons function
  function showAllIcons() {
    icons.forEach(icon => {
      icon.classList.add("visible");  // Animate in
    });
  }

  // Filter courses + always show icons
  searchBox.addEventListener("keyup", () => {
    const searchTerm = searchBox.value.toLowerCase();

    courses.forEach(course => {
      const title = course.querySelector("h5").innerText.toLowerCase();
      const description = course.querySelector("p").innerText.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });

    // ✅ Always show all icons when search is used
    if (searchTerm.trim() !== "") {
      showAllIcons();
    } else {
      // Reset: hide icons until scroll animation
      icons.forEach(icon => icon.classList.remove("visible"));
    }
  });

  // Reveal on scroll animation
  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    courses.forEach(course => {
      const position = course.getBoundingClientRect().top;
      if (position < windowHeight - 50) {
        course.classList.add("visible");
      }
    });

    const iconSection = document.getElementById("animatedIcons").getBoundingClientRect().top;
    if (iconSection < windowHeight - 50) {
      showAllIcons();
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial call
});
// Training
    

    function sendToWhatsApp(e) {
    e.preventDefault();

    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "917008482165"; // SkillTasker WhatsApp number (without +)

    let whatsappLink =
      "https://wa.me/" + whatsappNumber + "?text=" +
      encodeURIComponent(
        "New Contact Request\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Message: " + message
      );

    window.open(whatsappLink, "_blank");
  }

  document.getElementById("phone").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
  });
    