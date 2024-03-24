function enter_website() {
  document.getElementById(`landing`).classList.add(`hidden`);
  document.getElementById(`content`).classList.remove(`hidden`);
  document.getElementById(`music-control`).classList.remove(`hidden`);

  document.getElementById(`video-control`).play();
  document.getElementById(`video-control`).volume = .5;
  type();
}

function open_servers() {
  window.open("");
}

function open_steam() {
  window.open("https://steamcommunity.com/groups/esmapa");
}

function open_server() {
  window.open("https://discord.gg/sina");
}

function open_api() {
  window.open("https://api.sinister.codes");
}

function open_status() {
  window.open("https://status.sinister.codes/status/prod");
}

function open_bans() {
  window.open("https://bans.sinister.codes");
}

function copy_discord() {
  const element = document.createElement('textarea');
  element.value = "sinnayuh";
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);

  const discord = document.getElementById("discord");
  discord.innerText = "[copied]";
  setTimeout(() => discord.innerText = "[discord]", 1000);
}

function copy_tele() {
  const element = document.createElement('textarea');
  element.value = "@nanocores";
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);

  const tele = document.getElementById("tele");
  tele.innerText = "[copied]";
  setTimeout(() => tele.innerText = "[telegram]", 1000);
}