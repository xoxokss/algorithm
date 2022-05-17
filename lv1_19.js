// # 수박수박수박수박수박수?

// # 문제 설명
// - 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// # 제한 조건
// - n은 길이 10,000이하인 자연수입니다.

// # 문제



// 나의 풀이
function solution(n) {
    var answer = '';
    for (let i=0; i<n;i++){
        if (i%2===0)
        {answer+="수"}
        else
        {answer+="박"}
}    return answer;
}
let n = [3]
console.log(solution(n))

// 다른 풀이
function solution(n) {
   return '수박'.repeat(n).substr(0,n)}

 n = [6]
console.log(solution(n))

// 공부 메모