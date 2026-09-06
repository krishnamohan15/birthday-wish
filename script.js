// Step Navigation
function nextStep(stepNum) {
  document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
  const targetStep = document.getElementById(`step-${stepNum}`);
  if (targetStep) {
    targetStep.classList.add('active');
  }
}

// Playful "No" Button Dodge
function moveNoButton() {
  const btn = document.getElementById('no-btn');
  const maxX = window.innerWidth - btn.offsetWidth - 40;
  const maxY = window.innerHeight - btn.offsetHeight - 40;
  
  const randomX = Math.floor(Math.random() * maxX) - (window.innerWidth / 2 - btn.offsetWidth);
  const randomY = Math.floor(Math.random() * maxY) - (window.innerHeight / 2 - btn.offsetHeight);
  
  btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Balloon Popping Game
let poppedCount = 0;
function popBalloon(id, message) {
  const balloon = document.getElementById(id);
  if (!balloon.classList.contains('popped')) {
    balloon.classList.add('popped');
    balloon.style.backgroundColor = 'transparent';
    balloon.style.border = '2px dashed #f472b6';
    balloon.innerHTML = `<span class="text-pink-600 font-bold">${message}</span>`;
    poppedCount++;

    if (poppedCount === 4) {
      document.getElementById('step-2-next').classList.remove('hidden');
    }
  }
}

// Candle Blow Interaction
function blowCandle() {
  const flame = document.getElementById('flame');
  const candleText = document.getElementById('candle-text');
  const nextBtn = document.getElementById('step-3-next');

  if (flame) flame.style.display = 'none';
  if (candleText) candleText.innerText = 'Make a wish! ✨';
  if (nextBtn) nextBtn.classList.remove('hidden');

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  }
}

// Swipeable Polaroid Photo Deck
const cards = ['card-1', 'card-2', 'card-3'];
function cycleCard() {
  const topCardId = cards.pop();
  const topCard = document.getElementById(topCardId);

  if (!topCard) return;

  topCard.style.transform = 'translateY(-150%) rotate(20deg)';
  topCard.style.opacity = '0';

  setTimeout(() => {
    topCard.style.transform = 'none';
    topCard.style.opacity = '1';
    cards.unshift(topCardId);
    cards.forEach((id, index) => {
      const cardElem = document.getElementById(id);
      if (cardElem) cardElem.style.zIndex = index;
    });
  }, 400);
}

// Envelope Opening
function openLetter() {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  const nextBtn = document.getElementById('step-6-next');

  if (envelope) envelope.classList.add('hidden');
  if (letter) letter.classList.remove('hidden');
  if (nextBtn) nextBtn.classList.remove('hidden');
}

// Final Gift Box & Confetti
function openGift() {
  const giftBox = document.getElementById('gift-box');
  const finalScreen = document.getElementById('final-screen');

  if (giftBox) giftBox.classList.add('hidden');
  if (finalScreen) {
    finalScreen.classList.remove('hidden');
    finalScreen.classList.add('flex');
  }

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}