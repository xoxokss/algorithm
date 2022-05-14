// # 핸드폰 번호 가리기

// # 문제 설명
// - 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// - 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// # 제한 조건
// - phone_number는 길이 4 이상, 20이하인 문자열입니다.

// # 문제
function solution(phone_number) {
    var answer = '';
    return answer;
}

// 나의 풀이
function solution(phone_number) {
    var answer = '';
    for(let i=0; i < phone_number.length; i++) {
        if( i<phone_number.length-4) {
            answer = answer + "*"
        }else{
            answer = answer + phone_number[i]
        }
    }
    return answer;
}

// 다른 풀이
function solution(phone_number) {
    var answer = '';
    var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
    return answer;
}

// 공부 메모
// arr.slice(begin, end)매서드 : 배열의 추출할 시작 인덱스부터 종료 인덱스까지 포함한 새로운 배열(복사본)을 반환함. 원본을 건드리지 않음.
// arr.slice(-2) : begin이 음수(-2)이면 마지막 두개의 배열 요소를 추출함. end는 생략 가능. 
