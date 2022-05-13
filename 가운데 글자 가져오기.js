function solution(s) {
    var answer = '';
    if(s.length%2==0){ // 문자의 길이를 2로 나눈 나머지가 0이면! 짝수
        return s.substr(s.length/2-1,2) // 문자를 2로 나눈 몫에서 1을 빼고 시작해서 두글자를 반환
    }else { //홀수
        return s.substr(s.length/2,1) // 문자를 2로 나눈 값에서 시작해서 한글자만 반환 
    }
    return answer;
}
// 부분문자열 추출 메서드 : substr(a_start,b_length) : a위치에서 시작해서, b 길이만큼 텍스트를 출력
// '%'와 '/'의 차이 : '%'는 앞의 값을 뒤 나눈 나머지, '/'는 앞에 값을 뒤의 갚으로 나눈 몫
// 증감 연산자 : "++" 값을 증가, "--" 값을 감소


// 또다른 문제풀이
function solution2(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}  
// 문자추출메서드 substr(s의 길이를 2로 나눈 몫을 올림 처리하고 1을 뺀 값이 추출 시작위치, s의 길이를 2로 나눈 나머지가 0이면 두글자, 한글자로 결정) 

// 공부 메모
// '?'조건부연산자=물음표연산자=삼항연산자 : 조건에 따라 다른 값을 변수에 할당. 연산자 중 유일하게 피연산자가 3개라 삼항연산자라고 불림. 
// 일치연산자 "===" 엄격한 동등 연산자이다. 자료형의 동등 여부까지 검사한다 
// let result = condition ? value1 : value 2; -> condition이 truethy라면 value1 반환
// Math.ceil(숫자) : 올림
// Math.floor(숫자) : 내림
// Math.round(숫자)) : 반올림
