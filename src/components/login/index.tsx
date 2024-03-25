import { useForm } from "react-hook-form"
import authService from "@/services/auth.service";

const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "shiva.aryal+parent@intuji.com",
      password: "Intuji@123",
    }
  });

  const onSubmit = async (data: any) => {
    await authService.login(data.email, data.password);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" className="text-black" />
      <input {...register("password")} placeholder="Password" className="text-black" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm