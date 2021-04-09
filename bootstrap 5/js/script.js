var akanMale =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var akanFemale =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var month= parseInt(document.getElementById("month").value);
var year= parseInt(document.getElementById("year").value);
var date = parseInt(document.getElementById("date").value);
var date =newDate(year + "/" + month + "/" + date);
var gender = print();
var date2 = date.getDay();
var akan;
function getAkanName(){
    if(day <1 || day >31){
        alert("Invalid date");
        return false;
    }
    if(month <0 || month >12 || (month == 2 && day > 29)){
       alert("Invalid month");
       return false; 
    }
    if(year<1950 || year>2022){
        alert("Invalid month");
        return false;
    }
    if(gender === "male"){
        akan= akanMale[day2];
    }
            akan= akanFemale[day2];
        }
       alert("You were born on " + dayOfTheWeek[day2] + " and your Akan name would be: " + akan);
    }
    function print(){
        var gender= document.getElementsByName("gender");
        for(i=o;i<gender.length;i++){
            if(gender[i].checked){
                return(gender[i].value)
            }
        }
    }
}