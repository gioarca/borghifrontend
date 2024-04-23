import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setTimeout(async () => {
      auth.signOut().then(() => {
        navigate("/signout"); // Reindirizza dopo il logout
      });
    }, 2000);
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!user) return <Link to={"/registrazione"}></Link>;

  if (user)
    return (
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
        className="min-h-screen z-0 flex justify-center bg-gradient-to-t"
      >
        <div className="flex justify-center flex-1 max-w-screen-xl m-0 z-10 bg-white shadow sm:rounded-lg sm:my-32 sm:mx-80 ">
          <div className="lg:w-1/2 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
                Ciao{" "}
                <span role="img" aria-label="hi" className="h-5">
                  👋
                </span>
              </h1>
              <p className="text-xl">{user.displayName}</p>
            </div>
            <div className="text-center m-5">
              <p className="">Cosa puoi fare qui?</p>
              <p>All'interno della piattaforma puoi:</p>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/loginSuccess"}>
                <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                  Accedere ai borghi
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/aggiungiunborgo"}>
                <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                  Aggiungere un borgo
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <a href={"/news"}>
                <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
                  Leggere le ultime notizie
                </button>
              </a>
            </div>

            <div className="text-center items-center justify-center">
              <button
                onClick={handleSignOut}
                className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
              >
                Esci
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;
