import { Client } from 'pg';

const client = new Client({
	connectionString:
		'YOURDATABASE_URL',
});

client.connect();

async function createuserTable() {
	const result = await client.query(`
        CREATE TABLE users(
            id serial primary key,
            username varchar(50) unique not null,
            email varchar(255) unique not null,
            password varchar(255) not null,
            created_at timestamp with time zone default current_timestamp
        )

    `);
	console.log(result);
}
async function createAddresssTable() {
	const res = await client.query(`
        CREATE table address(
            id serial primary key,
            user_id integer  not null,
            city varchar(255) not null,
            country varchar(255) not null,
            created_at timestamp with time zone default current_timestamp ,
            foreign key (user_id) REFERENCES users(id) on delete cascade
        )
    `);
	console.log(res);
}

async function insertAddress() {
	const insetQuery = `Insert into address (user_id,city,country) values ($1,$2,$3)`;
	const values = [1, 'new york', 'USA'];
	const res = await client.query(insetQuery, values);
	console.log(res);
}
async function getAddress() {
	const query = `Select city, country from address where user_id = 1`;
	const res = await client.query(query);
	console.log(res?.rows[0]);
}

async function insertData() {
	const insertquery = `Insert into users (username, email, password) values  ($1,$2,$3)`;
	const insertValues = ['username3', 'aditya3@gmail.com', 'userPassword3'];
	const response = await client.query(insertquery, insertValues);
	console.log('response:', response);
}

async function getUsers(email: string) {
	const query = `select * from users where email=$1`;
	const values = [email];

	const res = await client.query(query, values);

	if (res.rows.length > 0) {
		console.log('User found:', res.rows[0]);
	} else {
		console.log('user not fonud');
	}
}

async function getJoinedData() {
	const query = `select u.id ,u.username, a.city 
        from users u
        inner join address a  ON u.id = a.user_id
       
    `;
	const res =  await client.query(query);
	console.log(res?.rows);
}

// createuserTable();
// createAddresssTable();
// insertData();
// insertAddress();
// getUsers('adityaa@gmail.com');
// getAddress();
getJoinedData();
