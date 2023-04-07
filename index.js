const passwordOutput=document.getElementsByClassName('upper-div');
const finalPassword=document.getElementById('final-pass');
const boxes=document.getElementsByClassName('checkbox');
const rangeValue = document.getElementsByClassName('slide-bar-value');
const slideBar = document.getElementById('slide-bar');
const strengthBar=document.getElementsByClassName('bar');
const charSet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz' , '0123456789' , '!@#$%^&*()'];
const StrengthText= document.getElementsByClassName("strength-rating-text");
const copyButton=document.getElementById('copy-button');
let ans="";
rangeValue[0].innerText = slideBar.value;
slideBar.oninput = function() {
  rangeValue[0].innerHTML = this.value;
}
const generateButton=document.getElementsByClassName('generate-btn');

copyButton.onclick=function(){
  navigator.clipboard.writeText(finalPassword.textContent);
  copyButton.innerHTML='<i class=" animate__animated animate__swing fa-regular fa-clipboard" style="color: #a3ff11;" ></i>'
  // setTimeout(function(){
  //   copyButton.innerText="copied!";
  //   copyButton.style.fontSize="1vw";
  // },1000)
  // copyButton.innerHTML='<i class="fa-solid fa-check" style="color: #a3ff11;"></i>';
  // alert("omg text copied");
}

function shuffle(str) {
  let charArray = str.split('');
  for (let i = charArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }
  return charArray.join('');
}

function showBar2(count){
  if(count==0){
    StrengthText[0].innerHTML="";
  }
  if(count>=1){
    strengthBar[0].classList.add("animate__bounceIn");
    strengthBar[0].style.backgroundColor="#FBFFB1";
    strengthBar[0].style.opacity="1";
    strengthBar[0].style.border="none";
    StrengthText[0].innerHTML="weak";
    StrengthText[0].style.color="#FBFFB1";
  }
  else{
    strengthBar[0].style.border="1.2px solid white";
    strengthBar[0].style.backgroundColor="#00000075";
    strengthBar[0].classList.remove("animate__bounceIn");
  }
  if(count>=2){
    strengthBar[1].classList.add("animate__bounceIn");
    strengthBar[1].style.backgroundColor="#FFEBB4";
    strengthBar[1].style.opacity="1";
    strengthBar[1].style.border="none";
    StrengthText[0].innerHTML="medium";
    StrengthText[0].style.color="#FFEBB4";
  }
  else{
    strengthBar[1].style.border="1.2px solid white";
    strengthBar[1].style.backgroundColor="#00000075";
    strengthBar[1].classList.remove("animate__bounceIn");
  }
  if(count>=3){
    strengthBar[2].classList.add("animate__bounceIn");
    strengthBar[2].style.backgroundColor="#FFBFA9";
    strengthBar[2].style.opacity="1";
    strengthBar[2].style.border="none";
    StrengthText[0].innerHTML="strong";
    StrengthText[0].style.color="#FFBFA9";
  }
  else{
    strengthBar[2].style.border="1.2px solid white";
    strengthBar[2].style.backgroundColor="#00000075";
    strengthBar[2].classList.remove("animate__bounceIn");
  }
  if(count>=4){
    strengthBar[3].classList.add("animate__bounceIn");
    strengthBar[3].style.backgroundColor="#FFACAC";
    strengthBar[3].style.opacity="1";
    strengthBar[3].style.border="none";
    StrengthText[0].innerHTML="excellent";
    StrengthText[0].style.color="#FFACAC";
  }
  else{
    strengthBar[3].style.border="1.2px solid white";
    strengthBar[3].style.backgroundColor="#00000075";
    strengthBar[3].classList.remove("animate__bounceIn");
  }
}
let count=0;
for(let i of boxes){
  i.addEventListener('click',function(){
    if(i.checked){
      count++;
    }
    else{
      count--;
    }
    showBar2(count);
  })
}
generateButton[0].addEventListener('click',function(e){
  let reqBoxes=[];
  ans="";
  e.preventDefault();
  for(let i=0;i< boxes.length;i++){
    if(boxes[i].checked){
      reqBoxes.push(i);
    }
  }
  let passLen=parseInt(slideBar.value);
  let k=0;
  while(passLen>0){
    k++;
    k%=reqBoxes.length;
    let temp=charSet[reqBoxes[k]];
    // console.log(temp);
    ans+=(temp[Math.floor(Math.random()*temp.length)]);
    passLen--;
  }
  finalPassword.classList.add("animate__flipInX");
  setTimeout(function(){
    finalPassword.classList.remove("animate__flipInX");
  },1000);
  finalPassword.innerHTML=shuffle(ans);
});
