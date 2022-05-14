// # 행렬의 덧셈

// # 문제 설명
// - 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// # 제한 조건
// - 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// # 문제
function solution(arr1, arr2) {
    var answer = [[]];
    return answer;
}

// 나의 풀이
function solution(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){ //i = 0부터 arr1의 길이만큼 반복 증가
        answer[i] =[]; // answer의 바깥쪽 대괄호를 벗김.
        for(var j=0; j<arr1[i].length; j++){ 
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

// 다른 풀이
function solution(arr1, arr2) {
    var answer = [[]];
    for(let i=0; i<arr1.length; i++){ //[1,2][2,3]
        let sum = [];
        for(let j=0; j<arr1[i].length; j++){ //arr1 안의 배열의 길이 (2번)
            sum.push(arr1[i][j] + arr2[i][j]) // 1번째 1+3, 2번째 2+4 / 3번째 2+5 4번째 3+6
        }
        answer.push(sum) // [4,6],[7,9]
    }
    return answer;
}

// 공부 메모
// 수포자인 나에게 점점 수학이 다가온다. 절대 포기하지 말자.
// javascript에서 행렬의 표현법 