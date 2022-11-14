// $(document).ready(function() {
//     calendarInit();
// });
// /*
//     달력 렌더링 할 때 필요한 정보 목록 

//     현재 월(초기값 : 현재 시간)
//     금월 마지막일 날짜와 요일
//     전월 마지막일 날짜와 요일
// */

// function calendarInit() {

//     // 날짜 정보 가져오기
//     var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
//     var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // uct 표준시 도출
//     var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
//     var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)
  
//     var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
//     // 달력에서 표기하는 날짜 객체
  
    
//     var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
//     var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
//     var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

//     // kst 기준 현재시간
//     // console.log(thisMonth);

//     // 캘린더 렌더링
//     renderCalender(thisMonth);

//     function renderCalender(thisMonth) {

//         // 렌더링을 위한 데이터 정리
//         currentYear = thisMonth.getFullYear();
//         currentMonth = thisMonth.getMonth();
//         currentDate = thisMonth.getDate();

//         // 이전 달의 마지막 날 날짜와 요일 구하기
//         var startDay = new Date(currentYear, currentMonth, 0);
//         var prevDate = startDay.getDate();
//         var prevDay = startDay.getDay();

//         // 이번 달의 마지막날 날짜와 요일 구하기
//         var endDay = new Date(currentYear, currentMonth + 1, 0);
//         var nextDate = endDay.getDate();
//         var nextDay = endDay.getDay();

//         // console.log(prevDate, prevDay, nextDate, nextDay);

//         // 현재 월 표기
//         $('.year-month').text(currentYear + '.' + (currentMonth + 1));

//         // 렌더링 html 요소 생성
//         calendar = document.querySelector('.dates')
//         calendar.innerHTML = '';
        
//         // 지난달
//         for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
//             calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>'
//         }
//         // 이번달
//         for (var i = 1; i <= nextDate; i++) {
//             calendar.innerHTML = calendar.innerHTML + '<div class="day current">' + i + '</div>'
//         }
//         // 다음달
//         for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
//             calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>'
//         }

//         // 오늘 날짜 표기
//         if (today.getMonth() == currentMonth) {
//             todayDate = today.getDate();
//             var currentMonthDate = document.querySelectorAll('.dates .current');
//             currentMonthDate[todayDate -1].classList.add('today');
//         }
//     }

//     // 이전달로 이동
//     $('.go-prev').on('click', function() {
//         thisMonth = new Date(currentYear, currentMonth - 1, 1);
//         renderCalender(thisMonth);
//     });

//     // 다음달로 이동
//     $('.go-next').on('click', function() {
//         thisMonth = new Date(currentYear, currentMonth + 1, 1);
//         renderCalender(thisMonth); 
//     });
// }


// const makeCalendar = (date) => {    
//     // 현재의 년도와 월 받아오기
//     const nowYear = new Date(date).getFullYear();
//     const nowMonth = new Date(date).getMonth() + 1;

//     // 한달전의 마지막 요일
//     const prevDay = new Date(nowYear, nowMonth - 1, 1).getDay();

//     // 현재 월의 마지막 날 구하기
//     const lastDay = new Date(nowYear, nowMonth, 0).getDate();
    
//     // 남은 박스만큼 다음달 날짜 표시
//     const limitDay = prevDay + lastDay;
//     const nextDay = Math.ceil(limitDay / 7) * 7;

//     let htmlDummy = '';

//     for (let i = 0; i < prevDay; i++) {
//       htmlDummy += `<div class="noColor"></div>`;
//     }
    
//     // 이번달 날짜 표시하기
//     for (let i = 1; i <= lastDay; i++) {    
//       htmlDummy += `<div>${i}</div>`;
//     }

//     for (let i = limitDay; i < nextDay; i++) {
//       htmlDummy += `<div class="noColor"></div>`;
//     }
	
//     // HTML 반영
//     document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
//     document.querySelector(`.dateTitle`).innerText = `${nowYear}년 ${nowMonth}월`;
// }

// makeCalendar("2022-08-01");


// const date = new Date();

// const viewYear = date.getFullYear();
// const vieeMonth = date.getMonth();

// document.querySelector('.year-month').textContent = '${viewYear}년 ${viewMonth + 1} 월';

// const prevLast = new Date(viewYear, viewMonth, 0);
// const thisLast = new Date(viewYear, vieeMonth + 1, 0);

// const PLDate = thisLast.getDate();
// const PLday = prevLast.getDay();

// const TLDate = thisLast.getDate();
// const TLDay = thisLast.getDay();

// const prevDate = [];
// const thisDates = [...Array(TLDate + 1).keys()].slice(1);
// const nextDates = [];

// if(PLday !== 6){
//     for(let i = 0; i < PLday + 1; i++){
//         prevDates.unshift(PLDate - i);
//     }
// }

// for(let i = 1; i < 7 - TLDay; i++){
//     nextDates.push(i);
// }

// const dates = prevDates.concat(thisDates, nextDates);

// dates.forEach((date, i) => {
//    dates[i] = '<div class="date">$(date)</div>'; 
// });

// document.querySelector('.dates').innerHTML = dates.join('');



// const now = new Date();

// const today = {
//     year: now.getFullYear(),
//     date: now.getDate(),
//     month: now.toLocaleDateString('en-US', {month: 'short'}),
//     day: now.toLocaleDateString('en-US',{month: 'short'}),
// }

// for (let key in today) {
//     document.getElementById(key).textContent = today[key];    
// }

// document.getElementById('year').textContent = today.year;
// document.getElementById('month').textContent = today.month;
// document.getElementById('date').textContent = today.date;
// document.getElementById('day').textContent = today.day;



const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
  dates[i] = `<div class="date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates.join('');