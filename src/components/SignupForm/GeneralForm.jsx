import React from "react";
import * as U from "../TuxComponents/UniversalComponents";
import * as L from "../TuxComponents/LoginComponents";

const GeneralForm = ({
  errors,
  values,
  handleChange,
  touched,
  handleSubmit,
}) => {
  const { userData } = values;
  return (
    <L.Main>
      {/* <U.FlexBox > */}
      <U.FlexBox>
        <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
        <L.LoginBox wide flexStart>
          <U.Normal semiBold margin50 large>
            Create New Account
          </U.Normal>
          <U.Normal center>
            We're glad to have you onboard! Fill in
            <br />
            the information below to get started.
          </U.Normal>

          <U.FlexBox flexMargin>
            <U.FlexBox column>
              <U.Normal semiBold alignLeft>
                First Name
              </U.Normal>
              <U.SmallInput
                type="text"
                autoComplete="off"
                id="userData.firstName"
                value={userData.firstName}
                name="userData.firstName"
                onChange={handleChange}
              ></U.SmallInput>
            </U.FlexBox>
            <U.FlexBox column>
              <U.Normal semiBold alignLeft>
                Last Name
              </U.Normal>
              <U.SmallInput
                type="text"
                autoComplete="off"
                id="userData.lastName"
                value={userData.lastName}
                name="userData.lastName"
                onChange={handleChange}
              ></U.SmallInput>
            </U.FlexBox>
          </U.FlexBox>

          <U.FlexBox marginTop>
            <U.FlexBox column>
              <U.Normal semiBold alignLeft>
                Password
              </U.Normal>
              <U.SmallInput
                type="password"
                autoComplete="off"
                id="userData.password"
                value={userData.password}
                name="userData.password"
                onChange={handleChange}
              ></U.SmallInput>
            </U.FlexBox>
            <U.FlexBox column>
              <U.Normal semiBold alignLeft>
                Confirm Password
              </U.Normal>
              <U.SmallInput
                disabled={userData.password ? false : true}
                type="password"
                autoComplete="off"
                id="userData.passwordConf"
                value={userData.passwordConf}
                name="userData.passwordConf"
                onChange={handleChange}
              ></U.SmallInput>
            </U.FlexBox>
          </U.FlexBox>
          {errors.password && <U.Normal red>{errors.password}</U.Normal>}
          {errors.passwordConf && <U.Normal red>{errors.passwordConf}</U.Normal>}
          {/* //TODO: Still need to conditionally enable or disable the button. */}
          <U.WideBtn 
            disabled={
              userData.firstName.length > 0 && userData.lastName.length > 0 && userData.passwordConf
              ? false
              : true
            } 
            onClick={handleSubmit} 
            >
            Create Account
          </U.WideBtn>
        </L.LoginBox>
      </U.FlexBox>
      <U.FlexBox signUp>
        <U.Normal>Have an Account?&nbsp;</U.Normal>
        <U.LinkTo to="/login">Log In</U.LinkTo>
      </U.FlexBox>
    </L.Main>
  );
};

export default GeneralForm;
