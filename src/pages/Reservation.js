import React from "react";

function Reservation() {
  return (
    <div className="reservation">
      <h1>Reservations</h1>
      <p>
        We are open for lunch and dinner Monday through Friday, and for dinner
        on Saturday and Sunday. Reservations are recommended but not required.
      </p>
      <form className="reservation-form">
          <div className="form-input">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>

          <div className="form-input">
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>

          <div className="form-input">
            <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="form-input">
            <label>Party Size</label>
            <input type="text" placeholder="Party Size" />
          </div>

          <div className="form-input">
            <label>Date</label>
            <input type="text" placeholder="Date" />
          </div>

          <div className="form-input">
            <label>Time</label>
            <input type="text" placeholder="Time" />
          </div>

          <div className="form-input">
            <label>Special Requests</label>
            <input type="text" placeholder="Special Requests" />
          </div>

          <button type="submit" className="action-button">Submit</button>
      </form>
    </div>
  );
}

export default Reservation;
