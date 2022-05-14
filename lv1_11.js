// # x만큼 간격이 있는 n개의 숫자
// # 문제 설명
// - 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// # 제한 조건
// - x는 -10000000 이상, 10000000 이하인 정수입니다.
// - n은 1000 이하인 자연수입니다.

let x = 3;
let n = 5;

// 문제
function solution(x, n) {
    var answer = [];
    return answer;
}

// 내 풀이
function solution1(x, n) {
    var answer = [];
        for (let i = 1; i <= n; i++) {  // i는 1부터 n만큼 반복
        answer.push(x*i); // x값을 i가 바뀔 때마다 곱해서 배열에 입력
    }
    return answer;
}
console.log(solution1(3,5))

// 예제  x : 3 | n : 5
// 3 6 9 12 15 18


// 다른 풀이
function solution2(x, n) {
    var answer = [];
    var cnt = 0; //카운트용 변수

    while (cnt<=n) { //조건 : cnt가 n보다 작을 때 
        cnt++; // cnt 값 1 증가 
        answer.push(x*cnt); // x 곱하기 cnt 
    }
    return answer;
}

console.log(solution2(3,6))

// 공부 메모
// 반복문 for | for (초기문; 조건문; 증감문) { 명령문 } : 조건이 false가 될 때까지 실행하는 반복문, 횟수가 정해진 경우 사용한다. 
// 반복문 while | while ( 조건 ) { 명령문 } : 조건이 true일때 유지되는 반복문, 구조가 if문과 닮았다. 