
import {
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { addKorzina } from "../store/slices/Korzina";
import { closeModal } from "../store/slices/Modal";

export function Modal() {

    const dispatch = useDispatch();

    const open = useSelector((state) => state.modal.status)

    const handleOpen = () => dispatch(closeModal());

    const currenProduct = useSelector((state) => state.modal.product)


    const addProduct = (p) => {
        dispatch(addKorzina(p));
        handleOpen()
    }

    return (
        <>

            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}>

                <DialogBody divider>
                    <div className="flex flex-col sm:flex-row py-5 items-center gap-5">
                        <img className="sm:w-40 w-auto" src={currenProduct.img} alt="selected product" />

                        <div>
                            <h3 className="text-2xl font-extrabold text-c-title mb-3">
                                {currenProduct.title}
                            </h3>
                            <p className="text-c-desc text-sm font-medium mb-2">
                                {currenProduct.description}
                            </p>
                            <p className="text-2xl font-bold text-yellow">{currenProduct.price}₽</p>

                        </div>
                    </div>
                </DialogBody>

                <DialogFooter>
                    <div className="flex">
                        <button onClick={handleOpen} className="bg-gray rounded-lg text-btn-gray-text font-bold text-sm py-3 px-5 active:scale-95">Close</button>

                        <button onClick={() => addProduct(currenProduct)} className="bg-yellow rounded-lg text-white font-bold text-sm py-3 px-5 active:scale-95 ml-2">Add to card</button>
                    </div>

                </DialogFooter>
            </Dialog>
        </>
    );
}