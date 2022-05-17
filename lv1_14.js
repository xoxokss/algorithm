// 나누어 떨어지는 숫자 배열

// # 문제 설명
// - array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// - divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// # 제한사항
// - arr은 자연수를 담은 배열입니다.
// - 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// - divisor는 자연수입니다.
// - array는 길이 1 이상인 배열입니다.

// # 문제



// 나의 풀이
function solution(arr, divisor) {
    var answer = [];
    for(let i=0; i<arr.length;i++) { //arr의 수만큼 반복문
        if (arr[i]%divisor == 0) { // i번째 arr을 divisor로 나눈 나머지가 0이면 true
            answer.push(arr[i]) // i번째 arr을 answer 배열에 push
        }
    }
    if(answer.length == 0) { // 위의 반복문이 끝나도 arr 배열 안에 요소가 없다면
      answer.push(-1); // answer에 배열 요소 -1 만 들어감
    }
    answer.sort((a,b)=>a-b); // 마지막으로 sort() 배열의 오름차순 정렬
    
    return answer;
}
console.log(answer)


// 다른 사람의 풀이

function solution(arr, divisor) {
    var answer = [];
    arr.map((o) => { 
        o % divisor === 0 && answer.push(o);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}
// 삼항연산자와 map함수를 사용했는데 나는 함수 사용의 간결함보다 알고리즘을 이해하는 게 중요하다고 생각해서 그냥 읽고 넘겼다. 

// 공부 메모
// sort() 함수 설명
// 문자열 오름차순 : array.sort()
// 숫자 오름차순 : array.sort((a, b) => a-b);
// 숫자 내림차순 : array.sort((a, b) => b-a);