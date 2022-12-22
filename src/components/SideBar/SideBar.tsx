import { useState } from "react";
import SideBarItem from "./SideBarItem";
import "./SideBar.scss";
import { useUserAuth } from "../../hooks/useUserAuth";
import ModalWrapper from "../Modals/utils/ModalWrapper/ModalWrapper";
import AppButton from "../UI/AppButton/AppButton";
import { useAppSelector } from "../../hooks/reduxHook";
import { useNavigate } from "react-router-dom";

export type SideBarData = {
  link: string;
  img: any;
  title: string;
  class?: string;
};

const SideBar = ({ items }: { items: Array<SideBarData> }) => {
  const navigate = useNavigate()
  const selector = useAppSelector;
  const user = selector((state) => state.user.user);

  const { goOut } = useUserAuth();
  const [isModalConfirm, setModalConfirm] = useState<boolean>(false);

  return (
    <div className="side">
      <div className="sideBar">
        <ul className="sideBar__menu">
          {items.map((el, idx) => (
            <SideBarItem
              items={el}
              key={idx}
              onClick={() => setModalConfirm(true)}
            />
          ))}
        </ul>
        <p className="line"></p>
        <button
          onClick={() => setModalConfirm(true)}
          className="sideBar__sign-out desk-logout"
        >
          Выйти из аккаунта
        </button>
        {isModalConfirm ? (
          user !== null ? (
            <ModalWrapper setCloseModal={setModalConfirm}>
              <div className="exit-confirm">
                <h2>Выйти из аккаунта</h2>
                <AppButton onClick={goOut}>Да, выйти</AppButton>
                <AppButton onClick={() => setModalConfirm(false)}>
                  Нет, я нечайно
                </AppButton>
              </div>
            </ModalWrapper>
          ) : (
            <ModalWrapper setCloseModal={setModalConfirm}>
              <div className="exit-confirm">
                <h2>У вас нет аккаунта</h2>
                  <AppButton onClick={() => navigate('/sign-in')}> Войти</AppButton>
                  <AppButton onClick={() => navigate('/sign-up')}>Регистрация</AppButton>
              </div>
            </ModalWrapper>
          )
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
