var eventDate = "Mar 1, 2021 00:00:01";
var eventTitle = "Siemens";
var eventSubtitle = "New Organization Day 1";
var TimePassedLabel = "Time Passed: "
var showDate = true;

document.getElementById("eventTitle").innerHTML = eventTitle;

if (showDate == true){
    document.getElementById("eventDate").innerHTML = eventDate;
}
document.getElementById("eventSubtitle").innerHTML = eventSubtitle;

var eventDateTime = new Date(eventDate).getTime(); 

//Function to update the CountDown Timer every second
var x = setInterval(
    function() { 

        //Getting Current Date & Time 
        var CurrentDateTime = new Date().getTime(); 

        //Finding Remaining Date and Time between Current Date and Event Date
        var RemainingDateTime = eventDateTime - CurrentDateTime; 

        //Calculation for Days, Hours, Minutes, Seconds
        var days = Math.floor(RemainingDateTime / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((RemainingDateTime %(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((RemainingDateTime % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((RemainingDateTime % (1000 * 60)) / 1000); 
        
        //Displaying the Result
        document.getElementById("day").innerHTML = days ; 
        document.getElementById("hour").innerHTML = ('0' + hours).slice(-2); 
        document.getElementById("minute").innerHTML = ('0' + minutes).slice(-2);
        document.getElementById("second").innerHTML = ('0' + seconds).slice(-2);

        //If CountDown is Over. Set the null values.
        if (RemainingDateTime < 0) {

            //display Time Passed div when countdown is over
            var d = document.getElementById("eventTimePassed");
            document.getElementById("TimePassedLabel").innerHTML = TimePassedLabel;
            d.style.display = "block"; 

            //setting the values to Zero (0)
            document.getElementById("day").innerHTML ='0'; 
            document.getElementById("hour").innerHTML ='00'; 
            document.getElementById("minute").innerHTML ='00' ;  
            document.getElementById("second").innerHTML = '00';

            //function to show the time passed values in counter 
            var checkBox = document.getElementById("checkTimePassed");
            if (checkBox.checked == true){
                
                    //calculating passed time
                    var PassedDateTime = CurrentDateTime - eventDateTime; 
        
                    //Calculation for Days, Hours, Minutes, Seconds
                    var days = Math.floor(PassedDateTime / (1000 * 60 * 60 * 24)); 
                    var hours = Math.floor((PassedDateTime %(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
                    var minutes = Math.floor((PassedDateTime % (1000 * 60 * 60)) / (1000 * 60)); 
                    var seconds = Math.floor((PassedDateTime % (1000 * 60)) / 1000); 
        
                    //Displaying the Result
                    document.getElementById("day").innerHTML = days ; 
                    document.getElementById("hour").innerHTML = ('0' + hours).slice(-2); 
                    document.getElementById("minute").innerHTML = ('0' + minutes).slice(-2);
                    document.getElementById("second").innerHTML = ('0' + seconds).slice(-2);
            }
        }
        
    }, 1000
);


