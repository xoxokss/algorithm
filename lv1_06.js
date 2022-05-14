// # 없는 숫자 더하기

// # 문제 설명
// - 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// # 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// # 문제
function solution(numbers) {
    var answer = -1;
    return answer;
}

// # 나의 풀이
function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) answer += i;   // 논리연산자 not "!" : (boolean value) true는 false로 변환
    }
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]))
console.log(solution([5,8,4,0,6,7,9]))



// # 다른 사람의 풀이
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}


// # 공부 메모
// 논리연산자 not "!" : (boolean value) true는 false로 변환하는 논리연산자
// includes() : 배열이 특정 요소를 포함하고 있는지 판별하는 메서드

// if문의 명령문이 하나일 때 : 
// if ( 조건1 ) 명령문1; else ( 조건2 ) 명령문2;
// if문의 명령문이 여러개일 때 :
// if ( 조건1 ) { 명령문들1 }; else ( 조건2 ) { 명령문들2 };