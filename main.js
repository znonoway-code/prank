const pranks = {
  all: [
    "Switch the sugar and salt containers (only if the person won't be cooking!).",
    "Put clear tape on the bottom of a computer mouse so it stops working.",
    "Replace a friend's phone contact name with 'Mom' and send a funny emoji.",
    "Cover a bar of soap with clear nail polish so it won’t make foam.",
    "Put a fake ice cube with a toy bug in someone’s drink."
  ],
  home: [
    "Add food colouring in the faucet (just a few drops).",
    "Set all the clocks ahead by one hour — reveal before it causes confusion!",
    "Replace framed photos with funny faces."
  ],
  school: [
    "Put a fake test paper titled 'Surprise Pop Quiz' with silly questions.",
    "Place a whoopee cushion on a friend’s chair (classic prank!)."
  ],
  online: [
    "Send a fake 'Achievement Unlocked' image saying 'You reached level: Homework Avoider'.",
    "Share a fake 'System Update' image with funny version notes."
  ],
  family: [
    "Wrap a small gift box inside 5 larger boxes with a note: 'April Fools!'",
    "Swap the cereal box with popcorn — reveal after a laugh!"
  ]
};

function generatePrank() {
  const category = document.getElementById("category").value;
  const list = pranks[category] || pranks.all;
  const prank = list[Math.floor(Math.random() * list.length)];
  const box = document.getElementById("prankBox");
  box.textContent = prank;
  box.style.background = randomColor();
}

function copyPrank() {
  const prank = document.getElementById("prankBox").textContent;
  navigator.clipboard.writeText(prank);
  alert("✅ Prank copied!");
}

function randomColor() {
  const colors = ["#f0f8ff", "#fff7e6", "#e6ffe6", "#ffe6f2", "#e6f0ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}