import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const handleGoogle = () => {};

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/XyHVG60/close-up-man-holding-box-with-food.jpg)",
        }}
      >
        <div className="card flex-shrink-0 w-full max-w-sm bg-slate-400 backdrop-filter  bg-opacity-20  shadow-xl ">
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign In</h3>
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control ">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn but btn-primary">Sign In</button>
            </div>
            <button onClick="" className="btn but btn-primary">
              Sign In with Google
            </button>
            <p className="mt-14 mb-14">
              <span className="text-zinc-400"> New Donor?</span>{" "}
              <Link to="/SignUp">
                <button className="text-white"> Sign Up Now</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

{
  /* <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/b3HZqGH/wallpaperflare-com-wallpaper-16.jpg)",
        }}
      >
        <div className="card flex-shrink-0 w-full max-w-sm bg-slate-400 backdrop-filter  bg-opacity-20  shadow-xl ">
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign In</h3>
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control ">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn but btn-primary">Sign In</button>
            </div>
            <button onClick={hangleGoogle} className="btn but btn-primary">
              Sign In with Google
            </button>
            <p className="mt-14 mb-14">
              <span className="text-zinc-400"> New to CineHub?</span>{" "}
              <Link to="/SignUp">
                {" "}
                <button className="text-white">Sign Up Now</button>
              </Link>
            </p>
          </form>
        </div>
      </div> */
}
