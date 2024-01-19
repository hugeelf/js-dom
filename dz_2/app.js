const images = [
  "https://images.unsplash.com/photo-1682687982502-b05f0565753a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681412205520-49c7f9b8b67f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1705518648497-e4ea72bcb27d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const mainSlide = document.querySelector(".main_slide");
const imageElement = document.createElement("img");
const previous = document.querySelector(".prev_btn");
const next = document.querySelector(".next_btn");
const paginations = document.querySelector(".pagination");

let currentImg = 0;

imageElement.src = images[currentImg];
mainSlide.append(imageElement);

images.forEach((image) => {
  const paginationButton = document.createElement("button");
  paginationButton.classList.add("pag-btn");
  paginations.append(paginationButton);
});

const buttonArray = document.querySelectorAll(".pag-btn")

for (let index = 0; index < images.length; index++) {
    buttonArray[index].addEventListener("click", ()=>{
        currentImg = index;
        imageElement.src = images[currentImg];
    })
}

previous.addEventListener("click", () => {
  currentImg = currentImg - 1;
  if (currentImg < 0) {
    currentImg = images.length - 1;
  }
  imageElement.src = images[currentImg];
});
next.addEventListener("click", () => {
  currentImg = currentImg + 1;
  if (currentImg > images.length - 1) {
    currentImg = 0;
  }
  imageElement.src = images[currentImg];
});
