const people = [
  {
    fullName: "Ava Thompson",
    profession: "Software Engineer",
    description: "Full-stack developer specializing in scalable web applications and cloud services.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    tags: ["technology", "engineering", "web", "fullstack"]
  },
  {
    fullName: "Liam Parker",
    profession: "Photographer",
    description: "Travel and lifestyle photographer capturing stories across the world.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    tags: ["photography", "travel", "art"]
  },
  {
    fullName: "Sophia Martinez",
    profession: "UI/UX Designer",
    description: "Designs modern, user-centered interfaces with a focus on accessibility.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    tags: ["design", "ui", "ux", "creative"]
  },
  {
    fullName: "Noah Anderson",
    profession: "Data Scientist",
    description: "Builds predictive models and works with large-scale datasets to solve real-world problems.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    tags: ["data", "machine learning", "analytics"]
  },
  {
    fullName: "Mia Patel",
    profession: "Digital Marketer",
    description: "Expert in SEO, brand strategy, and social media growth.",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    tags: ["marketing", "seo", "branding"]
  },
  {
    fullName: "Ethan Wilson",
    profession: "Fitness Trainer",
    description: "Helps individuals achieve fitness goals through personalized plans.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    tags: ["fitness", "health", "training"]
  },
  {
    fullName: "Isabella Brown",
    profession: "Content Writer",
    description: "Writes long-form content, blogs, and scripts for brands and agencies.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    tags: ["writing", "content", "blogs"]
  },
  {
    fullName: "James Carter",
    profession: "Chef",
    description: "Specializes in fusion cuisine blending flavors from different cultures.",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    tags: ["cooking", "chef", "food"]
  },
  {
    fullName: "Charlotte Evans",
    profession: "Animator",
    description: "Creates 2D and 3D animations for films and advertisements.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    tags: ["animation", "3d", "creative"]
  },
  {
    fullName: "Benjamin Lee",
    profession: "Entrepreneur",
    description: "Founder of a tech startup focused on AI automation tools.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    tags: ["business", "startup", "ai"]
  },
  {
    fullName: "Harper Collins",
    profession: "Psychologist",
    description: "Works with individuals to improve mental wellness and emotional growth.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    tags: ["psychology", "mind", "wellness"]
  },
  {
    fullName: "Lucas Wright",
    profession: "Architect",
    description: "Designs modern, sustainable buildings with a focus on minimalism.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    tags: ["architecture", "design", "sustainable"]
  },
  {
    fullName: "Evelyn Scott",
    profession: "Teacher",
    description: "Passionate educator focused on interactive and student-centered learning.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    tags: ["education", "teacher", "learning"]
  },
  {
    fullName: "Henry Adams",
    profession: "Musician",
    description: "Produces indie music and performs live across various cities.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    tags: ["music", "artist", "indie"]
  },
  {
    fullName: "Amelia Brooks",
    profession: "Doctor",
    description: "General physician dedicated to providing compassionate medical care.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    tags: ["healthcare", "doctor", "medicine"]
  }
];




let main = document.querySelector('main');


let sum = '';

people.forEach((elm) => {
    sum = sum + `<div class="card">
            <img src=${elm.image} alt="">
            <h1>${elm.fullName}</h1>
            <h2>${elm.profession}</h2>
            <p>${elm.description}</p>
        </div>`
    
})


main.innerHTML = sum