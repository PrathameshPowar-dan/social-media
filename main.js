// const logout = document.getElementsByClassName("log-out");
// for (const e of logout) {
//   e.addEventListener("click", () => {
//     window.location.href = "index.html";
//   })
// }

const scrollWrappers = document.querySelectorAll('.scroll-wrapper');
const scrollStep = 350;
scrollWrappers.forEach(wrapper => {
  const scrollContainer = wrapper.querySelector('.stories');
  const leftBtn = wrapper.querySelector('.left-btn');
  const rightBtn = wrapper.querySelector('.right-btn');

  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
});



document.querySelector(".feed").addEventListener("click", (e) => {
  const button = e.target.closest(".like-button");
  if (!button) return;

  const img = button.querySelector("img");
  const defaultSrc = "Images/white-heart-icon.svg";
  const redSrc = "Images/red-heart-icon.svg";

  img.src = img.src.includes("white-heart-icon.svg") ? redSrc : defaultSrc;

  button.classList.remove("animate-ping");
  void button.offsetWidth;
  button.classList.add("animate-ping");

  setTimeout(() => {
    button.classList.remove("animate-ping");
  }, 300);
});



const stories = [
  {
    username: "abdul_kalam",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/A_P_J_Abdul_Kalam.jpg"
  },
  {
    username: "ratan_tata",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Shri_Ratan_Naval_Tata.jpg"
  },
  {
    username: "virat_kohli",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2Ic51LcjEcBE8lCdFA1wxjbfceNs20S0u6Os7qU69MPHK_5eblaiEjGWgDOgOrvASQLH_IkPWblC8-Bor7GhHSCKJSfYDMIa3k-w6BHCsdg"
  },
  {
    username: "deepika_p",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKPMqxPmc2Rpr5x-ugjR1S_fcphDXHeDwoeNI0tPLd7f0OVnoGR2ZDjotbTqud3vEUqXP4Ouw8nFnSM4_26rZ85W6ts45_IM_d-hveMJDRug"
  },
  {
    username: "alia_bhatt",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcMSyL05kTI-0BFtIGeNnHEtoMykdQ8fMjwR42VREVlLlWSZ2NYpbOjDtIjh788de9aOucpTCnmlVry3DV43Xrm29FZTwf1cATyPkZOyvx"
  },
  {
    username: "shahrukh_k",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ52AuuNHs-VekZPRUjguzxoZ_PtcBMl8hrUUVGmbfx2ogJqsANI_kOClmkmLqjhf2PvP63zlgSdLCWYs2REXR6TB7PdBdn3MxmMHkB51-ww"
  },
  {
    username: "ms_dhoni",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ378LnBszOCoAoOcph2oltk6MzHFCGrLCGXAdcdHtVCvPrpXN8BHpkHzrRFoVtF0a3Fe-eQfHvgA5o0zr7Dtz8cKPciZtrpTwrvMtcOGDJjQ"
  },
  {
    username: "sundar_pichai",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qlTOL2fmc0WMC3Yp2514HIjWKPDKterEGCG8PxdqK5Lcr0CNCggKRHEXjAwkatSul1p78jZcd9J_KfUBHrP6jiJ7XRg2jzQNcJZ0g0hS4g"
  },
  {
    username: "kiara_advani",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61XP2uUNcrvqMMbIFqNwAxNYPITTIoN43USKTj8IVyoqSL54dfZ_3fwvQl9zCcvMHmSEuAt9GmLX6p9tuYZTboZgvzc2eRr75f3uW1pX98w"
  },
  {
    username: "ranveer_singh",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRSdtHhG8BBihcT-BQTEdP1zLGYOQcmVr8F3QO7I2jnfBZJi51zHwDP4Wl2pPnH-SNzV7obAWO6Y6vPJ1DpSCWRxR8pqWG92OvQaBOXABSNQ"
  },
  {
    username: "pv_sindhu",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1a_uaABxvSsi7RwzaFsQBhuTUTsOn5-73hPEaUHFgwRK0JybWjZ3sTm0wOI0EtkZEzrHgpeQA9EP-_VFDRNoaZlyjU8pRcGEOcavL9Ebl"
  },
  {
    username: "ananya_panday",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRncpufAWjg47Wjgbqpm6zpy7W-jr9voiWrWQ_MxtESDA1P7AXCeWPwSrVLijJtHsKy4ClbDZ8XsmfketJ74jCFeI3giQOmMdgLDhaSQ3j8"
  },
  {
    username: "narendra_modi",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqwdOlJE7_Rgkk77PvcRonFRPSJm1TwPjAPGfP1Xnu0SUKEP6q3vzJ4dwRFHxPlRHctNOvUefCvoBJQAVLQx8USA5aWUZ4jvQ6uEMTownx"
  },
  {
    username: "kapil_sharma",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzLC5Y54B5iU11HgoKK_Knt0KzcuFvlXREDgA0HWHOm7VeetLM0MRVjhow8bnY1fk4PZI9fOV7_7wbpV1tpD18TxMUH_F_tqdmVmEo5rt"
  },
  {
    username: "johnny_lever",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT6-e48AKa45wwaZyeZ3EQ1jDsmEY8MNhVNfuD_FOf0_MnYLOdSx7pSWYWdmisTVXmbJrmVmknYpHNgp6p6NZvAuKV5gZYrJRC9I8w5q4gv"
  },
  {
    username: "sachin_t",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfLQijU-9dcSdMx6MFbixabCWY1LrJLy8VJ6WApUoBg3_O3gIJwPKUcx9EifDyhzYv0nwFhshjglKYJOSNpYtCsIkz9oowP5XlVjLZ9UZXEg"
  },
  {
    username: "neeraj_chopra",
    img: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/qpr4zk5ybnwg0gpmuctd"
  },
  {
    username: "kangana_r",
    img: "https://images.hindustantimes.com/img/2021/05/02/550x309/Screenshot_2021-05-02_at_6.23.25_PM_1619961029936_1619961039620.png"
  },
  {
    username: "priyanka_c",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXRb9KK-yxgfmvRGvlbnHoBL_aIerN7vHA8HPC8gXKgfwBgFl5SSjO-saRvvaZYI6KKp7vcjGoapMhXlWKPKSuQLT4-4_uMMErHXbYFRAx4Q"
  },
  {
    username: "amitabh_b",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnuwOu36W22hQ8NBhFy37rImSmS80hMBPSB4SYp-94sT-XxqwR9Cq-p_tS8PVaBfR3zoz5GDHT5hcmokHq_hKlrTsfZPIvPNUL39t7QenzKQ"
  }
];


