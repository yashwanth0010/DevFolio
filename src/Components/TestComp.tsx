import { LoadingSpinner } from "./LoadingSpinner"

export const TestComp = () => {
  return (
    <div className="col-md-12 text-center">
      <button
        type="submit"
        className="button button-a button-big button-rouded disabled:cursor-not-allowed disabled:opacity-70">
        <LoadingSpinner />
      </button>
    </div>
  )
}