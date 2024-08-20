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
      
        const selectedDate = new Date(dateInput.value + "T" + alarmTimeInput.value);

        if (!dateInput.value || !alarmTimeInput.value) {
            alert('Please select date and time.');
            return;
        }

        if (selectedDate <= now) {
            alert('Invalid time. Please select a future date and time.');
            return;
        }

        if (alarmsArray.includes(selectedDate.toString())) {
            alert('You cannot set multiple alarms for the same time.');
            return;
        }

        if (count < 5) {
            //  curent time
            const now = new Date();
            const timeUntilAlarm = selectedDate - now;
            const alarmlistDiv = document.createElement('div');
            alarmlistDiv.classList.add('alarm');
            alarmlistDiv.innerHTML = 
                `<span>${selectedDate.toLocaleString()}</span>
                <img src="minus-sign.png" title="Delete" class="delete-alarm">`;
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

            const timeoutID = setTimeout(() => {
                alarmSound.play(); // Play the alarm sound
                alert('Alarm ringing!');
                alarmlistDiv.remove();
                count--;
                const alarmIndex = alarmsArray.indexOf(selectedDate.toString());
                if (alarmIndex !== -1) {
                    alarmsArray.splice(alarmIndex, 1);
                }
            }, timeUntilAlarm);

            alarmlistDiv.timeoutID = timeoutID;
            contan.appendChild(alarmlistDiv); 
            alarmsArray.push(selectedDate.toString());
            count++;
        } else {
            alert('You can only set a maximum of 5 alarms.');
        }
    });
});
