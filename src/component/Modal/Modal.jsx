import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../hooks/AxiosSecure";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {GoEyeClosed} from 'react-icons/go'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalPopUp = ({ id, modalIsOpen, setIsOpen }) => {
  const [baseUrl] = AxiosSecure();
  const { data: product = [], isLoading: loading } = useQuery({
    queryKey: ["product"],
    queryFn: () => baseUrl.get(`products/${id}`).then((res) => res.data),
  });
  // console.log(id)
  console.log(product)
  const {
    image,
    price,
    category,
    title,
    availability,
  } = product;

  if(loading){
    return <h1>Loading......</h1>
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
        <button title="Close" className="" onClick={() => setIsOpen(false)}><GoEyeClosed size={25}/></button>
        </div>

        <div className="md:w-[600px] md:h-[500px] mx-auto">

          <div className="lg:flex px-2  lg:px-0 gap-5">

            <div className="">
              <Carousel className="">
                <img src={image} className="" alt="" />
              </Carousel>
            </div>

            <div className="">

              <div className="space-y-6 pt-8">
                <h1 className="text-[26px] font-manrope font-bold leading-8 text-[#060606]">
                  {title}
                </h1>
                <p className="font-jost font-normal text-base text-[#7d7d7d]">
                  Safer For The Environment: Our denim factory partner recycles
                  98% of their water using reverse osmosis filtration and keeps
                  byproducts out of the environment by mixing them with concrete
                  to create building materials.
                </p>

                <div>
                  <p>${price}</p>
                  <span className=" bg-red-500 rounded-full text-white px-5 text-base font-jost font-normal leading-4">
                    {availability}
                  </span>
                </div>

               
                <div className="flex items-center">
                  <h1 className="mr-2 uppercase font-manrope font-bold text-[#060606]">
                    {" "}
                    Categories:
                  </h1>
                  <p className=" text-base font-bold font-manrope leading-5">
                    {category}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <h3>Tags:</h3>
                  <p>Bestseller</p>
                  <p>Trend</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPopUp;