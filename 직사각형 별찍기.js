// # 문제 설명
// - 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// - 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// # 제한 조건
// - n과 m은 각각 1000 이하인 자연수입니다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const row = '*'.repeat(a); // row 에 a값만큼 별 갯수 입력
    for (let i = 0; i < b; i++) { // b값만큼 row를 반복
        console.log(row);
    }
});

// 다른 문제풀이 1
process.stdin.setEncoding2('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const star = '${"*".repeat(a)}\n';
    console.log(star.repeat(b))
});
// "\n"은 줄바꿈
// 'string ${expression} : 템플릿 리터럴 = 문자열과 응용표현식을 섞어 사용할 수 있다. 

// 다른 문제풀이 2
process.stdin.setEncoding3('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
});
    console.log((('*').repeat(a)+`\n`).repeat(b))
    //콘솔창에 한줄로 문제를 풀어버린 미쳐버린 답안.

