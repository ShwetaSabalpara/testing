import SendGridMail from '@sendgrid/mail';

export default async (req, res) => {
    const {name, email, number, subject, text} = req.body;

    SendGridMail.setApiKey(process.env.SENDGRID_API_KEY);


    const confirmMsg = {
        to: email,
        from:  { 
            email: process.env.SENDGRID_SENDER, 
            name: process.env.SENDGRID_SENDER_NAME,
        },
        templateId: process.env.SENDGRID_TPL_CONTACT_CONFIRM,
        dynamic_template_data: {
          firstName: name,
          subject,
        },
      };

    const notifyMsg = {
        to: process.env.CONTACT_NOTIFY_EMAIL,
        from:  { 
          email: process.env.SENDGRID_SENDER, 
          name: process.env.SENDGRID_SENDER_NAME,
        },
        templateId: process.env.SENDGRID_TPL_CONTACT_NOTIFY,
        dynamic_template_data: {
          firstName: name,
          email,
          phone: number, 
          subject,
          message: text,
        },
    };

    try {
        await SendGridMail.send(confirmMsg)
          .catch(error => {
            console.error(`SendGrid Error: ${error.code} :${error.message}`);
            throw error;
          });
        
        await SendGridMail.send(notifyMsg)
          .catch(error => {
            console.error(`SendGrid Error: ${error.code} :${error.message}`);
            throw error;
          });

        

        res.status(200).send("Email send successfully");

    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}
