function showmodel(){
    document.querySelector('.login-form').classList.add('show-login-form')
}

function closemodel(){
    document.querySelector('.login-form').classList.remove('show-login-form')
}

let btnCreateIssue = document.querySelector('.btn-create-issue');
btnCreateIssue.addEventListener("click",showmodel)

let closeForm = document.querySelector("span");
closeForm.addEventListener("click",closemodel)