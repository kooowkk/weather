// 화면에 마우스 움직일 때 좌표값
// 빨간색 svg의 돔 엘리먼트
// 노란색 원의 돔 엘리먼트

//화면에 마우스 움직일 때 이벤트를 달아서, svg와 노란색 원의 스타일을 조작한다.

const sunnyMove = (e) => {
    document.querySelector(".sunny-sun").style.top =`${(e.y / window.innerHeight) * (window.innerHeight * 0.5)}px`;
    document.querySelector(".sunny-sun").style.left =`${(e.x / window.innerWidth) * (window.innerWidth * 0.5)}px`;
    document.querySelector(".sun-circle").style.boxShadow = `inset ${e.x / window.innerWidth * 32 - 8}px ${e.y / window.innerHeight * 32 - 8}px 26px rgb(0 0 0 / 25%)`;
    // inset 16px 16px 26px rgb(0 0 0 / 25%)
}
window.addEventListener("mousemove", sunnyMove); 