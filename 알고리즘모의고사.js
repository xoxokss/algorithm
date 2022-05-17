// 문제 풀이 영상입니다.
// 제가 선택한 문제는 “1번 몇시간 했더라“입니다.


// 1. 선택한 문제에 대한 문제 해석
// 2. 
// 문제는 일주일동안의 공부 기록을 남긴 배열을 입력 값으로 받아,
// 몇시간 공부 했는지 총 시간을 합산하는 알고리즘으로 만드는 것입니다.
// 문제에서 시간은 분을 제외하고 정각으로 입력된 것을 가정하며,
// 체크아웃 시간이 자정을 넘길 경우 24시에 초과한 시간을 더합니다.

// 단 체크아웃 시간이 새벽 5시 정각 이상이면  체크아웃을 깜빡한 것으로 간주하고 
// 21시에 체크아웃 한 것으로 계산해야합니다.

// 문제에서 주어진 입력값은 배열로 이루어져 있습니다.
// 배열 안의 요소는 7개로 각각 일주일 간의 체크인 시간과 체크아웃 시간입니다.

// 함수를 완성하면
// 출력값은 체크아웃 시간에서 체크인 시간을 빼서 하루 공부시간을 계산하고 
// 일주일을 모두 더하여 총  합계 공부시간으로 출력해야 합니다. 

function solution(arr1, arr2){
	let answer=0;
for(let i=0; i<7;i++) { 
  if (arr2[i] <  29) 
  {answer = answer + arr2[i] - arr1[i]}
  else
  {answer = answer + 21 - arr1[i]}
}
  return answer;
}

function solution(arr1, arr2){
	let answer=0;
for(let i=0; i<arr2.length;i++) { 
  if (arr2[i] >=  29) 
  {arr2[i] = 21}
answer += arr2[i]-arr1[i]
}
  return answer;
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))
// 102

// let arr1=[9, 9, 8, 8, 7, 8, 9]
// let arr2=[21, 25, 30, 29, 22, 23, 30]
// console.log(solution(arr1, arr2))
// // 96

// let arr1=[9, 7, 8, 9, 7, 9, 8]
// let arr2=[23, 22, 26, 26, 29, 27, 22]
// console.log(solution(arr1, arr2))
// // 110