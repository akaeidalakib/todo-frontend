import { useForm } from 'react-hook-form';
import signin from '../http/signin';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/dashboard";
  console.log('state in the location login page', location.state)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const res =await signin(data);
    console.log(res);
    if (res.status ==="success") {
        localStorage.setItem("accessToken",res.accessToken)
        localStorage.setItem("refreshToken",res.refreshToken)
        localStorage.setItem("user",JSON.stringify(res.data))
        navigate(from, { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="email" className="mb-1 inline-block font-medium text-emerald-900">E-mail</label>
                <input placeholder="akib@g.com" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="email" name="email" {...register('email', { required: true })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="password" className="mb-1 inline-block font-medium text-emerald-900">Password</label>
                <input placeholder="******"  type="password" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="password" name="password" {...register('password', { required: true })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring">Login</button>
              </div>
              <p className="text-xs text-gray-600 sm:text-sm">* New customer? <Link to={'/signup'}>Signup here.</Link></p>
    </form>
  );
};

export default SigninForm;
