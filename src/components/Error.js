import { useRouteError } from "react-router-dom";

const Error = () => {
    const errobj = useRouteError();
    console.log(errobj);
    return (
        <div>
            <h1> Oops 😟</h1>
            <h3> Something went wrong!!!</h3>
            <h3>
                {errobj.status} : {errobj.statusText}
            </h3>
        </div>
    );
};
export default Error;