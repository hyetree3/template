// let name = "jpro";
//console.log(name);

//라면 레시피
//1. 물을 500ml 끓인다.
//2. 물이 끓으면, 스프를 넣는다. 
//3. 면을 넣고 3분간 끓인다. 
//4. 불을 끄고, 계란 1개와 파를 넣는다.
// 5. 그릇에 옮겨 담아 김치와 함께 먹는다. 
function makeRamyeon(짜파) {
let waterTemp = 20;
let 재료 = ["계란", "대파", "양파", "김치", "마늘", "치즈" ];
let egg= false;
let isLikeGO = true;
console.log("물 500ml을 냄비에 넣는다.");
console.log("인덕션을 8로 올린다");
for(;waterTemp<=100 ; waterTemp=waterTemp+11){
    console.log(`현재 물온도  ${waterTemp}`);
}
console.log(`현재 물온도  ${waterTemp}`);
console.log("스프를 넣는다");
console.log("면을 넣는다");
for(let waitMin =1; waitMin < 4; waitMin++ ){
    console.log(`라면을 익히는 중 .... ${waitMin}분`);
}
console.log("인덕션을 끕니다");
/*
if(egg){
    console.log("계란 1개를 넣는다");
}else {
    console.log("계란이 없습니다. 다음기회에");
}
if(isLikeGO){
    console.log("파를 넣습니다");
}*/
if (짜파) {
    console.log("물버리기");
    console.log("분말 스프 넣고 비비기");
}
else {
    for (const item of 재료) {
        console.log(`${item}을 넣기`);
    }
}

console.log("그릇에 옮겨 담아 김치와 함께 먹는다");
}
makeRamyeon(true);
 