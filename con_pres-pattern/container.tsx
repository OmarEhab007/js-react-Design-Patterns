import React from 'react'
import { Listing } from "../components/representation";

function container() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my.cms.com/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return <Listing listings={listings} />;
}

export default container
