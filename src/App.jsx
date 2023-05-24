import Accordion from "./components/Accordion/Accordion";

import woman from "./assets/images/illustration-woman-online-mobile.svg";

function App() {
  return (
    <div className="min-h-screen p-5 flex items-center justify-center bg-gradient-to-b from-soft-violet to-soft-blue text-verydark-desaturated-blue">
      <div className="main-container max-w-[35%] bg-white rounded-3xl flex flex-col justify-center items-center gap-6 px-10 py-14">
        <img className="h-52" src={woman} alt="" />
        <div className="">
          <h1 className="text-2xl text-center font-bold pb-6">FAQ</h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default App;
