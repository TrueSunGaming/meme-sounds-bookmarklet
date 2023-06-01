function playSound(url, vol) {
  const a = new Audio(url);
  a.volume = vol;
  a.play();
}

function addSound(url, vol, interval) {
  setInterval(()=>playSound(url, vol), interval);
  playSound(url, vol);
}

addSound("https://us-tuna-sounds-files.voicemod.net/ade71f0d-a41b-4e3a-8097-9f1cc585745c-1646035604239.mp3", 0.1, 1000);
addSound("https://us-tuna-sounds-files.voicemod.net/a4da8ed5-a7c4-4d96-a628-cc5f12636155-1660975843929.mp3", 0.1, 1000);
addSound("https://us-tuna-sounds-files.voicemod.net/6725f84b-75bf-4be6-98a8-ff7e5cfc8d85-1668003243271.mp3", 0.1, 1000);
addSound("https://us-tuna-sounds-files.voicemod.net/65f1dd94-c0c5-4a40-964d-280cff8d9e96.mp3", 0.1, 1000);
addSound("https://us-tuna-sounds-files.voicemod.net/89cdcbb3-0fdf-4fb4-8a45-38d87d841f08-1645089782387.mp3", 0.1, 1000);
addSound("https://us-tuna-sounds-files.voicemod.net/89cdcbb3-0fdf-4fb4-8a45-38d87d841f08-1645089782387.mp3", 0.1, 1000);
addSound("https://www.dropbox.com/s/dl/qc8d7p9wva53kky/Tobu%20-%20Candyland.mp3", 1, 2e5);
