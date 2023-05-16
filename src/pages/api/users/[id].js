import uuid from "react-uuid";

export default function handler(req, res) {
	const { id } = req.query;

	const rows = [
		{
			scheduleId: "1",
			rows: [
				{
					name: "Miguel Moya",
					daysWorking: {
						sunday: "off",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Lorinda Hahn",
					daysWorking: {
						sunday: "off",
						monday: "on",
						tuesday: "on",
						wednesday: "off",
						thursday: "off",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Tanner Jepsen",
					daysWorking: {
						sunday: "off",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Eric Winkler",
					daysWorking: {
						sunday: "on",
						monday: "on",
						tuesday: "on",
						wednesday: "off",
						thursday: "off",
						friday: "on",
						saturday: "off",
					},
					id: uuid(),
				},
				{
					name: "Mike Salazar",
					daysWorking: {
						sunday: "on",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "off",
						saturday: "off",
					},
					id: uuid(),
				},
				{
					name: "Carl Jossart",
					daysWorking: {
						sunday: "on",
						monday: "off",
						tuesday: "off",
						wednesday: "off",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Loren Schuhart",
					daysWorking: {
						sunday: "off",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "off",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Ethan Hayes",
					daysWorking: {
						sunday: "off",
						monday: "on",
						tuesday: "on",
						wednesday: "off",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
			],
		},
		{
			scheduleId: "2",
			rows: [
				{
					name: "Miguel Moya",
					daysWorking: {
						sunday: "off",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Lorinda Hahn",
					daysWorking: {
						sunday: "off",
						monday: "on",
						tuesday: "on",
						wednesday: "off",
						thursday: "off",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Tanner Jepsen",
					daysWorking: {
						sunday: "off",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Eric Winkler",
					daysWorking: {
						sunday: "on",
						monday: "on",
						tuesday: "on",
						wednesday: "off",
						thursday: "off",
						friday: "on",
						saturday: "off",
					},
					id: uuid(),
				},
				{
					name: "Mike Salazar",
					daysWorking: {
						sunday: "on",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "off",
						saturday: "off",
					},
					id: uuid(),
				},
				{
					name: "Carl Jossart",
					daysWorking: {
						sunday: "on",
						monday: "off",
						tuesday: "off",
						wednesday: "off",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Loren Schuhart",
					daysWorking: {
						sunday: "off",
						monday: "off",
						tuesday: "on",
						wednesday: "on",
						thursday: "on",
						friday: "off",
						saturday: "on",
					},
					id: uuid(),
				},
				{
					name: "Ethan Hayes",
					daysWorking: {
						sunday: "off",
						monday: "on",
						tuesday: "on",
						wednesday: "off",
						thursday: "on",
						friday: "on",
						saturday: "on",
					},
					id: uuid(),
				},
			],
		},
	];

	const schedule = rows.find((r) => r.scheduleId === id);

	console.log(schedule);

	return res.status(200).json({ schedule });
}
