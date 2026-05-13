const message = `“Are you okay, powerpuff?”\nMaybe that’s not a question from me to you.\nMaybe it’s a question you should ask yourself sometimes.\n\nI know people always see you as the strong one.\nThe girl who can handle everything on her own.\nThe girl who keeps smiling even when her mind feels tired and her heart feels heavy.\n\nBut sometimes, being “strong” is just another way of saying you had no choice but to survive everything quietly.\n\nAnd honestly… I know “semangaattt” is not enough for what you’re feeling right now.\n\nSo instead, I just want you to remember this:\nIt’s okay to feel tired\nIt’s okay to feel overwhelmed.\nIt’s okay to pause for a while.\nYou don’t always have to carry everything so gracefully, maaa.\nYou are allowed to rest.\nYou don’t always have to pretend that you’re okay.\n\nPlease don’t be too hard on yourself, okay?\n\nBecause even making it this far already takes so much strength, and honestly… I’m really proud of you for that.\n\nSo, tonight, breathe slowly for a while.\nLet your tired heart rest.\n\nAnd no matter how heavy life feels lately…\nI hope you never forget that you are still worthy, still precious, and still deeply loved.🤍`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
