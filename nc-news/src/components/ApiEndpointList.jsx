import { useState, useEffect, useContext } from "react";
import { getApi } from "../api";
import { MessageContext } from "../contexts/Message";
import ApiCard from "./ApiCard";
import LoaderLarge from "./LoaderLarge";

const ApiEndpointList = () => {
  const { setMessage } = useContext(MessageContext);

  const [endpointList, setEndpointList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [listError, setListError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getApi()
      .then((results) => {
        setLoading(false);
        setEndpointList(results);
        setListError(false);
        setMessage({
          msgType: null,
          showMsg: false,
          variant: "",
          title: "",
          msg: "",
        });
      })
      .catch((error) => {
        setListError(true);
        setLoading(false);
        setMessage({
          msgType: "error",
          showMsg: true,
          variant: "danger",
          title: "API Error",
          msg: "Cannot load endpoints, please try again later.",
        });
      });
  }, [setMessage]);

  if (loading) return <LoaderLarge content={"Loading API Docs..."} />;

  if (listError) return;

  return (
    <ul className="list-unstyled">
      {endpointList.map((element, index) => {
        if (element.endpoint !== 'GET /api') {
          console.log(typeof element.exampleResponse)
          return <ApiCard key={index} endpoint={element} />;
        }
        return null;
      })}
    </ul>
  );
};

export default ApiEndpointList;
