const responses = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
];

export default async function handler(req, res) {
	setTimeout(() => {
		res.send(responses[Math.floor(Math.random() * responses.length)])
	}, 3000)
}