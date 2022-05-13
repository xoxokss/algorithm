function solution(a, b) {
    var answer = 0;
    if (a >= b) { //만약 a가 b보다 작은 수라면
        for (let i = b; i <= a; i++) { // a값만큼 b를 반복
            answer += i; // i 사이의 값을 더한다. 복합 할당 연산자
        }
    } else { // a가 b보다 작을 때 (대소관계가 정해져 있기때문에 걸어둔 if문)
        for (let j = a; j <= b; j++) {
            answer += j;
        }
    }
    return answer;
} 


//다른 문제풀이

function solution2(a, b) {
    var answer = 0;
    var min = Math.min(a, b); // 인수 중 가장 작은 수 반환
    var max = Math.max(a, b); // 인수 중 가장 큰 수 반환
    for(var i=min; i <= max; i++){  // 작은 값으로 시작해서 큰 값만큼 반복
        answer+=i; // 복합할당연산자 +=는 이해하지 못해서 공부해야함
    }
    return answer;
}




//다른 문제풀이 2