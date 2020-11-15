import React, {useState} from "react";
import axios from 'axios';
import './SleepForm.css';

 

function Results(props) {
  console.log(props)

  return (

    <div className="container">
      <div className="row">
        <div className="col">

        </div>
        <div className="col-5">
          <div className="sleep-form">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Sleep Score</h5>
                    
                </div>
            </div>
          </div>
        </div>
        <div className="col">

        </div>
      </div>
    </div>
  );
}

export default Results;
