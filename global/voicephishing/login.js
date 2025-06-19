const loginbtn = document.querySelector('.btn');


loginbtn.addEventListener('click', function(){
    const email = document.querySelector('.email > input').value;
    const pass = document.querySelector('.pass > input').value;
    if(!email && !pass) {
        alert('회원정보를 입력해주세요!')
    }
    if(!email && pass) {
        alert('이메일을 입력해주세요!')
    }
    if(email && !pass) {
        alert('비밀번호를 입력해주세요!')
    }
})