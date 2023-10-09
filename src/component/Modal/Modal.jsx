import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../hooks/AxiosSecure";

const Modal = ({ setModalOn, setChoice, id }) => {
  const [baseUrl] = AxiosSecure();

  const { data: product = [], isLoading: loading } = useQuery({
    queryKey: ["product"],
    queryFn: () => baseUrl.get(`products/${id}`).then((res) => res.data),
  });

//   console.log(product.title);


  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className=" bg-white opacity-50 fixed inset-0 z-10   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">
          <div className="flex  text-lg  text-zinc-600   mb-10">
            Are you sure ?
          </div>
          <div className="flex">
            <button
              onClick={handleOKClick}
              className=" rounded px-4 py-2 text-white  bg-green-400 "
            >
              Yes
            </button>
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 ml-4 text-white bg-blue-500 "
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
