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

