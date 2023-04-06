
const main = document.querySelector(".main-area");

const headerArea = document.createElement("div");
headerArea.className = "header-area";
headerArea.innerText = "Birini Seçiniz"
main.append(headerArea)


// div öğesi oluştur
const selectArea = document.createElement("div");
selectArea.classList.add("select-area");

// Mutlu hissi için avatar öğesi ekle
const happyAvatar = document.createElement("div");
happyAvatar.classList.add("avatar-area");
const happyImg = document.createElement("img");
happyImg.src = "https://cdn-icons-png.flaticon.com/512/520/520433.png";
happyImg.alt = "Mutlu";
happyAvatar.appendChild(happyImg);
const happySpan = document.createElement("span");
happySpan.textContent = "Mutlu";
happyAvatar.appendChild(happySpan);
selectArea.appendChild(happyAvatar);

// Üzgün hissi için avatar öğesi ekle
const sadAvatar = document.createElement("div");
sadAvatar.classList.add("avatar-area");
const sadImg = document.createElement("img");
sadImg.src = "https://cdn-icons-png.flaticon.com/512/3769/3769878.png";
sadImg.alt = "Üzgün";
sadAvatar.appendChild(sadImg);
const sadSpan = document.createElement("span");
sadSpan.textContent = "Üzgün";
sadAvatar.appendChild(sadSpan);
selectArea.appendChild(sadAvatar);

// Nötr hissi için avatar öğesi ekle
const neutralAvatar = document.createElement("div");
neutralAvatar.classList.add("avatar-area");
const neutralImg = document.createElement("img");
neutralImg.src = "https://cdn-icons-png.flaticon.com/512/9490/9490056.png";
neutralImg.alt = "Nötr";
neutralAvatar.appendChild(neutralImg);
const neutralSpan = document.createElement("span");
neutralSpan.textContent = "Nötr";
neutralAvatar.appendChild(neutralSpan);
selectArea.appendChild(neutralAvatar);

// selectArea öğesini belirtilen hedef öğeye ekle
// const targetElement = document.getElementById("target");
main.appendChild(selectArea);

const emoji = document.querySelectorAll(".avatar-area");

emoji.forEach(function (avatar) {
    avatar.addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains("active")) {
            deleteActiveClass();
        }
        else {
            deleteActiveClass();
            e.currentTarget.classList.add("active");
        }
    })
})


function deleteActiveClass() {
    emoji.forEach(function (avatar) {
        avatar.classList.remove("active");
    })
}




