import React, {useState} from "react";
import {RegisterScreen} from "pages/register";
import {LoginScreen} from "pages/login";
import {Button, Divider} from "antd";
import {useDocumentTitle} from "utils";
import {ErrorBox} from "components/lib";
import './index.less';

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useDocumentTitle("请登录注册以继续");

    return (
      <div className={'container'}>
          <div className={'header'}/>
          <div className={'shadow-card'}>
              <div className={'title'}>{isRegister ? "请注册" : "请登录"}</div>
              <ErrorBox error={error}/>
              {isRegister ? (
                <RegisterScreen onError={setError}/>
              ) : (
                <LoginScreen onError={setError}/>
              )}
              <Divider/>
              <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>
                  {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
              </Button>
          </div>
      </div>
    );
};