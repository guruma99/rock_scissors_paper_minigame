// let you_hand = document.querySelector(".you_game");
// let btn = document.querySelectorAll(".btn button");
// let slidelist = document.querySelector(".com_hand");
// let game_img = ["./img/가위.png", "./img/바위.png", "./img/보.png"];
// let result = document.querySelector("#result");
// let result_txt = document.querySelector("#result p");
// let score = document.querySelector(".score div");
// let you_score = 0;
// let com_score = 0;
// score.innerHTML = `<b>사용자</b> ${you_score} : ${com_score} <b>컴퓨터</b>`;

// //슬라이드로 com-hand부분 움직이게 하기
// let index = 1;

// // function start(time) {
// //   setInterval(slide,time);
// // };

// let slide = setInterval(() => {
//   slidelist.style.transform = `translateX(${index * -145}px)`;
//   index >= 2 ? (index = 0) : index++;
// }, 200);

// //가위바위보 버튼 클릭시 , 사용자가 선택한 손모양으로 이미지변경
// btn.forEach((item, i) => {
//   item.addEventListener("click", function () {
//     console.log(i);
//     you_hand.src = game_img[i];

//     //com 핸드부분 , 랜덤으로 골라지고 손모양 이미지변경
//     let random = parseInt(Math.random() * 3);
//     clearInterval(slide);
//     // random = index;
//     slidelist.style.transform = `translateX(${random * -145}px)`;
//     console.log(random);
//     //대결 결과값 p태그 띄우기
//     switch (random - i) {
//       case 2:
//       case -1:
//         result.style.top = "23%";
//         result_txt.innerHTML = "이겼습니다";
//         you_score += 1;
//         score.innerHTML = `${you_score} : ${com_score}`;
//         break;
//       case 1:
//       case -2:
//         result.style.top = "23%";
//         result_txt.innerHTML = "졌습니다";
//         com_score += 1;
//         score.innerHTML = `${you_score} : ${com_score}`;
//         break;
//       case 0:
//         result.style.top = "23%";
//         result_txt.innerHTML = "비겼습니다";
//         score.innerHTML = `${you_score} : ${com_score}`;
//         break;
//       default:
//         document.write("잘못 입력하셨습니다.");
//         break;
//     }
//     last_result();
//   });
// });

// function restart() {}

// //최종결과화면 띄우기
// function last_result() {
//   if (you_score == 2 || com_score == 2) {
//     if (you_score > com_score) {
//       document.write("너가이김");
//     } else {
//       document.write("너가 짐");
//     }
//   }
// }

// 🟡🟡🟡
let you_hand = document.querySelector(".you_game");
let btn = document.querySelectorAll(".btn button");
let slidelist = document.querySelector(".com_hand");
let game_img = ["./img/가위.png", "./img/바위.png", "./img/보.png"];
let result = document.querySelector("#result");
let result_txt = document.querySelector("#result p");
let score = document.querySelector(".score div");
let you_score = 0;
let com_score = 0;
score.innerHTML = `<b>사용자</b> ${you_score} : ${com_score} <b>컴퓨터</b>`;

//슬라이드로 com-hand부분 움직이게 하기
let index = 1;
let slide; // slide에 초기값을 부여하지 않음.

// function start(time) {
//   setInterval(slide,time);
// };

// setToInterval 함수를 통해 slide 변수에 setInterval 함수 넣기
setToInterval();

//가위바위보 버튼 클릭시 , 사용자가 선택한 손모양으로 이미지변경
btn.forEach((item, i) => {
  item.addEventListener("click", function () {
    console.log(i);
    you_hand.src = game_img[i];

    //com 핸드부분 , 랜덤으로 골라지고 손모양 이미지변경
    let random = parseInt(Math.random() * 3);
    clearInterval(slide);
    // random = index;
    slidelist.style.transform = `translateX(${random * -145}px)`;
    console.log(random);
    //대결 결과값 p태그 띄우기
    switch (random - i) {
      case 2:
      case -1:
        result.style.top = "23%";
        result_txt.innerHTML = "이겼습니다";
        you_score += 1;
        score.innerHTML = `${you_score} : ${com_score}`;
        break;
      case 1:
      case -2:
        result.style.top = "23%";
        result_txt.innerHTML = "졌습니다";
        com_score += 1;
        score.innerHTML = `${you_score} : ${com_score}`;
        break;
      case 0:
        result.style.top = "23%";
        result_txt.innerHTML = "비겼습니다";
        score.innerHTML = `${you_score} : ${com_score}`;
        break;
      default:
        document.write("잘못 입력하셨습니다.");
        break;
    }
    last_result();
  });
});

// slide 변수에 setInterval 함수를 넣어줌.
function setToInterval() {
  slide = setInterval(() => {
    slidelist.style.transform = `translateX(${index * -145}px)`;
    index >= 2 ? (index = 0) : index++;
  }, 200);
}

//최종결과화면 띄우기 dkdkdsf
function last_result() {
  if (you_score == 2 || com_score == 2) {
    if (you_score > com_score) {
      document.write("너가이김");
    } else {
      document.write("너가 짐");
    }
  } else {
    // 예외 처리를 하여 게임이 끝나면
    // 3초 후에 setToInterval 함수를 실행시킴.
    setTimeout(() => {
      setToInterval();
      result.style.top = "32%";
    }, 1000);
  }
}

//컴부분은 혼자 이미지 돌아가게 하기 ->
// 사용자가 버튼 클릭시 컴핸드랜덤이미지와 사용자가 선택한 이미지로 출력->
// 컴과 사용자의 게임 결과 result 창 box위로 스르륵 올라오기
// 이긴쪽으로 점수 숫자 올리기
// 2초뒤 게임 재시작 -> 숫자는 그대로 있고, com 부분 이미지 다시 움직이기
// 3세판으로 게임 승부 결정
// alert 창으로 최종승자 발표
//  최종우승
