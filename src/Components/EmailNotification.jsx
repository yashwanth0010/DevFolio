import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "../../components/ui/alert"



const EmailNotification = () => {
  return (
    <Alert className="max-w-md">
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
      </AlertDescription>
    </Alert>
  )
}
export default EmailNotification;
