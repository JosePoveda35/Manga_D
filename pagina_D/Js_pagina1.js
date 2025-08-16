document.querySelectorAll(".manga-card").forEach(card => {
  const likeBtn = card.querySelector(".like");
  const dislikeBtn = card.querySelector(".dislike");
  const likeCount = card.querySelector(".like1");
  const dislikeCount = card.querySelector(".dislike-count");
  let clicked = false;

  likeBtn.addEventListener("click", () => {
    if (!clicked) {
      likeCount.innerText = parseInt(likeCount.innerText) + 1;
      clicked = true;
    }
  });

  dislikeBtn.addEventListener("click", () => {
    if (!clicked) {
      dislikeCount.innerText = parseInt(dislikeCount.innerText) + 1;
      clicked = true;
    }
  });
});