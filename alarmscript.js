document.addEventListener('DOMContentLoaded', () => {
    // The element where the current time will be displayed.
    const currentTimeDisplay = document.getElementById('current-time');
    // Element that users will click to set the alarm.
    const setAlarm = document.getElementById('set-alarm');
    // Element that users will select the date for the alarm.
    const dateInput = document.getElementById('alarmDate');
    // Element that users will select the time to set the alarm.
    const alarmTimeInput = document.getElementById('alarm-time');
    // Alarms list container
    const contan = document.getElementById('alarmslistdiv');
    // Access the audio element
    const alarmSound = document.getElementById('alarm-sound'); 

    // Array to store alarm times
    let alarmsArray = [];
    //count variable to check the number of alarms
    let count = 0;

    // Function to update the displayed current time.
    function updateTime() {
        const now = new Date(); 
        currentTimeDisplay.textContent = now.toLocaleTimeString();
    }

    // Call `updateTime` every 1000 milliseconds (1 second)
    setInterval(updateTime, 1000);
    //setting up the alarm 
    setAlarm.addEventListener('click', () => {
         const now = new Date(); 
      //Constructs a Date object from the selected date and time inputs.
        const selectedDate = new Date(dateInput.value + "T" + alarmTimeInput.value);
//Checks if both date and time inputs are provided.if not alert the user.
        if (!dateInput.value || !alarmTimeInput.value) {
            alert('Please select date and time.');
            return;
        }
//Validate that the selected date and time are in the future.if not alert the user.
        if (selectedDate <= now) {
            alert('Invalid time. Please select a future date and time.');
            return;
        }
   //Ensure no duplicate alarms are set.
        if (alarmsArray.includes(selectedDate.toString())) {
            alert('You cannot set multiple alarms for the same time.');
            return;
        }
   //Limit the number of alarms to 5.
        if (count < 5) {
            //  curent time
            const now = new Date();
            const timeUntilAlarm = selectedDate - now;
           // Creates a new div element to display the alarm information.
            const alarmlistDiv = document.createElement('div');
            alarmlistDiv.classList.add('alarm');
             //Sets its content to show the alarm time and a delete button
            alarmlistDiv.innerHTML = 
                `<span>${selectedDate.toLocaleString()}</span>
                <img src="minus-sign.png" title="Delete" class="delete-alarm" alt="Delete">`;
           .
            //Adds an event listener to the delete button to remove the alarm from the list, cancel the timeout, and decrement the alarm count.
            const deleteButton = alarmlistDiv.querySelector('.delete-alarm');
            deleteButton.addEventListener('click', () => {
                clearTimeout(alarmlistDiv.timeoutID);
                alarmlistDiv.remove();
                count--;
                const idx = alarmsArray.indexOf(selectedDate.toString());
                if (idx !== -1) {
                    alarmsArray.splice(idx, 1);
                }
            });
//Sets a timeout that triggers when the alarm is supposed to go off.
            const timeoutID = setTimeout(() => {
                //Plays the alarm sound, shows an alert, and removes the alarm from the list.
                alarmSound.play(); // Play the alarm sound
                
                alert('Alarm ringing!');
                alarmlistDiv.remove();
                count--;
                const alarmIndex = alarmsArray.indexOf(selectedDate.toString());
                if (alarmIndex !== -1) {
                    alarmsArray.splice(alarmIndex, 1);
                }
            }, timeUntilAlarm);
            //Assigns the timeout ID to the alarm div.
            alarmlistDiv.timeoutID = timeoutID;
            //Appends the new alarm element to the contan container.
            contan.appendChild(alarmlistDiv); 
            //Updates the alarmsArray and increments the alarm count.
            alarmsArray.push(selectedDate.toString());
            count++;
        } else {
            //alert the user for reaching the max limit.
            alert('You can only set a maximum of 5 alarms.');
        }
    });
});
