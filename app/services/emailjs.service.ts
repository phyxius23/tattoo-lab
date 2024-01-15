export async function send(myname: string, name: string, email: string, message: string, privacy: boolean) {

    const data = {
        service_id: 'service_kqd9047',
        template_id: 'template_f5x6uuq',
        user_id: 'vq0Jgo8VpKRRf3TJX',
        template_params: {
            my_name: myname,
            guest_name: name,
            guest_email: email,
            guest_message: message,
            guest_privacy: privacy
        }
    }

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    });

    if (await res.text() === 'OK') {
        return res;
    } else {
        throw new Error('error sending email');
    }
}