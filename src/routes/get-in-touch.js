import mailgun from "mailgun-js"

export async function post(request) {


    const API_KEY = 'key-0dc454a132e089f79541cc7333589384';
    const DOMAIN = 'mg.weblime.com';

    const mailgunInstance = mailgun({ apiKey: API_KEY, domain: DOMAIN })
    // console.log(request.body.first_name)
    // const body = JSON.parse(request.body)
    const { first_name, last_name } = request.body;

    // //console.log(body)

    const data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'bigeba8@gmail.com, bar@example.com',
    subject: 'Hello',
    text: `hello ${first_name} ${last_name}`
    };

    mailgunInstance.messages().send(data, (error, body) => {
        console.log(body);
        console.log(error);
        });

    return {
        body: data,
        status: 200
    }
}