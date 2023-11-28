
import React from "react";

import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const AddToCart = ({ modalIsOpen, setIsOpen }) => {

 

  //   console.log(product)

  if (loading) {
    return <h1>Loading......</h1>;
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete =(_id)=>{
    // console.log(_id)
    fetch(`http://localhost:5001/item/${_id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
    })
        .then((res) => res.json())
        .then((data) => { 
           if(data.deletedCount > 0){
            refetch()
           }
        });
  }

  return (
    <div className="h-auto">
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={}
        // style={customStyles}
        contentLabel="Example Modal"
        // className="h-auto mx-auto"
        className="h-auto mx-auto mt-3 lg:ml-[1200px] bg-fixed bg-white"
      >
        <div className="flex justify-end items-center h-auto py-2">
          <button title="Close" className="" onClick={() => setIsOpen(false)}>
            <AiOutlineClose size={25} />
          </button>
        </div>
        {product.map((item, index) => {
          const { image, price, title ,_id} = item;
          return (
            <div
              key={index}
              className="lg:flex px-2  justify-center items-center border-b-2 lg:px-0 gap-5"
            >
              <div>
                {" "}
                <img src={image} className="h-10 w-10" alt="" />
              </div>
              <div className="flex gap-3 justify-center items-center">
                <div>
                  <h1 className="text-base font-manrope font-bold leading-8 text-[#060606]">
                    {title}
                  </h1>
                  <p>${price}</p>
                </div>
                <button onClick={()=>handleDelete(_id)}><RiDeleteBin6Line size={20} /></button>
              </div>
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default AddToCart;
