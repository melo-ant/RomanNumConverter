const numRom = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
    'nums' : [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  };
 function toRoma(){
  document.getElementById('output').innerText = "~Loading..."
    const num = document.getElementById('number');
    const out = document.getElementById('output');
    out.innerText = '';
    console.log();
    if (/^\d+$/.test(num.value) && num.value >= 1 && num.value <= 3999){
      let numDecimal = Number(num.value);
      while (numDecimal > 0){
       let v = numRom['nums'].filter((x) => x <= numDecimal);
       console.log(v);
       v.reverse()
       console.log(v[0])
       out.innerText += numRom[v[0]];
       numDecimal -= Math.max(v[0]);
       console.log(numDecimal);
      }
    }else{
      if (num.value == ''){
        return document.getElementById('output').innerText = "Please enter a valid number";
      }else{
        return document.getElementById('output').innerText = Number(num.value) > 3999?"Please enter a number less than or equal to 3999":"Please enter a number greater than or equal to 1";
      }
      
    }
 }
document.getElementById('convert-btn').addEventListener('click',toRoma);