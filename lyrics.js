
console.clear()
console.log("\nbest friend - rex orange county")
console.log("telegram: @sh3nnmine\n\n")

const lyrics = [
  { 
    text: "i say that i'm happy",
    typingDelay: 115, 
    lineDelay: 800,
    typing: true
  },
  { 
    text: "but no, no, no, no",
    typingDelay: 530, 
    lineDelay: 1090,
    typing: false
  },
  { 
    text: "no, no, no",
    typingDelay: 380,
    lineDelay: 1170,
    typing: false
  },
  { 
    text: "oh, i still wanna be your favorite boy",
    typingDelay: 115,
    lineDelay: 1090,
    typing: true
  },
  { 
    text: "i wanna be the one that makes your day",
    typingDelay: 87,
    lineDelay: 590,
    typing: true
  },
  { 
    text: "the one you think about as you lie awake",
    typingDelay: 89,
    lineDelay: 596,
    typing: true
  },
  { 
    text: "and i can't wait to be your number",
    typingDelay: 80,
    lineDelay: 658,
    typing: true
  },
  { 
    text: "your number one",
    typingDelay: 83,
    lineDelay: 496,
    typing: true
  },
  { 
    text: "i'll, i be your biggest fan and you'll be mine",
    typingDelay: 58,
    lineDelay: 500,
    typing: true
  },
  { 
    text: "but, i still wanna break your heart and make you cry",
    typingDelay: 70,
    lineDelay: 9000,
    typing: true
  }
];

async function typeLine(line, delay, typing) {
  if (typing) {
    for (let char of line) {
      process.stdout.write(char);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    process.stdout.write("\n");
  } else {
    const words = line.split(" ");
    for (let word of words) {
      process.stdout.write(word + " ");
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    process.stdout.write("\n");
  }
}

async function showLyrics(lines) {
  for (let line of lines) {
    await typeLine(line.text, line.typingDelay, line.typing);
    await new Promise(resolve => setTimeout(resolve, line.lineDelay));
  }
}

showLyrics(lyrics);
