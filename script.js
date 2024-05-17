function showTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // 시간, 분, 초가 10보다 작으면 앞에 '0'을 추가함
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // 시간 형식을 HH:MM:SS로 표시함
    const time = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').innerText = time;

    // 1초마다 showTime 함수를 반복 실행함
    setTimeout(showTime, 1000);
}

// 웹 페이지가 로드될 때 showTime 함수를 실행함
window.onload = function() {
    showTime();
};
