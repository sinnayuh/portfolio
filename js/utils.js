function enter_website() {
    document.getElementById(`landing`).classList.add(`hidden`);
    document.getElementById(`content`).classList.remove(`hidden`);
    document.getElementById(`music-control`).classList.remove(`hidden`);
    document.getElementById(`music`).play();
    document.getElementById(`music`).volume = .10;

    document.getElementById(`video-control`).play();
    document.getElementById(`video-control`).volume = 0;
    type();
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