const reels = [
  {
    profilePicture: "https://randomuser.me/api/portraits/women/11.jpg",
    username: "ava_travels",
    isFollow: false,
    isLiked: false,
    likeCounts: 9823,
    shareCounts: 210,
    commentsCounts: 134,
    description: "Waterfall serenity 🌿💧 #nature #relax",
    video: "https://www.pexels.com/download/video/34294407/"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "liam_city",
    isFollow: true,
    isLiked: true,
    likeCounts: 15000,
    shareCounts: 450,
    commentsCounts: 560,
    description: "City timelapse — lights and motion ✨🏙️",
    video :'https://www.pexels.com/download/video/29914900/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "sophia_coffee",
    isFollow: false,
    isLiked: false,
    likeCounts: 7320,
    shareCounts: 190,
    commentsCounts: 220,
    description: "Cozy coffee morning ☕ #coffeetime #vibes",
    video:'https://www.pexels.com/download/video/29985675/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/76.jpg",
    username: "noah_travel",
    isFollow: true,
    isLiked: false,
    likeCounts: 20450,
    shareCounts: 680,
    commentsCounts: 910,
    description: "Mountain road trip 🚗🏞️ #travel #adventure",
    video:'https://www.pexels.com/download/video/34737091/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/64.jpg",
    username: "mia_style",
    isFollow: false,
    isLiked: true,
    likeCounts: 14320,
    shareCounts: 330,
    commentsCounts: 400,
    description: "Street style walk 👗🔥 #fashion #ootd",
    video :'https://www.pexels.com/download/video/31680715/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/51.jpg",
    username: "ethan_fit",
    isFollow: true,
    isLiked: false,
    likeCounts: 8945,
    shareCounts: 175,
    commentsCounts: 260,
    description: "Healthy meal prepping 🥗 #food #fitness",
    video: 'https://www.pexels.com/download/video/34473102/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/29.jpg",
    username: "isabella_art",
    isFollow: false,
    isLiked: false,
    likeCounts: 11230,
    shareCounts: 295,
    commentsCounts: 345,
    description: "Art time 🎨 #artistlife #painting",
    video: 'https://www.pexels.com/download/video/34767729/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/90.jpg",
    username: "james_cooks",
    isFollow: true,
    isLiked: true,
    likeCounts: 17840,
    shareCounts: 410,
    commentsCounts: 520,
    description: "Kitchen cooking vibes 🍳 #foodie #chef",
    video:'https://www.pexels.com/download/video/34742807/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/18.jpg",
    username: "charlie_beach",
    isFollow: false,
    isLiked: false,
    likeCounts: 6705,
    shareCounts: 145,
    commentsCounts: 190,
    description: "Beach waves and chill 🌊 #beachlife",
    video : 'https://www.pexels.com/download/video/34801132/'
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/22.jpg",
    username: "ben_drive",
    isFollow: true,
    isLiked: false,
    likeCounts: 22050,
    shareCounts: 720,
    commentsCounts: 1020,
    description: "Night city drive 🌃🚘 #citylife",
    video:"https://www.pexels.com/download/video/30982132/"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
    username: "harper_workspace",
    isFollow: true,
    isLiked: true,
    likeCounts: 7600,
    shareCounts: 210,
    commentsCounts: 230,
    description: "Minimal desk setup ✨💻 #workspace #productivity",
    video : "https://www.pexels.com/download/video/30192800/"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/15.jpg",
    username: "henry_walks",
    isFollow: false,
    isLiked: true,
    likeCounts: 13100,
    shareCounts: 300,
    commentsCounts: 400,
    description: "Golden hour walk 🌇 #eveningwalk",
    video : "https://www.pexels.com/download/video/30025281/"
  }
];






const addData = () => {
    
let sum = ''
reels.forEach((elem ,idx) => (
    
    sum = sum + `<div id='${idx}' class="reels">
          <div class="top">
            <video
              loop
              muted
              autoplay
              src=${elem.video}></video>
          </div>
          <div class="bottom">
            <div class="inner">
              <div class="proflie">
                <img src =${elem.profilePicture} />
              </div>
              <span class="follow">
                <p>Follow</p>
              </span>
              <h2>${elem.username}</h2
            </div>
            <div class="decription">
              <p>
                ${elem.description}
              </p>
            </div>
          </div>
          <div class="sidebar">
            <div class="likes">
                <i class="ri-heart-3-line"></i>
                <span>587</span>
            </div>
            <div class="comments">
                <i class="ri-chat-1-line"></i>
                <span>4987</span>
            </div>
            <div class="shares">
                <i class="ri-share-forward-line"></i>
                <span>497</span>
            </div>
            <div class="menu">
                <i class="ri-more-2-fill"></i>
            </div>
          </div>
        </div>`
))

document.querySelector('.all-reels').innerHTML = sum;
}

addData()