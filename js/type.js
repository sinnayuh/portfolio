function type() {
    const typewriter = new Typewriter(document.getElementById(`Typewriter`), {
        loop: true
    });

    const phrases = [
        "i have two rules. rule one: im always right. rule two: if im wrong, refer to rule one",
        "cash is king, fym",
        "i see it, i want it, i click it",
        "stop talking your dead",
        "she cheat, i cheat, we even",
        "get yo money up not yo funny up",
        "still digging them out the grave",
        "every opp shot pussy",
        "fame is for dweebs. just get rich",
        "i bet you deal drugs, nah we jus bang f",
        "our weakness is that we are morons",
        "people die when they are killed",
        "i bet dead people are easier to get along with",
        "if ur going through hell, keep going",
        "they aint got arms them niggas disabled",
        "obv we out here, its not a bad man ting, we tryna get this money too",
        "three for a oner? party on",
        "if life gets tough, bang fraud",
        "paypal transfers, cloned cards, prepaids @me",
        "eat, sleep, code, repeat",
        "money swollen like cyst",
        "aim for the chest and higher",
        "ran up the numbers like it was scrimmage"
    ]

    typewriter.typeString(phrases[getRandomInt(phrases.length)]).pauseFor(5000).deleteAll().pauseFor(100).callFunction(() => {
        typewriter.stop();
        type();
    }).start();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
