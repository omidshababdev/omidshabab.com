import PaymentsHistory from "./_components/PaymentsHistory";
import SubscriptionCard from "./_components/SubscriptionCard";

const Page = () => {
     return (
          <div>
               Billing
               <SubscriptionCard />
               <PaymentsHistory />
          </div>
     );
}

export default Page;