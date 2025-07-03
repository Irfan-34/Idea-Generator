// List of random creative ideas
const ideas = [
  "A smart mirror that gives you compliments.",
  "An app that turns your grocery list into a meal plan.",
  "A website that generates startup names with puns.",
  "A daily email that explains one piece of tech in simple terms.",
  "A browser extension that reminds you to blink every 5 minutes.",
  "A virtual reality tour of famous historical events.",
  "A podcast that interviews people about their most embarrassing moments.",
];

// Get elements from the HTML
const ideaBox = document.getElementById("ideaBox");
const generateBtn = document.getElementById("generateBtn");

// When the button is clicked, show a random idea
generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  const idea = ideas[randomIndex];
  ideaBox.textContent = idea;
  // Flash animation
ideaBox.classList.remove("idea-flash");  // Remove if it's already there
void ideaBox.offsetWidth;                // Force reflow (reset the animation)
ideaBox.classList.add("idea-flash");     // Add the animation

});
