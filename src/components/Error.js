import { useRouteError } from "react-router-dom";


const Error = () => {
  const err = useRouteError();
  const {status, statusText, data} = err
  
  return (
    <>
      <h1>Hey, you have entered a wrong url</h1>
      <h3>{status} : {statusText}</h3>
      <h3>{data}</h3>
    </>
  );
};
export default Error;
