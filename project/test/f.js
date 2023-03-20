function form1(){
    var formObj=document.getElementById("star");
    if(FormDataEvent(formObj)){
        var star = valueOfForm(formObj);
        if(formObj.details.checked){
            displayDetails(formObj,star);
        else
            alert("your star: "+valueToDecimalPlace(star));
        }
    }
}
