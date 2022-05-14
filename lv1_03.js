// # 문제 설명
// - 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// # 제한사항
// - s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    var answer = '';
    if(s.length%2==0){ // 문자의 길이를 2로 나눈 나머지가 0이면! 짝수
        return s.substr(s.length/2-1,2) // "문자 길이를 2로 나눈 몫에서 1을 뺀 값"으로 시작하여 두글자를 반환
    }else { // 홀수
        return s.substr(s.length/2,1) // "문자 길이를 2로 나눈 몫의 값"으로 시작해서 한글자만 반환 
    }
    return answer;
}
// 부분문자열 추출 메서드 : substr(start,length) : start 위치에서 시작해서, length만큼 텍스트를 출력
// '%'와 '/'의 차이 : '%'는 앞의 값을 뒤의 값으로 나눈 나머지, '/'는 앞에 값을 뒤의 값으로 나눈 몫
// 증감 연산자 : "++" 값을 증가, "--" 값을 감소


// 다른 문제풀이
function solution2(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}  
// 문자추출메서드 substr(s의 길이를 2로 나눈 몫을 올림 처리하고 1을 뺀 값이 추출 시작위치, s의 길이를 2로 나눈 나머지가 0이면 두글자, 한글자로 결정) 


// 공부 메모
// 문자열(string)의 배열 순서는 0부터 시작한다. str = 'TEXT' 이라면 str[0] = 'E'
// '?'조건부연산자=물음표연산자=삼항연산자 : 조건에 따라 다른 값을 변수에 할당. 연산자 중 유일하게 피연산자가 3개라 삼항연산자라고 불림. 
// 삼항연산자 예시) let result = condition ? value1 : value 2; -> condition이 truethy라면 value1 반환
// 일치연산자 "===" 엄격한 동등 연산자이다. 자료형의 동등 여부까지 검사한다 

// Math.ceil(숫자) : 올림
// Math.floor(숫자) : 내림
// Math.round(숫자)) : 반올림
