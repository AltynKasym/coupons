export interface ISignUpInput {
  type: string;
  placeholder: string;
  name: string;
  required: any;
}

export const signUpInputs: ISignUpInput[] = [
  {
    type: "text",
    placeholder: "Имя",
    name: "first_name",
    required: "Поле не корректно",
  },
  {
    type: "text",
    placeholder: "Фамилия",
    name: "last_name",
    required: "Поле не корректно",
  },
  {
    type: "number",
    placeholder: "Номер телефона",
    name: "phone",
    required: "Поле не корректно",
  },
  {
    type: "password",
    placeholder: "Придумайте пароль",
    name: "password",
    required: "Поле не корректно",
  },
  {
    type: "password",
    placeholder: "Повторите пароль",
    name: "password2",
    required: "Поле не корректно",
  },
];