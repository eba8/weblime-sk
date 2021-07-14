// import mailgun from "mailgun-js"
// import dotenv from 'dotenv';

// dotenv.config();
// const {DOMAIN} = process.env
// const {MAILGUN_KEY} = process.env

// export async function post(request) {

//     const mailgunInstance = mailgun({ apiKey: MAILGUN_KEY, domain: DOMAIN })
//     // console.log(request.body.first_name)
//     // const body = JSON.parse(request.body)
//     const { first_name, last_name } = request.body;

//     const data = {
//     from: 'Excited User <me@samples.mailgun.org>',
//     to: 'bigeba8@gmail.com, bar@example.com',
//     subject: 'Hello',
//     text: `hello ${first_name} ${last_name}`
//     };

//     mailgunInstance.messages().send(data, (error, body) => {
//         console.log(body);
//         console.log(error);
//         });

//     return {
//         body: data,
//         status: 200
//     }
// }