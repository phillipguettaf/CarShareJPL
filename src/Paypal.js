import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends React.Component {



	render(props) {
		let env = 'sandbox';
		let currency = 'AUD';
		let total = this.props.total;

		const onSuccess = (payment) => {
		    // Congratulation, it came here means everything's fine!

		    console.log("The payment is all good!", payment);

		    if (payment.paid === true) {
			// Just incase
		    }
		};

		const onCancel = () =>
		{
			return;
		}


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
