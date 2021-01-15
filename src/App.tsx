import { useForm } from "react-hook-form";
import Headers from "./Header";
import "./styles.css";

type FormValues = {
  firstName: string;
};

let renderCount = 0;

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
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
        <input type="submit" />
      </form>
    </div>
  );
}
