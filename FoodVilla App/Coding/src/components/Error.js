import {useRouteError} from 'react-router-dom';

const Error = () => {
    const {status, statusText} = useRouteError();
    return (
        <>
            <h3> Page not found!!!!!</h3>
            <h3>{status}- {statusText}</h3>
        </>
    )
}

export default Error;