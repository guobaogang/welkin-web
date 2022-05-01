import {useAuth} from "context/auth-context";

export const AuthenticatedApp = () => {
    const {logout} = useAuth();
    return <div>
        主页面
        <button onClick={logout}>登出</button>
    </div>
}