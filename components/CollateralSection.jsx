"use client";

import { Fragment, useState, useRef, useEffect } from "react";
import { ethers } from "ethers";
import { useMoralis } from "react-moralis";
// import Modal from "./Modal.jsx";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";

const CollateralSection = ({ collateralBalance, coreAddress, coreAbi }) => {
  const [showCollateralize, setShowCollateralize] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [chainId, setChainId] = useState("");
  //   const { chainId: chainIdHex } = useMoralis();

  //   const collatAmount = useRef(0);
  //   const withdrawAmount = useRef(0);
  //   const toastId = useRef(null);

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const coreContract = new ethers.Contract(coreAddress, coreAbi, signer);

  //   useEffect(() => {
  //     setChainId(parseInt(chainIdHex));
  //   }, [chainIdHex]);

  //   const pending = () =>
  //     (toastId.current = toast.info("Transaction Pending...", {
  //       position: "top-right",
  //       autoClose: false,
  //       hideProgressBar: false,
  //       closeOnClick: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     }));

  //   const success = () => {
  //     toast.dismiss(toastId.current);
  //     toast.success("Transaction Complete!", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   };

  //   const error = (msg) => {
  //     toast.error(msg, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   };

  //   const collateralize = async (e) => {
  //     e.preventDefault();
  //     try {
  //       let amount = ethers.utils.parseEther(collatAmount.current.value);
  //       const tx = await coreContract.collateralize({ value: amount });
  //       pending();
  //       await tx.wait();
  //       success();
  //     } catch (err) {
  //       error({ err }.err.reason);
  //     }
  //     setShowCollateralize(false);
  //   };

  //   const withdraw = async (e) => {
  //     e.preventDefault();
  //     try {
  //       let amount = ethers.utils.parseEther(withdrawAmount.current.value);
  //       const tx = await coreContract.withdrawCollateral(amount);
  //       pending();
  //       await tx.wait();
  //       success();
  //     } catch (err) {
  //       error({ err }.err.reason);
  //     }
  //     setShowWithdraw(false);
  //   };

  return (
    <Fragment>
      <div className="p-6 bg-gray-900 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-sm font-semibold text-white">
              <td className="py-4 border-b border-gray-700">Collateral</td>
              <td className="py-4 border-b border-gray-700">
                Amount collateralized
              </td>
              <td className="py-4 border-b border-gray-700 text-center">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-gray-500">
              <td className="py-4">
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-md">
                    {" "}
                    {chainId === 5 ? "Ethereum" : "Matic"}{" "}
                  </span>
                </div>
              </td>
              <td className="py-4">
                {collateralBalance} {chainId === 5 && "Ξ"}
              </td>
              <td className="py-4 flex justify-center">
                <button
                  className="flex justify-center py-3 mx-1 rounded-full w-12 border-2 border-secondary text-secondary text-sm font-bold"
                  onClick={() => setShowCollateralize(true)}
                >
                  +
                </button>
                <button
                  className="flex justify-center py-3 mx-1 rounded-full w-12 border-2 border-primary text-primary text-sm font-bold"
                  //   onClick={() => setShowWithdraw(true)}
                >
                  -
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        isVisible={showCollateralize}
        // onClose={() => setShowCollateralize(false)}
      >
        <div className="p-6 flex items-center justify-center font-semibold text-xl">
          <div>Collateralize {chainId === 5 ? "ETH" : "MATIC"}</div>
        </div>
        <div className="bg-gray-700 my-3 rounded-md px-6 py-4 text-xl flex justify-between">
          <input
            type="text"
            className="bg-transparent placeholder:text-gray-400 outline-none w-full text-xl"
            placeholder="0.00"
            // ref={collatAmount}
          />
          <div className="text-white">{chainId === 5 ? "ETH" : "MATIC"}</div>
        </div>
        <div className="p-8">
          <button
            // onClick={collateralize}
            className="py-3.5 rounded-lg w-full border border-secondary hover:bg-secondary text-secondary hover:text-white  text-sm font-semibold"
          >
            Collateralize
          </button>
        </div>
      </Modal>
      <Modal isVisible={showWithdraw} onClose={() => setShowWithdraw(false)}>
        <div className="p-6 flex items-center justify-center font-semibold text-xl">
          <div>Withdraw {chainId === 5 ? "ETH" : "MATIC"}</div>
        </div>
        <div className="bg-gray-700 my-3 rounded-md px-6 py-4 text-xl flex justify-between">
          <input
            type="text"
            className="bg-transparent placeholder:text-gray-400 outline-none w-full text-xl"
            placeholder="0.00"
            // ref={withdrawAmount}
          />
          <div className="text-white">{chainId === 5 ? "ETH" : "MATIC"}</div>
        </div>
        <div className="p-8">
          <button
            // onClick={withdraw}
            className="py-3.5 rounded-lg w-full border border-secondary hover:bg-secondary text-secondary hover:text-white  text-sm font-semibold"
          >
            Withdraw
          </button>
        </div>
      </Modal>
      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default CollateralSection;
