//how much tutor will earn based on hourly rate and hours worked
// 2 parameters timesheet string and tutor level
// return tutor wage
function tutorWageCalculator(hourlyRate, level){

    if(hourlyRate === 75 && hours >= 7){
        var level1 = hours * hourlyRate;
        return level1;
    }
    else if(hourlyRate === 90 && hours >= 9 ){
       var level2 = hours * hourlyRate;
       return level2; 
    }
    else if(hourlyRate === 90 && hours >= 12){
         var level3 = hours * hourlyRate;
         return level3;
    }
}
console.log(tutorWageCalculator());