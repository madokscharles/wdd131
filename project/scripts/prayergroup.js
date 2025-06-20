const groupList = document.getElementById("group-list");

const prayerGroups = [
  {
    name: "Morning Glory",
    time: "6:00 AM Daily",
    description: "Start your day in the Spirit with a community of early risers."
  },
  {
    name: "Midweek Refresh",
    time: "Wednesdays at 7:00 PM",
    description: "Recharge your faith midweek with focused prayer."
  },
  {
    name: "Weekend Warriors",
    time: "Saturdays at 9:00 AM",
    description: "Lift your weekend with powerful intercession."
  }
];

// Build cards dynamically
prayerGroups.forEach(group => {
  const card = document.createElement("div");
  card.classList.add("group-card");

  card.innerHTML = `
    <h2>${group.name}</h2>
    <p><strong>Time:</strong> ${group.time}</p>
    <p>${group.description}</p>
    <button class="join-btn">Join Group</button>
  `;

  groupList.appendChild(card);
});

// Handle button clicks
groupList.addEventListener("click", function (e) {
  if (e.target.classList.contains("join-btn")) {
    const email = prompt("Please enter your email to receive an invite:");
    if (email && validateEmail(email)) {
      alert("An email invite has been sent. Please accept it. Thanks!");
    } else if (email !== null) {
      alert("Please enter a valid email address.");
    }
  }
});

// Simple email validation
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
