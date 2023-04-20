//how much tutor will earn based on hourly rate and hours worked
// 2 parameters timesheet string and tutor level
// return tutor wage
function tutorWageCalculator(hourlyRate, level){

    
    const hours = timesheet.split('-');
    if(hours.length < 5 || hours.length > 7) {
        return 0;
    }
    let weeklyHours = 0;
    for (let hour of hours) {
        weeklyHours += Number(hour);
    }
    if (level == 1) {
        let wage = 75 * weeklyHours;
        if (weeklyHours > 40) {
            wage += (wage - 40) * 0.07
        }
        return wage;
    }
    if (level == 2) {
        const wage = 90 * weeklyHours;
        if (weeklyHours > 40) {
            wage += (wage - 40) * 0.09
        }
        return wage;
    }
    if (level == 3) {
        const wage = 109 * weeklyHours;
        if (weeklyHours > 40) {
            wage += (wage - 40) * 0.12
        }
        return wage;
    }
    
}

console.log(tutorWageCalculator('4-6-9-6-8', 1));