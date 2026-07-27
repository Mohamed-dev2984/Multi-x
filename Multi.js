let العدد = {
 واحد:1,
 اتنين:2,
تلاتة:3,
اربعة:4,
خمسة:5,
ستة:6,
سبعة:7,
تمانية:8,
تسعة:9,
عشرة:10,
حداشر:11,
اتناشر:12
}
function newNumber(number,value) {
  العدد[number] = value;
}
function عاوز_جدول_ضرب(index,f) {
  let final = index * f;
  for(let i = index * 0; i <= final; i += index ) {
   console.log(i);
  }
}
