import { useForm } from "react-hook-form";

import Headers from "./Header";
import "./styles.css";

type FormValues = {
  firstName: string;
};

let renderCount = 0;

export default function App() {
  const { register, errors, handleSubmit, formState } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);
  renderCount++;

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="firstName"
          placeholder="First Name"
          ref={register({ required: true })}
        />
        {errors.firstName?.type === "required" && (
          <span className="error-message">First name cannot be empty</span>
        )}
        <button type="submit">Submit</button>
      </form>

      {formState.isSubmitted && (
        <div className="success-note">Form submitted</div>
      )}
    </div>
  );
}
