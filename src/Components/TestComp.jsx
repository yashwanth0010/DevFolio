import { EmailNotification } from "./EmailNotification";

export const TestComp = () => {
  return (
    <div className="toast-wrap">   
        <EmailNotification type="success" title="Message sent" message="Your message has been sent successfully." onClose={() => {}} />
        </div>
  )
};

export default TestComp;