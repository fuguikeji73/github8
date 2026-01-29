const isMobile = {
    value: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

const footerListArr = [{
        id: 0,
        img: "./img/1.png",
        text: "多群矩阵同步运营，信赖保证"
    },
    {
        id: 1,
        img: "./img/2.png",
        text: "客服团队全时在线，问题实时响应"
    },
    {
        id: 2,
        img: "./img/3.png",
        text: "多样玩法与定期福利活动"
    },
    {
        id: 3,
        img: "./img/4.png",
        text: "实时数据，公平公正"
    }
];

function getDomain(url) {
    try {
        // 处理没有协议的情况
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url;
        }

        const urlObj = new URL(url);
        let domain = urlObj.hostname;

        return domain;
    } catch (e) {
        // 如果URL解析失败，尝试简单处理
        const simpleMatch = url.match(/^(?:https?:\/\/)?([^\/\?:]+)/i);
        return simpleMatch ? simpleMatch[1].replace(/^www\./, "") : url;
    }
}
const footerHtml = footerListArr
    .map(
        (item) =>
        `<div class="box-item">
        <div class="text">${item.text}</div>
        <img class="img" src="${item.img}" alt="" />
      </div>
`
    )
    .join("");

document.getElementById("footerBox").innerHTML = !isMobile.value ?
    footerHtml :
    `<img style="width:100%" src="./img/h5footers.png" alt="" />`;
const four = document.getElementById("four");
document.getElementById("contbox").innerHTML = `<img style="width:100%;cursor: pointer;" src="./img/ust.png" alt="" />`;
document.getElementById("topImg").innerHTML = isMobile.value ?
    `<img style="width:100%;height:100%" src="./img/h5t.png" alt="" />` :
    `<img style="width:100%;height:100%" src="./img/pctop.png" alt="" />`;

document.getElementById("four").innerHTML = isMobile.value ?
    `
      <img class="imgs" src="./img/l8.png" alt="" />
      <div class="btns">
        <img src="./img/lr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/ld.png">
      </div>
    ` :
    `
      <img class="imgs" src="./img/p1.png" alt="" />
      <div class="btns">
        <img src="./img/pr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/pd.png">
      </div>
    `;
document.getElementById("four1").innerHTML = isMobile.value ?
    `
      <img class="imgs" src="./img/l5.png" alt="" />
      <div class="btns">
        <img src="./img/lr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/ld.png">
      </div>
    ` :
    `
      <img class="imgs" src="./img/p4.png" alt="" />
      <div class="btns">
        <img src="./img/pr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/pd.png">
      </div>
    `;
document.getElementById("four2").innerHTML = isMobile.value ?
    `
      <img class="imgs" src="./img/l6.png" alt="" />
      <div class="btns">
        <img src="./img/lr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/ld.png">
      </div>
    ` :
    `
      <img class="imgs" src="./img/p2.png" alt="" />
      <div class="btns">
        <img src="./img/pr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/pd.png">
      </div>
    `;
document.getElementById("four3").innerHTML = isMobile.value ?
    `
      <img class="imgs" src="./img/l7.png" alt="" />
      <div class="btns">
        <img src="./img/lr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/ld.png">
      </div>
    ` :
    `
      <img class="imgs" src="./img/p3.png" alt="" />
      <div class="btns">
        <img src="./img/pr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/pd.png">
      </div>
    `;
document.getElementById("four4").innerHTML = isMobile.value ?
    `
      <img class="imgs" src="./img/l9.png" alt="" />
      <div class="btns">
        <img src="./img/lr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/ld.png">
      </div>
    ` :
    `
      <img class="imgs" src="./img/p5.png" alt="" />
      <div class="btns">
        <img src="./img/pr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/pd.png">
      </div>
    `;
document.getElementById("four5").innerHTML = isMobile.value ?
    `
      <img class="imgs" src="./img/l10.png" alt="" />
      <div class="btns">
        <img src="./img/lr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/ld.png">
      </div>
    ` :
    `
      <img class="imgs" src="./img/p6.png" alt="" />
      <div class="btns">
        <img src="./img/pr.png">
        <img onclick="handleWebsite('https://www.mj98.app/')" src="./img/pd.png">
      </div>
    `;

if (isMobile.value) {
    // h5不展示
    const el = document.getElementById("Hcontent");
    const child = document.getElementById("contTitle");
    document.getElementById(
        "contbox"
    ).innerHTML = `<div class="left"><img style="width:100%" src="./img/h5123.png" alt="" />
  </div><div class="box-right"><img style="width:100%" src="./img/usdt.png" alt="" /></div>`;
    el.removeChild(child);
    // document.getElementById("usdt").innerHTML = `<img class="img" src="./img/usdt.png" alt="" />`;
    // four.innerHTML = `<img class="imgs" src="./img/l5.png" alt="" />`;

    // const footer = document.getElementById("footerBox");
    // console.log(footer, "asdd");
    // footer.innerHTML = `<img style="width:100%" src="./img/h5footers.png" alt="" />`;
    // console.log(footer, "1233333object");

    // document.getElementById("boxLeft").innerHTML = "";
}

// 各个网址跳转
function handleWebsite(website) {
    event.stopPropagation();
    window.open(website, "_blank");
    // window.open("https://baidu.com", "_blank");
}
// document.querySelectorAll("#four").forEach((el) => {
//   el.addEventListener("click", () => {
//     const website = el.dataset.website; // 从 data-* 获取, 在html img中添加 data-website网址
//     window.open("https://baidu.com", "_blank");
//   });
// });

// 顶部广告
function handleOpenUrl() {
    window.open("https://tronscan.org/#/address/TX4QccKoCGr9nSQu57XrX6MLgDqzx4HRxp/transfers", "_blank");
}

// 客服跳转
function handleService() {
    window.open("https://jsj.top/f/RYqFA7", "_blank");
}