const storyList = document.querySelector(".stories ul");
stories.forEach(({ username, img }) => {
  storyList.innerHTML += `<li class="story mb-4 ml-2 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-blue-400" data-username="${username}">
    <div class="bg-black rounded-full h-16 w-16 p-1">
      <img src="${img}" alt="${username}" class="w-full h-full object-cover object-center rounded-full" />
      <div class="story-un text-gray-400 text-xs text-center mt-1 w-16">
        <span class="block truncate">${username}</span>
      </div>
    </div>
  </li>
  `;

});

const viewedClass = "bg-gradient-to-tr from-gray-500 to-gray-700";
const activeClass = "bg-gradient-to-tr from-pink-500 to-blue-400";

document.querySelectorAll(".story").forEach((story) => {
  story.addEventListener("click", () => {
    story.classList.remove(...activeClass.split(" "));
    story.classList.add(...viewedClass.split(" "));
  });
});

const feed = document.querySelector(".feed");
stories.forEach(({ username, img }, index) => {
  feed.innerHTML +=
  `<article class="post w-full m-auto max-w-lg mb-10 border-b border-gray-700 pb-6 text-white">
        <!-- Post Header -->
    <header class="flex items-center px-4 mb-3">
      <img src="${img}" alt="${username} Profile" class="w-10 h-10 rounded-full border border-gray-700 object-cover" />
      <div class="ml-3">
        <p class="text-sm font-semibold">${username} <span class="text-gray-400 font-normal">• ${index + 1}d</span></p>
        <p class="text-xs text-gray-400">Posted from India</p>
      </div>
      <button class="ml-auto text-xl text-gray-300 hover:text-white">⋯</button>
    </header>

    <!-- Post Media -->
    <div class="w-full h-80 sm:h-96 md:h-[30rem] overflow-hidden rounded-sm border border-gray-700">
      <img src="${img}" alt="Post by ${username}" class="w-full h-full object-cover rounded-sm" />
    </div>

    <!-- Post Actions -->
    <footer class="px-4 mt-3">
      <div class="flex space-x-4 mb-2">
        <button class="like-button hover:scale-110 transition-transform">
          <img src="Images/white-heart-icon.svg" alt="like" class="w-7 h-7">
        </button>
        <button class="hover:scale-110 transition-transform">
          <img src="Images/bubble-chat-stroke-rounded.svg" alt="comment" class="w-7 h-7">
        </button>
        <button class="hover:scale-110 transition-transform">
          <img src="Images/navigation-03-stroke-rounded.svg" alt="share" class="w-7 h-7">
        </button>
      </div>
      <p class="text-sm"><span class="font-bold">${username}</span> enjoying the view 🌆</p>
    </footer>
      </article>`

});

const sugg = [
  {
    username: "abdul_kalam",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/A_P_J_Abdul_Kalam.jpg"
  },
  {
    username: "ratan_tata",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Shri_Ratan_Naval_Tata.jpg"
  },
  {
    username: "virat_kohli",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2Ic51LcjEcBE8lCdFA1wxjbfceNs20S0u6Os7qU69MPHK_5eblaiEjGWgDOgOrvASQLH_IkPWblC8-Bor7GhHSCKJSfYDMIa3k-w6BHCsdg"
  },
  {
    username: "deepika_p",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKPMqxPmc2Rpr5x-ugjR1S_fcphDXHeDwoeNI0tPLd7f0OVnoGR2ZDjotbTqud3vEUqXP4Ouw8nFnSM4_26rZ85W6ts45_IM_d-hveMJDRug"
  },
  {
    username: "alia_bhatt",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcMSyL05kTI-0BFtIGeNnHEtoMykdQ8fMjwR42VREVlLlWSZ2NYpbOjDtIjh788de9aOucpTCnmlVry3DV43Xrm29FZTwf1cATyPkZOyvx"
  }
]

const suggest = document.querySelector(".suggestions");
sugg.forEach(({ username, img }) => {
  suggest.innerHTML += 
  `<li class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <img src="${img}"
              class="w-8 h-8 rounded-full object-cover border border-gray-700" alt="Itachi" />
            <div>
              <p class="font-semibold">${username}</p>
              <p class="text-gray-500 text-xs">Followed by friends</p>
            </div>
          </div>
          <button
            class="text-blue-500 text-xs font-semibold px-2 py-1 rounded transition-colors hover:bg-white hover:text-black">
            Follow
          </button>
        </li>`;
});



