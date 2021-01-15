import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import Headers from "./Header";
import "./styles.css";

type FormValues = {
  firstName: string;
};

const validationSchema = Joi.object({
  firstName: Joi.string().required(),
});

let renderCount = 0;

export default function App() {
  const { register, errors, handleSubmit, formState } = useForm<FormValues>({
    resolver: joiResolver(validationSchema),
  });
  const onSubmit = (data: FormValues) => console.log(data);
  renderCount++;

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" placeholder="First Name" ref={register} />
        {errors.firstName && (
          <span className="error-message">{errors.firstName.message}</span>
        )}
        <button type="submit">Submit</button>
      </form>

      {formState.isSubmitted && (
        <div className="success-note">Form submitted</div>
      )}
    </div>
  );
}
