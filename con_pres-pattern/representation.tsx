import React from 'react'
import { LoadingListings, Listing, ListingsGrid } from "../components";

function representation(props) {
  if (props.listings.length === 0) {
    return <LoadingListings />;
  }

  return (
    <ListingsGrid>
      {props.listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default representation
