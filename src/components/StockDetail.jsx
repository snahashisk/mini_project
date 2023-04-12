import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function StockDetail({ open, onClose, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75" />
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto z-50 p-6">
            {children}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default StockDetail;
