import {useState} from 'react'
import { useDispatch } from 'react-redux';
import AppButton from '../../../components/UI/AppButton/AppButton';
import { _USERS_PROFILE_ } from '../../../data/consts';
import { useAppSelector } from '../../../hooks/reduxHook';
import { saveUser } from '../../../store/slices/user';
import HttpRequests from '../../../utils/httpRequests';

const UserForm = () => {
    const selector = useAppSelector
    const dispatch = useDispatch();
    const user = selector((state) => state.user.user);
    const [data, setData] = useState({
      first_name: user?.first_name,
      last_name: user?.last_name,
    });
  
    const onChange = (e: any) => {
      if (e.target.name === "name") {
        setData({ ...data, first_name: e.target.value });
      } else if (e.target.name === "surname") {
        setData({ ...data, last_name: e.target.value });
      }
    };
  
    const updateProfileData = async () => {
      const updateData = await HttpRequests.put(
        _USERS_PROFILE_,
        data,
        user?.access
      );
      const userData = {
        ...updateData,
        phone: user?.phone,
        access: user?.access,
      };
      localStorage.setItem("marketBonusCurrentUser", JSON.stringify(userData));
      dispatch(saveUser(userData));
    };
    const updateProfile = (e: any) => {
      e.preventDefault();
      updateProfileData();
    };
  return (
    <form onSubmit={updateProfile}>
    <input
      value={data.first_name}
      className="profile__inp"
      name="name"
      onChange={(e) => onChange(e)}
    />
    <input
      value={data.last_name}
      className="profile__inp"
      name="surname"
      onChange={(e) => onChange(e)}
    />
    <input defaultValue={user?.phone} className='profile__inp' name='phone' autoFocus={false}/>
    <AppButton>Сохранить</AppButton>
  </form>
  )
}

export default UserForm