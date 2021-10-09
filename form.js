const join = document.querySelector("#join");
const btnSend = join.querySelector("input[type=submit");
const items = ["userid", "pwd", "email", "hobby", "gender", "comments"];
let isValid = false;
let i=0;

//전송 버튼 클릭시
btnSend.addEventListener("click", e=>{
    e.preventDefault();
    //인증 함수 호출
    //모든 인증을 통과하면 isValid를 true로 변경 (전송시킴)
    //인증통과가 안되면 isValid를 false로 변경 (전송막음)
    validation(join, items);
    

    //isValid값이 false면 전송정지
    if(!isValid){
        //submit의 기본 이벤트 막음
        //e.preventDefault();
    }    
});

function validation(form, nameGroup){
    nameGroup.forEach((el)=>{
        let result = form[el];

        //복수의 name값일때 (체크박스, 라디오)
        if(result.length){
            let isChecked = false;

            result.forEach((el)=>{
                if(el.checked) isChecked = true;
            })

            if(isChecked){
                i++;
            }
        //단수의 name값일떄 (텍스트를 입력)
        }else{
            if(result.value){
                i++;
            }
        }

        if(i == result.length){
            isValid = true;
        }else{
            isValid = false;
        }

        console.log(result.length);
    });
}