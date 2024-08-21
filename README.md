DIGITAL ALARM CLOCK
Description:
This is a digital alarm web application where a user can set multiple alarms. The first element of this alarm clock is a display where the current time is being shown. After the current time display, there is a form that takes the input time and when the set alarm button is pressed the input time is added to the upcoming alarms list. When the current time matches any element of the upcoming alarm list, it shows an alert and plays an audio to alert the users. there is a stop alarm button to stop the audio. The elements in upcoming alarm list comes with a delete button which is used to delete that particular alarm form the alarm list. 
TECHSTACK: 
HTML, CSS, JavaScript 
SUMMARY: 
•	Displaying the current time. 
•	Allowing users to set alarms for future times.
•	Handling up to 5 alarms. 
•	Managing alarms with options to delete them. 
•	Triggering an alarm sound and alert when an alarm goes off.
•	Displaying the stop button to stop the alarm sound.










Screen Short Of  The Alarm Clock:![Screenshot 2024-08-21 063552](https://github.com/user-attachments/assets/77d025a5-ec28-48bd-9409-098e338982be)


 
Flowchart Diagram:
Below is a textual representation of the flowchart for code.
Flowchart Components:
1.	Start
o	Indicates the start of the script.
2.	Initialize Variables and Elements
o	Retrieve elements and initialize variables: currentTimeDisplay, setAlarm, dateInput, alarmTimeInput, contan, alarmSound, stopAlarmButton, alarmsArray, and count.
3.	Function: updateTime
o	Update the current time every second.
o	Action: Call setInterval(updateTime, 1000).
4.	Function: stopAlarm
o	Action: Stop the alarm sound and hide the stop button.
5.	Event Listener: setAlarm Button Click
o	Triggered when the user clicks the "set alarm" button.
6.	Check Date and Time Inputs
o	Decision: Are dateInput.value and alarmTimeInput.value provided?
	Yes: Proceed to next step.
	No: Show alert "Please select date and time." and return to step 5.
7.	Check If Alarm Time is in the Future
o	Decision: Is selectedDate greater than now?
	Yes: Proceed to next step.
	No: Show alert "Invalid time. Please select a future date and time." and return to step 5.
8.	Check for Duplicate Alarms
o	Decision: Is selectedDate already in alarmsArray?
	Yes: Show alert "You cannot set multiple alarms for the same time." and return to step 5.
	No: Proceed to next step.
9.	Check Alarm Limit
o	Decision: Is count less than 5?
	Yes: Proceed to next step.
	No: Show alert "You can only set a maximum of 5 alarms." and return to step 5.
10.	Create and Display Alarm
o	Action: Create a new alarm element, set the timeout for the alarm, and add it to the contan container.
o	Action: Add the alarm to alarmsArray and increment count.
11.	Set Timeout for Alarm
o	Action: When the timeout occurs, play the alarm sound and show the stop button.
o	Action: Remove the alarm from the list and decrement count.
12.	Event Listener: stopAlarmButton Click
o	Triggered when the user clicks the stop button.
o	Action: Call stopAlarm function to stop the alarm sound and hide the button.
13.	End
o	Indicates the end of the script
					                                                                   ----------------  By Shabana Shaik
