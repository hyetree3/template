let 부부 = '[{"name": "song", "age": 36}, {"name": "Bang", "age": 40}]';
let 가족 = JSON.parse(부부);
console.log(가족.length); // 2
console.log(가족[1].name);  


