console.log("hello")


function solution(num) {
    var answer = '';
    if (num % 2 === 0) { //num의 값을 2로 나눈 나머지가 0일 때
        return answer = "Even" //ture 값
    } else {
        return answer = "Odd" //else 값
    }
}

console.log(solution(3))