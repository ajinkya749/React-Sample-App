import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Badge
} from "reactstrap";

const CardComponent = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.Title}</CardTitle>
          <CardSubtitle></CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src={props.Url}
          alt="Card image cap"
        />
        <CardBody>
          <CardLink href="#">{props.Year}</CardLink>
          <CardLink onClick={props.handleClick.bind(this,props.imdbID)}>
          {
             props.isFavourite?<Badge color="success">Favourite</Badge>:<Badge color="primary">Mark as Favourite</Badge>
          }
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;