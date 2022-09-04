const input = document.getElementById("word-length");

const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; ++i)
    {
        text += letters[Math.floor(Math.random()*25)];
    }

    return text;
};


document.getElementById("generate").onclick = generateWord;