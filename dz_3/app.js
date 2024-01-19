const accessKey = "ВСТАВЬ_СВОЙ_КЛЮЧ_СЮДА_И_БУДЕТ_СЧАСТЬЕ";
// Запуск функции получения изображения после загрузки всего документа
document.addEventListener("DOMContentLoaded",getImg)

function getImg() {
  fetch(`https://api.unsplash.com/photos/random?count=1&client_id=${accessKey}`)
    .then((response) => response.json())
    .then((data) => {
      const info = data[0];
      document.querySelector(".unsplash-photo").src = info.urls.regular
      document.querySelector(".unsplash-photo").title = info.alt_description
      document.querySelector(".user-name").textContent = info.user.name
      document.querySelector(".user-avatar").src = info.user.profile_image.medium
      document.querySelector(".user-avatar").title = info.user.bio
      console.log(info);
    });
}
