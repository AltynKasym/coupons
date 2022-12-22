import { useNavigate } from "react-router-dom";
import { localStorageKeys } from "../data/consts";
import { saveUser } from "../store/slices/user";
import { IUser } from "../types/app.interface";
import { useAppDispatch } from "./reduxHook"

export const useUserAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const goOut = () => {
        localStorage.setItem(localStorageKeys.currentUserToken, JSON.stringify(null));
        dispatch(saveUser(null));
        navigate('/')
    }

    const comeIn = (data: IUser, notRedirect?: boolean) => {
        dispatch(saveUser(data));
        localStorage.setItem(localStorageKeys.currentUserToken, JSON.stringify(data))
        notRedirect ? null : navigate('/');
    }

    return {goOut, comeIn};
}