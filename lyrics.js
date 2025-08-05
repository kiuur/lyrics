const lyrics = [
  { 
    text: "Kau begitu indah...",
    typingDelay: 100, 
    lineDelay: 1000
  },
  { 
    text: "Di saat ku terjaga...",
    typingDelay: 80, 
    lineDelay: 1500
  },
  { 
    text: "Membuatku tak bisa...",
    typingDelay: 120,
    lineDelay: 1200
  },
  { text: "Berpaling darimu...",
   typingDelay: 60,
   lineDelay: 2000
  }
];

async function typeLine(line, typingDelay) {
  for (let char of line) {
    process.stdout.write(char);
    await new Promise(resolve => setTimeout(resolve, typingDelay));
  }
  process.stdout.write("\n");
}

async function showLyrics(lines) {
  for (let line of lines) {
    await typeLine(line.text, line.typingDelay);
    await new Promise(resolve => setTimeout(resolve, line.lineDelay));
  }
}

showLyrics(lyrics);
