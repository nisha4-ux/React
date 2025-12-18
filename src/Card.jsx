// function Card(){
//   return(
//     <div className=  "bg-pink-300 h-80 w-100  rounded-lg  px-9.5 py-9.5 mx-120 my-10">
//     <h1 className="text-3xl py-7 font-semibold" >🍓SweetBerry Types & Tastes Menu ✨🍓</h1>
//     <p className="font-serif ">1️⃣ Pink SugarBerry 🍥

// Taste: Super sweet, melt-in-mouth, like cotton candy 🍬

// Price: ₹49 per cup

// Vibe: Looks cute, tastes cuter 💗</p>
//     </div>

//   );
// }

// export default Card;

// function Card(){
//   return (
//   <div>
//      <p>Welcome to  the menu of Sweetberry   Shop</p>
//      </div>
//   );
// }
// export default Card;
function Card({title, price}) {
  return (
    <div className="bg-white-400 h-200 w-370 px-40 py-8  flex flex-wrap  justify-center gap-20">
      {/* <h2>Social Media Marketing</h2> */}
      <div className="bg-pink-200 h-80 w-80 p-4 pl-4 rounded-2xl ">
        <h1 className="bg-pink-300 h-15 w-15 rounded-4xl p-4 my-4 font-bold">
          Icon
        </h1>
        <h1 className="font-bold text-blue-950 text-2xl mt-4">
          Social Media <br />
          Marketing
        </h1>
        <p className="text-gray-600 mt-2">
          Connect with customers on social media and build a strong online
          presence{" "}
        </p>
        <button className="px-10 py-4 bg-indigo-900 mt-6 rounded-2xl text-amber-50 font-bold">
          Read More
        </button>
      </div>
      <div className="bg-purple-400 h-80 w-80 p-4 rounded-2xl ">
        <h1 className="bg-indigo-900 h-15 w-15 rounded-4xl p-4 my-4 font-bold text-amber-50">
          Icon
        </h1>
        <h1 className="font-bold text-2xl mt-4 text-amber-50">
          Search Engine <br />
          Optimization( )
        </h1>
        <p className="mt-2  w-80 text-amber-50">
          Improve your website search engine ranking and drive more organic
          traffic to your site
        </p>
        <button className="px-10 py-4 bg-indigo-900 mt-6 rounded-2xl text-amber-50 font-bold">
          Read More
        </button>
      </div>
      <div className="bg-pink-200 h-80 w-80 p-4 rounded-2xl ">
        <h1 className="bg-pink-300 h-15 w-15 rounded-4xl p-4 my-4 font-bold">
          Icon
        </h1>
        <h1 className="font-bold text-blue-950 text-2xl mt-4">
          Social Media <br />
          Marketing
        </h1>
        <p className="text-gray-600 mt-2">
          Connect with customers on social media and build a strong online
          presence{" "}
        </p>
        <button className="px-10 py-4 bg-indigo-900 mt-6 rounded-2xl text-amber-50 font-bold">
          Read More
        </button>
      </div>
      <div className="bg-pink-200 h-80 w-80 p-4 rounded-2xl ">
        <h1 className="bg-pink-300 h-15 w-15 rounded-4xl p-4 my-4 font-bold">
          Icon
        </h1>
        <h1 className="font-bold text-blue-950 text-2xl mt-4">
          Social Media <br />
          Marketing
        </h1>
        <p className="text-gray-600 mt-2">
          Connect with customers on social media and build a strong online
          presence{" "}
        </p>
        <button className="px-10 py-4 bg-indigo-900 mt-6 rounded-2xl text-amber-50 font-bold">
          Read More
        </button>
      </div>
      <div className="bg-pink-200 h-80 w-80 p-4 rounded-2xl  ">
        <h1 className="bg-pink-300 h-15 w-15 rounded-4xl p-4 my-4 font-bold">
          Icon
        </h1>
        <h1 className="font-bold text-blue-950 text-2xl mt-4">
          Social Media <br />
          Marketing
        </h1>
        <p className="text-gray-600 mt-2">
          Connect with customers on social media and build a strong online
          presence{" "}
        </p>
        <button className="px-10 py-4 bg-indigo-900 mt-6 rounded-2xl text-amber-50 font-bold">
          Read More
        </button>
      </div>
      <div className="bg-pink-200 h-80 w-80 p-4 rounded-2xl ">
        <h1 className="bg-pink-300 h-15 w-15 rounded-4xl p-4 my-4 font-bold">
          Icon
        </h1>
        <h1 className="font-bold text-blue-950 text-2xl mt-4">
          Social Media <br />
          Marketing
        </h1>
        <p className="text-gray-600 mt-2">
          Connect with customers on social media and build a strong online
          presence{" "}
        </p>
        <button className="px-10 py-4 bg-indigo-900 mt-6 rounded-2xl text-amber-50 font-bold">
          Read More
        </button>
      </div>
      \{/* <div className="bg-blue-500 flex"> */}
      {/* <div className="bg-pink-500 h-150 w-200 ">
        <h1 className="font-bold text-2xl text-indigo-950 mt-8">Implemantation</h1>
<p className=" w-100 mt-2 text-gray-700">Schedule a consulation to discuss your business goals and digital marketing need with your team </p> */}
      <div className="bg-blue-200 w-500 h-150 flex flex-row">
        <div className="bg-pink-100 h-150 w-150 p-8">
          <h4 className="text-pink-600 font-serif font-bold">HOW IT WORKS</h4>
          <h1 className="text-4xl font-serif font-semibold text-indigo-950 mt-4">
            {" "}
            Our Process <br />
            Workflow
          </h1>
          {/* <h1 class="border-2 border-purple-900 h-10 w-10 rounded-full flex items-center justify-center font-bold mt-8">
  01
</h1> */}
          <h1 className="font-bold text-2xl text-indigo-950 mt-8">
            Consultation
          </h1>
          <p className=" w-100 mt-2 text-gray-700">
            Schedule a consulation to discuss your business goals and digital
            marketing need with your team{" "}
          </p>
          <h1 className="font-bold text-2xl text-indigo-950 mt-8">
            Strategy Developement
          </h1>
          <p className=" w-100 mt-2 text-gray-700">
            Schedule a consulation to discuss your business goals and digital
            marketing need with your team{" "}
          </p>
          <h1 className="font-bold text-2xl text-indigo-950 mt-8">
            Implemantation
          </h1>
          <p className=" w-100 mt-2 text-gray-700">
            Schedule a consulation to discuss your business goals and digital
            marketing need with your team{" "}
          </p>
        </div>
        {/* <div className="bg-pink-500 h-150 w-200 "> */}
        {/* <h1 className="font-bold text-2xl text-indigo-950 mt-8">Implemantation</h1> */}
        {/* <p className=" w-100 mt-2 text-gray-700">Schedule a consulation to discuss your business goals and digital marketing need with your team </p> */}

        <div className="bg-pink-100 h-150 w-150 p-8">
          {/* Content for second child */}
          <h1 className="text-indigo-950 font-bold text-2xl mt-68">
            Monitoring and Optimization
          </h1>
          <p className=" w-100 mt-2 text-gray-700">
            We completeltyy monotar and optimize your campaigns to maximize
            results and ROI
          </p>
           <h1 className="text-indigo-950 font-bold text-2xl mt-8">
            Reporting and Analysis
          </h1>
          <p className=" w-100 mt-2 text-gray-700">
            We provide  regualar reports  and analysis  on compaign performance{" "}
          </p>
        </div>
      </div>
      <p>{title} , {  price} </p>
    </div>
  );
}
export default Card;
