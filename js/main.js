var eventDate = "Mar 1, 2021 00:00:01";
var eventTitle = "Siemens";
var eventSubtitle = "New Organization Day 1";
var showDate = true;

document.getElementById("eventTitle").innerHTML = eventTitle;

if (showDate == true){
    document.getElementById("eventDate").innerHTML = eventDate;
    document.getElementById("eventSubtitle").innerHTML = eventSubtitle;
} else {
    document.getElementById("eventSubtitle").innerHTML = eventSubtitle;
}

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
        document.getElementById("day").innerHTML =days ; 
        document.getElementById("hour").innerHTML =hours; 
        document.getElementById("minute").innerHTML = minutes;  
        document.getElementById("second").innerHTML =seconds;  

        //If CountDown is Over. Set the null values.
        if (RemainingDateTime < 0) { 
                clearInterval(x); 
                document.getElementById("day").innerHTML ='0'; 
                document.getElementById("hour").innerHTML ='00'; 
                document.getElementById("minute").innerHTML ='00' ;  
                document.getElementById("second").innerHTML = '00'; } 
    }, 1000
); 