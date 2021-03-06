// # 문자열을 정수로 바꾸기

// # 문제 설명
// - 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// # 제한 조건
// - s의 길이는 1 이상 5이하입니다.
// - s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// - s는 부호와 숫자로만 이루어져있습니다.
// - s는 "0"으로 시작하지 않습니다.

// # 입출력 예
// - 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// - str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

// # 문제
function solution(s) {
    var answer = s/1;
    return answer;
}

// 나의 풀이
function solution1(s) {
    var answer = 0;
    var answer = parseInt(s); // 문자를 정수형 숫자로 바꿈
    return answer;
}

// 다른 풀이
function solution2(s) {
    var answer = 0;
    var answer = Number(s)
    return answer;
}


// # 공부 메모
// 구글링으로 javascript sstring to int 라고 검색했다. 제한조건이 있는데, 제한 조건을 벗어나지는 않는지 모르겠다.
// String() : 숫자를 문자로 
// Number() : 문자를 숫자로
// var 변수 = parseInt(문자); 문자를 정수형 숫자로 변환해줌
// var 변수 = parseFloat(문자); 문자를 실수형 숫자로 변환해줌
// var 변수 = Nember(문자); 문자를 정수&실수형 숫자로 변환해줌