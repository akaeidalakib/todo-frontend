import Header from "../../components/Header";
import SigninForm from "../../components/SigninForm";

const Home = () => {
  
    return (
        <div>
            <Header/>

<div className="relative">
  <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="absolute inset-0 h-full w-full object-cover" alt="" />
  <div className="relative bg-emerald-700 bg-opacity-90">
    <svg className="absolute inset-x-0 -bottom-1 text-white" viewBox="0 0 1160 163">
      <path fill="currentColor" d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"></path>
    </svg>
    <div className="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">Simplify Your Tasks, Achieve More!</h2>
          <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg">
          The ultimate tool for efficient task management, boosting productivity effortlessly.
          </p>
        </div>
        <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
          <div className="overflow-hidden rounded-xl border-t-4 border-emerald-600 bg-white p-7 shadow-2xl shadow-emerald-300 sm:p-10">
            <h3 className="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 sm:text-center sm:text-2xl">Sign in your Account</h3>
            <SigninForm/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Home;