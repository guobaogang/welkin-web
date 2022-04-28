import {LoginPage} from "../pages/login";
import {Card} from "antd";

export const UnauthenticatedApp = () => {
    return <div style={{display: "flex", justifyContent: 'center'}}>
        <Card>
            <LoginPage/>
        </Card>
    </div>
}