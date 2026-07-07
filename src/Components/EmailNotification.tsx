import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../components/ui/alert"
import { CircleCheckBig } from 'lucide-react';
import { CircleX } from 'lucide-react';

type EmailNotificationProps = {
  success: boolean;
};


const EmailNotification: React.FC<EmailNotificationProps> = ({ success }) => {
  return success ? (
    <Alert className="max-w-md border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-50">
      <div className="flex items-center gap-3 px-4 py-3">
        <CircleCheckBig className="h-5 w-5" />
        <div>
          <AlertTitle>Email Sent Successfully!</AlertTitle>
        </div>
      </div>
    </Alert>
  ) : (
    <Alert className="max-w-md border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-50">
      <div className="flex items-center gap-3 px-4 py-3">
        <CircleX className="h-5 w-5" />
        <div>
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription className="max-w-xs">
            The email could not be sent. Please try again later.
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default EmailNotification;