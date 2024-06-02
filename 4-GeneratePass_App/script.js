const passwordInput = document.getElementById("password");
const upperCase = "ZXCVBNMASDFGHJKLQWERTYUIOP";
const lowerCase = "zxcvbnmasdfghjklqwertyuiop";
const symbols = "~!@#$%^&*()_?.][}{";
const numbers = "0123456789";
const allChars = upperCase + lowerCase + symbols + numbers;
const passwordLenght = 24;
function generatePassword(){
    let password = "";
    while(password.length < passwordLenght){
        console.log(allChars[Math.floor(Math.random() * allChars.length)]);
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordInput.value = password;
}
function copyPassword(){
    passwordInput.select();
    document.execCommand('copy');

}