import React from 'react';
import { Badge } from 'reactstrap';

export default function Favourite(props) {
    return (
      <div className="Favourites-marker">
        <h4>Favourites <Badge color="secondary">{props.favouriteCount}</Badge></h4>
      </div>
    );
}