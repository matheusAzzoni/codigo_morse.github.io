function fadeIn(elem){
    "use strict";
    elem.style.display="block";
    elem.style.opacity=0;
    var i=0;
    var inte = setInterval(function(){
        elem.style.opacity= Number(elem.style.opacity)+0.3;
        if(i>=1.2){
            clearInterval(inte);
        }
        else{
            i++;
        }
    },100);
}
function hide(elem){
    elem.style.display="none";
}
window.onload=function(){
    "use strict";
    var
    decBtn=document.getElementById("decBtn"),
    encBtn=document.getElementById("encBtn"),
    encText=document.getElementById("encText"),
    decCode=document.getElementById("decCode"),
    encResult=document.getElementById("encResult"),
    decResult=document.getElementById("decResult"),
    letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"," ","\n"],
        symbols=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.","^","\n"];
    /// encode
    encBtn.onclick=function(){
       var txt=encText.value.trim().toUpperCase().split(""),
       code="";
       for(var i in txt){
           code+=symbols[letters.indexOf(txt[i])]+" ";
       }
       encResult.innerText=code;
       fadeIn(encResult);
       fadeIn(encBtnRes);
    }
    encBtnRes.onclick=function(){
        hide(encResult);
        hide(encBtnRes);
    }


    /// decode
    decBtn.onclick=function(){
        
        var code=decCode.value.trim().replace(/_|¯|—|–/g,"-").split(" "),
        txt="";
        
        for(var i in code){
            txt+=letters[symbols.indexOf(code[i])];
        }
        decResult.innerText=txt.replace("undefined","");
        fadeIn(decResult);
        fadeIn(decBtnRes)
    }
    decBtnRes.onclick=function(){
        hide(decResult);
        hide(decBtnRes);
    }
    
}
function GoToHomePage()
{
    window.location = 'index.html';
}
function GoToTradutor()
{
    window.location = '#tradutor';
}
function GoToTop()
{
    window.location = '#b';
}
$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});