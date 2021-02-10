import React from 'react'

const Features = () => {
	return(
		<div className="container">
			<div className="row valign-wrapper">
				<div className="col m6 l6">
					<h3 className="bold">Generate Conflict-free Timetable</h3>
					<h6>Create all possible schedules with no time or name overlaps</h6>
				</div>
				<div className="col m6 l6">
					<img className="responsive-img" src="res/timetable.png" alt="timetable maker" />
				</div>
			</div>

			<div className="row valign-wrapper">
				<div className="col m6 l6 hide-on-med-and-up">
					<h3 className="bold">Customize Your Alarm System</h3>
					<h6>Various options to adjust the alarms for reminding you of any specific tasks</h6>
				</div>
				<div className="col m6 l6">
					<img className="responsive-img r-margin" src="res/alarm.png" alt="timetable maker" />
				</div>
				<div className="col m6 l6 hide-on-small-only">
					<h3 className="bold">Customize Your Alarm System</h3>
					<h6>Various options to adjust the alarms for reminding you of any specific tasks</h6>
				</div>
			</div>

			<div className="row valign-wrapper">
				<div className="col m6 l6">
					<h3 className="bold">Save Your Events with Note Taking</h3>
					<h6>Capture all important information by taking notes directly on any study time</h6>
				</div>
				<div className="col m6 l6">
					<img className="responsive-img l-margin" src="res/note.png" alt="timetable maker" />
				</div>
			</div>

		</div>
	)
}

export default Features
