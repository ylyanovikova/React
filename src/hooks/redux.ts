import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, rootState } from "../redux";

const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {
    useAppDispatch,
    useAppSelector
}