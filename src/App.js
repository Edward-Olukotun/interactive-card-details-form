import "./App.css";
import Front from "./images/bg-card-front.png";
import Back from "./images/bg-card-back.png";
import Desktop from "./images/bg-main-desktop.png";
import Complete from "./images/icon-complete.svg";
import { useState } from "react";

function App() {
  const [button, setButton] = useState(false);
  return (
    <>
      <div className="flex flex-col  overflow-hidden md:flex-row">
        <div className="h-screen ">
          <div>
            <img
              className="h-40 w-full md:h-[100%] md:w-96 "
              src={Desktop}
              alt="/"
            />
          </div>
          <div className="flex flex-col mr-2 md:flex-col-reverse md:-mt-[140%] md:w-96 ">
            <div className="w-80 h-44 -mt-32 ml-12  md:ml-[40%] md:w-80">
              <img className="object-cover md:mt-60 " src={Back} alt="/" />
            </div>
            <div className="w-80 h-44 -mt-32 ml-6 pt-14 md:ml-[30%]">
              <img className="object-cover" src={Front} alt="/" />
            </div>
          </div>
        </div>

        <div className=" w-full h-full flex -mt-96 mb-40 md:mt-0 md:ml-24 md:mr-5 ">
          <div className="flex justify-center w-full   mt-10 md:mt-48">
            {button ? (
              <div className="w-full h-full text-center -mt-20 pt-5 mx-10">
                <div className="flex justify-center pb-10">
                  <img src={Complete} alt="/" />
                </div>
                <h1>THANK YOU</h1>
                <p>We've added your card details </p>
                <button
                  onClick={() => setButton(!button)}
                  className="bg-dark text-white mt-5 w-full rounded-lg h-9 "
                >
                  continue
                </button>
              </div>
            ) : (
              <div className="mx-10 md:mx-0 -mt-24 md:mt-0">
                <form className="w-full">
                  <label className="flex flex-col ">
                    CARD HOLDER NAME
                    <input
                      className="border rounded-md border-gray-500 pl-5"
                      type="text"
                      name="name"
                      placeholder=" e.g. Jane Appleseed "
                    />
                  </label>
                  <label className="flex flex-col">
                    CARD NUMBER
                    <input
                      className=" border rounded-md border-gray-500 pl-5"
                      type="text"
                      name="number"
                      placeholder="e.g. 1234 5678 9123 0000"
                    />
                  </label>
                  <div className="mt-5 flex">
                    <label className="flex flex-col mr-10">
                      EXP.DATE (MM/YY)
                      <div className="flex">
                        <input
                          className=" w-12 mr-5 border rounded-md border-gray text-gray pl-2 mt-1"
                          type="text"
                          name="date"
                          placeholder="MM"
                        />
                        <input
                          className=" w-12 border rounded-md border-gray text-gray pl-2 mt-1"
                          type="text"
                          name="date"
                          placeholder="YY"
                        />
                      </div>
                    </label>
                    <label className="flex flex-col w-fit">
                      CVV
                      <input
                        className=" w-full border rounded-md border-gray text-gray pl-5 mt-1"
                        type="text"
                        name="date"
                        placeholder="e.g.123"
                      />
                    </label>
                  </div>

                  <button
                    onClick={() => setButton(!button)}
                    className="bg-dark text-white mt-5 w-full rounded-lg h-9"
                  >
                    confirm
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
