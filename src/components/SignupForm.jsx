// SignupForm.jsx
import { useForm } from 'react-hook-form';
import signup from '../http/signup';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const res =await signup(data);
    console.log(res.status);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="username" className="mb-1 inline-block font-medium text-emerald-900">user name</label>
                <input placeholder="akib12" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" name="username" {...register('username', { required: true })} />
                {errors.username && <span>This field is required</span>}
              </div>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="email" className="mb-1 inline-block font-medium text-emerald-900">E-mail</label>
                <input placeholder="akib@g.com" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="email" name="email" {...register('email', { required: true })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="password" className="mb-1 inline-block font-medium text-emerald-900">E-mail</label>
                <input placeholder="******"  type="password" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="password" name="password" {...register('password', { required: true })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring">Start Trial</button>
              </div>
              <p className="text-xs text-gray-600 sm:text-sm">* Already have account?<Link to={'/'}>Signup here.</Link> </p>
    </form>
  );
};

export default SignupForm;
