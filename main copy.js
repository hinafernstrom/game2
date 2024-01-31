function getRandomEmoji() {
  const emojis = ['🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍞','🥐','🥖','🫓','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫','🍝'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function repeatEmojis() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const emojiSize = 15;
  const spacing = -4;

// everything below is coded by chat gpt
  const numEmojisX = Math.ceil(screenWidth / (emojiSize + spacing));
  const numEmojisY = Math.ceil(screenHeight / (emojiSize + spacing));

  const emojis = [];

  for (let i = 0; i < numEmojisY; i++) {
    emojis[i] = [];
    for (let j = 0; j < numEmojisX; j++) {
      const emoji = getRandomEmoji();
      const emojiElement = document.createElement('div');
      emojiElement.innerText = emoji;
      emojiElement.style.position = 'absolute';
      emojiElement.style.left = `${j * (emojiSize + spacing)}px`;
      emojiElement.style.top = `${i * (emojiSize + spacing)}px`;
      emojiElement.style.fontSize = `${emojiSize}px`;

      // CHATGPT coded this. Add event listener to make the hovered emoji and its adjacent emojis disappear //
      emojiElement.addEventListener('mouseover', () => {
        for (let x = Math.max(0, i - 1); x <= Math.min(numEmojisY - 1, i + 1); x++) {
          for (let y = Math.max(0, j - 1); y <= Math.min(numEmojisX - 1, j + 1); y++) {
            emojis[x][y].style.display = 'none';
          }
        }
      });

      emojis[i][j] = emojiElement;
      document.body.appendChild(emojiElement);
    }
  }
}

document.addEventListener('DOMContentLoaded', repeatEmojis);
