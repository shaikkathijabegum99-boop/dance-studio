
const serviceData = {
  hiphop: {
    badge: "Street Style Program",
    title: "Hip Hop Classes",
    description:
      "Master grooves, freestyle confidence, musicality, and choreography in our high-energy Hip Hop program designed for all skill levels.",
    image: "../images/service-hiphop.jpg",
    level: "Beginner to Advanced",
    duration: "60 Minutes",
    batch: "Group / Performance",
    schedule: "Mon, Wed, Fri",
    learn: [
      "Hip hop grooves, footwork, and rhythm fundamentals",
      "Musicality and movement coordination",
      "Freestyle confidence and choreography retention",
      "Stage presence and team synchronization"
    ],
    forWho: [
      "Beginners who want an energetic and fun dance style",
      "Teens and adults interested in performance routines",
      "Students wanting to improve rhythm and confidence"
    ],
    benefits: [
      "Builds confidence and expressive movement",
      "Improves stamina, rhythm, and coordination",
      "Perfect for stage shows and social performances"
    ]
  },

  contemporary: {
    badge: "Expression & Technique",
    title: "Contemporary Dance",
    description:
      "Develop graceful movement, flexibility, emotional expression, and strong technical foundations through contemporary dance training.",
    image: "../images/service-contemporary.jpg",
    level: "All Levels",
    duration: "75 Minutes",
    batch: "Group",
    schedule: "Tue, Thu, Sat",
    learn: [
      "Body control, floor work, and fluid transitions",
      "Expressive movement and storytelling through dance",
      "Flexibility, balance, and alignment techniques",
      "Creative choreography interpretation"
    ],
    forWho: [
      "Students who love artistic and expressive movement",
      "Dancers wanting fluidity and emotional performance",
      "Performers building graceful stage confidence"
    ],
    benefits: [
      "Improves flexibility and posture",
      "Enhances emotional expression through movement",
      "Strengthens artistic confidence and performance depth"
    ]
  },

  kids: {
    badge: "Fun Learning Program",
    title: "Kids Dance Programs",
    description:
      "A structured, fun-filled dance environment designed to help children build rhythm, confidence, coordination, and creativity.",
    image: "../images/service-kids.jpg",
    level: "Beginner",
    duration: "45 Minutes",
    batch: "Age-Based Group",
    schedule: "Weekend + Evening",
    learn: [
      "Basic rhythm, movement, and body coordination",
      "Simple choreography and musical timing",
      "Confidence-building through performance activities",
      "Fun routines that improve memory and expression"
    ],
    forWho: [
      "Children starting their first dance journey",
      "Parents looking for active creative classes",
      "Kids who enjoy music and movement"
    ],
    benefits: [
      "Boosts confidence and discipline",
      "Improves coordination and social interaction",
      "Creates a positive and energetic learning experience"
    ]
  },

  private: {
    badge: "Personal Coaching",
    title: "Private Coaching",
    description:
      "One-on-one dance training tailored to your personal goals, schedule, preferred style, and learning pace.",
    image: "../images/service-private.jpg",
    level: "All Levels",
    duration: "60 Minutes",
    batch: "1-on-1",
    schedule: "Flexible",
    learn: [
      "Customized technique training",
      "Focused choreography or freestyle development",
      "Goal-based improvement and performance preparation",
      "Personalized corrections and coaching support"
    ],
    forWho: [
      "Students who want faster personal growth",
      "Dancers preparing for events or auditions",
      "Anyone who prefers individual attention"
    ],
    benefits: [
      "Faster improvement through focused learning",
      "Flexible timing and personalized structure",
      "Perfect for event, competition, or skill preparation"
    ]
  },

  wedding: {
    badge: "Special Event Choreography",
    title: "Wedding Choreography",
    description:
      "Make your big day unforgettable with custom choreography for couples, families, and group wedding performances.",
    image: "../images/service-wedding.jpg",
    level: "Beginner Friendly",
    duration: "60 Minutes",
    batch: "Private / Group",
    schedule: "Flexible",
    learn: [
      "Custom choreography based on your songs",
      "Easy-to-follow routines for all skill levels",
      "Stage confidence and synchronized performance",
      "Entry, transitions, and performance flow"
    ],
    forWho: [
      "Couples preparing for first dance",
      "Families planning sangeet or reception performances",
      "Friends creating memorable celebration routines"
    ],
    benefits: [
      "Stress-free choreography planning",
      "Fun and memorable event preparation",
      "Designed to suit your comfort and style"
    ]
  },

  performance: {
    badge: "Advanced Stage Training",
    title: "Performance Training",
    description:
      "Train for competitions, stage showcases, and live events with advanced choreography and presentation coaching.",
    image: "../images/service-performance.jpg",
    level: "Intermediate to Advanced",
    duration: "90 Minutes",
    batch: "Team / Performance",
    schedule: "Custom Schedule",
    learn: [
      "Advanced choreography and performance execution",
      "Team synchronization and stage formations",
      "Facial expression, projection, and presentation",
      "Competition and showcase readiness"
    ],
    forWho: [
      "Dancers preparing for stage shows or competitions",
      "Students wanting advanced performance experience",
      "Teams building strong routine execution"
    ],
    benefits: [
      "Builds stage confidence and discipline",
      "Improves precision, teamwork, and delivery",
      "Ideal for competitions and public performances"
    ]
  }
};


function getServiceFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("service") || "hiphop";
}


function renderServiceDetails() {
  const serviceKey = getServiceFromURL();
  const service = serviceData[serviceKey] || serviceData.hiphop;

  document.getElementById("service-badge").textContent = service.badge;
  document.getElementById("service-title").textContent = service.title;
  document.getElementById("service-description").textContent = service.description;
  document.getElementById("service-image").src = service.image;
  document.getElementById("service-image").alt = service.title;

  document.getElementById("service-level").textContent = service.level;
  document.getElementById("service-duration").textContent = service.duration;
  document.getElementById("service-batch").textContent = service.batch;
  document.getElementById("service-schedule").textContent = service.schedule;

  renderList("service-learn-list", service.learn);
  renderList("service-for-list", service.forWho);
  renderList("service-benefits-list", service.benefits);
}

function renderList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}


document.addEventListener("DOMContentLoaded", renderServiceDetails);




document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((faq) => faq.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});