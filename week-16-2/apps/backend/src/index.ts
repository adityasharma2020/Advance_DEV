import express, { Request, Response } from 'express';
import { BACKEND_URL } from '@repo/common/config';
const app = express();
const PORT = 5000;
console.log(BACKEND_URL);

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: 'hello world',
	});
});

app.listen(PORT, () => {
	console.log(`server running on port: `, PORT);
});
