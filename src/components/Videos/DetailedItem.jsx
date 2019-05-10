import React from "react";
import SubTitle from "../Title/Title";
// import Responsive from "react-responsive";
import "../Videos/DetailedItem.css";

// const Mobile = props => <Responsive {...props} maxWidth={480} />;
class Details extends React.Component {
  render() {
    return (
      <div className="detail-wrapper">
        <div className="iconLeft">
          <i class="fas fa-arrow-circle-left " />
        </div>
        <div className="card-1">
          <div className="icontop">
            <i class="fa fa-quote-left fa-4x" aria-hidden="true" />
          </div>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="iconCont-2" style={{ margin: "0 auto" }}>
            <i class="fas fa-user-circle fa-3x" />
          </div>

          <div className="userInfo">
            <h4 className="name">Jackie Odaniel</h4>
            <h5 className="place">Machakos</h5>
          </div>
        </div>

        <div className="card-2">
          <div className="icontop">
            <i class="fa fa-quote-left fa-4x" aria-hidden="true" />
          </div>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="iconCont-2">
            <i class="fas fa-user-circle fa-3x" />
          </div>

          <div className="userInfo">
            <h4 className="name">Jackie Odaniel</h4>
            <h5 className="place">Machakos</h5>
          </div>
        </div>
        <div className="card-3">
          <div className="icontop">
            <i class="fa fa-quote-left fa-4x" aria-hidden="true" />
          </div>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="iconCont-3">
            <i class="fas fa-user-circle fa-3x" />
          </div>

          <div className="userInfo">
            <h4 className="name">Jackie Odaniel</h4>
            <h5 className="place">Machakos</h5>
          </div>
        </div>
        <i class="fas fa-arrow-circle-right" />
      </div>
    );
  }
}
export default Details;
