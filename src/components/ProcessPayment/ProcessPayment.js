import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCardForm from './PaymentCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51J4sroDQwEBQewLyKU46KZKTqEiioQG6tkcoRAXEVCASmAvYxAfMX815EJ59WYhtqigAT4rQccp4G29xfIOhy3jO00Mn1BnmgD');

const ProcessPayment = ({handlePaymentinfo}) => {
    return (
        <div >
            <Elements stripe={stripePromise}>
                <PaymentCardForm handlePaymentinfo={handlePaymentinfo}></PaymentCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment