import React, {ReactNode} from "react";
import {Spin, Typography} from "antd";

const FullPage = ({children}: { children: ReactNode }) => (
  <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }}>
      {children}
  </div>
)

export const FullPageLoading = () => (
  <FullPage>
      <Spin size={"large"}/>
  </FullPage>
);

export const FullPageErrorFallback = ({error}: { error: Error | null }) => (
  <FullPage>
      <ErrorBox error={error}/>
  </FullPage>
);

// 类型守卫
const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({error}: { error: unknown }) => {
    if (isError(error)) {
        return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
    }
    return null;
};