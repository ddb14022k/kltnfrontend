import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import man from "../../assets/images/man.png";
import woman from "../../assets/images/woman.png";
import { AuthActions } from "../../redux/reducer/auth";
import Checkbox from "../shared/Checkbox";
import Grid from "../shared/Grid";
import SVGIcon from "../shared/SVGIcon";
import UnChangeTextField from "../shared/UnChangeTextField";
import Avatar from "../shared/Avatar";

const Profile = ({ profile, onClose, ...rest }) => {
  const [isMale, setIsMale] = useState(profile.sex ? false : true);

  const [isChange, setIsChange] = useState(false);

  const [avatar, setAvatar] = useState(profile.avatar || null);

  const dispatch = useDispatch();

  const errorUpdate = useSelector((state) => state.auth.error);

  //form
  const defaultValues = {
    email: profile.email,
    name: profile.name,
    phone: profile.phone,
    sex: profile.sex,
  };
  const schema = yup
    .object({
      name: yup.string().required("Please enter your name"),
      phone: yup
        .string()
        .required("Please enter your phone number")
        .matches(
          /(84|0[1|3|5|7|8|9])+([0-9]{8})\b/,
          "Phone number is not valid"
        ),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleUpdate = (values) => {
    const updateData = new FormData();
    updateData.append("singleImage", avatar);

    for (const [key, value] of Object.entries(values)) {
      updateData.append(key, value);
    }
    dispatch(AuthActions.editUser(updateData));
  };

  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__top__title">Cập nhật thông tin</div>
        <SVGIcon name="close" width="14px" onClick={onClose} />
      </div>
      <div className="profile__content">
        <form onSubmit={handleSubmit(handleUpdate)}>
          <Avatar
            img={profile.avatar || (isMale ? man : woman)}
            isOnline={true}
          />

          <div className="profile__content__item">
            <Controller
              control={control}
              name="name"
              render={({ field: { name, value, onChange } }) => (
                <div className="input-field">
                  <UnChangeTextField
                    type="text"
                    label="Tên"
                    value={value}
                    inputChange={(e) => {
                      onChange(e);
                      setIsChange(true);
                    }}
                    name={name}
                    error={!!errors[name]}
                  />
                  {errors && errors[name] && (
                    <div className="input-field__error">
                      {errors[name].message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          <div className="profile__content__item">
            <UnChangeTextField
              label="email"
              defaultValue={profile.email}
              value={profile.email}
              disabled={true}
            />
          </div>
          <div className="profile__content__item">
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value, name } }) => (
                <div className="input-field">
                  <UnChangeTextField
                    type="text"
                    label="Số điện thoại"
                    inputChange={(e) => {
                      onChange(e);
                      setIsChange(true);
                    }}
                    error={!!errors[name]}
                    defaultValue={value}
                    value={value}
                  />
                  {errors && errors[name] && (
                    <div className="input-field__error">
                      {errors[name].message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          <div className="profile__content__item">
            <UnChangeTextField
              label="Giới tính"
              defaultValue={profile.email}
              value={isMale ? "Nam" : "Nữ"}
              disabled={true}
            />
          </div>
          {errorUpdate && (
            <div
              className="input-field__error"
              style={{ textAlign: "center", marginBottom: "1rem" }}
            >
              {errorUpdate}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
