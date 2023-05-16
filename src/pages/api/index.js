// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import uuid from "react-uuid";

export default function handler(req, res) {
	const rows = [
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
	];

	res.status(200).json({ rows });
}
