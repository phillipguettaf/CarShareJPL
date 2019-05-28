import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends React.Component {
    render() {
        let env = 'sandbox';
        let currency = 'AUD';
        let total = 10;

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!

            console.log("The payment is all good!", payment);

            if (payment.paid === true) {
                let hackString = "Thankyou for your order, we will deliver it to:\n"
                    + payment.address.line1 + ", " + payment.address.postal_code + ", " + payment.address.city
                    + ", " + payment.address.state
                    + "\n\nYou have paid a total of $" + total
                    + "\n\nThe receipt will be emailed to " + payment.email;
                alert(hackString)

            }
        };

	const onCancel = () =>
	{
		return;
	}


        // mifrent-buyer@hotmail.com is the buyer email
        const client = {
            //sandbox: 'demo_sandbox_client_id',
            sandbox: 'AXpbHEc57jKmuT_5bNUt4ZoLDtzpPWQNC5VPjjHAnDjEotA3WeL4k4vDNK6AIo3A6FuLspZGWeE_vX7Y',
            production: 'YOUR-PRODUCTION-APP-ID',
        };

        return (
            <div>
                <PaypalExpressBtn onSuccess={onSuccess} onCancel={onCancel} env={env} client={client} currency={currency} total={total}
                                  style={{layout: 'vertical', size: 'medium', color: 'gold', shape: 'rect'}}
                                  funding={{allowed: 'paypal.FUNDING.CARD, paypal.FUNDING.CREDIT'}}
                />
            </div>
        );
    }
}


export default Paypal;
