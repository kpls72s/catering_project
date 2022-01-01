import React from "react";
import { useParams } from "react-router-dom";
import { getLists } from "../../restaurants";
import CollectionsByCatID from "./collectionsByCatID";
import "./collection.css";

function Collections() {
  const params = useParams();
  const lists = getLists(params.catID);

  return (
    <main>
      <CollectionsByCatID title={params.catID === undefined ? 0 : params.catID} lists={lists} />
    </main>
  );
}

export default React.memo(Collections);
