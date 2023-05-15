
function validateName(first) {
    const f= first.trim().split(' ');
    if(f.length >= 1){
        return true;
    }
    else return false;
}

function validateName(last) {
    const l= last.trim().split(' ');
    if(l.length >= 1){
        return true;
    }
    else return false;
}

function validateGender(){
    const gender = document.getElementsByName('gender');
    for( let i=0;i < gender.length ; i++){
        if(gender[i].checked){
            return true;
        }
    }
    return false;
}

function validateEmail(email){
    const em = ['gmail.com','outlook.com','hotmail.com'];
    const e = email.trim().split('@')[1];
    if (em.includes(e)){
        return true;
    }
    return false;
}

function validateIEmail(iemail){
    const iem1 = ['nitrkl.ac.in'];
    const iem2 = ['122'];
    const iem3 = ['422'];
    const iem4 = ['722'];
    const iem5 = iem2 || iem3 || iem4;
    const e1 = iemail.trim().slice(10,22) ;
    const e2= iemail.trim().slice(0,3) ;
    if ((iem1.includes(e1)) &&(iem5.includes(e2))  && (iemail.length==22)){
        return true;
    }
    return false;
}

function validatePhoneNumber(phone){
    const phon = ['+91'];
    const pho = phone.trim().slice(0,3);
    if ( (phon.includes(pho)) && (phone.length == 13)){
        return true;
    }
    return false;
}

function validateRollNumber(roll){
    const roll1 = ['122'];
    const roll2 = ['422'];
    const roll3 = ['722'];
    const roll4 = roll1 || roll2 || roll3 ;
    const r = roll.trim().slice(0,3);
    if ((roll4.includes(r)) && (roll.length == 9)){
        return true;
    }
    return false;
}

function validateBranch(branch){

}

function validateWhy(why){
    if(why.length>=1){
        return true;
    }
    return false;
}


document.getElementById('validation-form').addEventListener('submit',function(event){event.preventDefault();

const first = document.getElementById("p1").value;
const last = document.getElementById("p2").value;
const email = document.getElementById('email').value;
const iemail = document.getElementById('iemail').value;
const phone = document.getElementById('phone').value;
const roll = document.getElementById('roll').value;
const why = document.getElementById('why1').value;


const firstvalid = validateName(first);
const lastvalid = validateName(last);
const gendervalid = validateGender();
const emailvalid = validateEmail(email);
const iemailvalid = validateIEmail(iemail);
const phonevalid = validatePhoneNumber(phone);
const rollvalid = validateRollNumber(roll);
const whyvalid = validateWhy(why);

const result = document.getElementById('result');



if(firstvalid && lastvalid && gendervalid && emailvalid && iemailvalid && phonevalid && rollvalid && whyvalid){
    result.textContent='Valid Submission';
    alert("Great job! You have officially taken the first step");
}else{
    result.textContent='Invalid Submission';
    alert("Invalid! Check all inputs ");
}
});