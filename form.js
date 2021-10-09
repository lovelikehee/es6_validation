const join = document.querySelector("#join");
const btnSend = join.querySelector("input[type=submit");
const items = ["userid", "pwd", "email", "hobby", "gender", "comments"];
let isValid = false;
let i=0;

//전송 버튼 클릭시
btnSend.addEventListener("click", e=>{

    //인증 함수 호출
    //모든 인증을 통과하면 isValid를 true로 변경 (전송시킴)
    //인증통과가 안되면 isValid를 false로 변경 (전송막음)
    valiation(join, items);

    //isValid값이 false면 전송정지
    if(!isValid){
        e.preventDefault();
    }
    
});