import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center flex-col items-center gap-5 h-[88vh] bg-cover bg-center text-gray-50"
      style={{
        backgroundImage: 'url("../../../public/assets/img-src/doha.jpg")',
      }}>
      <h1 className="font-bold text-lg md:text-5xl flex flex-col md:gap-3 font-stretch-semi-condensed">
        EXPLORE <span> DREAM DESTINATION</span>
      </h1>
      <p className="text-center md:mx-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam
        magni sapiente molestias itaque quia aliquid totam rerum aliquam quasi!
      </p>
      <button
        onClick={() => navigate("tour")}
        className="bg-green-300 py-3 px-6 text-gray-50 rounded-sm cursor-pointer text-xl font-bold hover:bg-green-200">
        Explore
      </button>
    </div>
  );
}
