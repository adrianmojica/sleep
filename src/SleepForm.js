import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {useHistory} from 'react-router';
import './SleepForm.css';

 

function SleepForm(props) {

  let hours = ["00:00","00:30","1:00","1:30","2:00","2:30","3:00","3:30","4:00",
              "4:30","5:00","5:30","6:00","6:30","7:00","7:30",
              "8:00","8:30","9:00","9:30","10:00","10:30","11:00",
              "11:30","12:00","12:30","13:00","13:30","14:00","14:30",
              "15:00","15:30","16:00","16:30","17:00","17:30","18:00",
              "18:30","19:00","19:30","20:00","20:30","21:00","21:30",
              "22:00","22:30","23:00","23:30","24:00"];

  const [state, setState] = useState({
    name: "",
    durationBed:"",
    durationSleep:""
  })

  const [sleepScore, setSleepScore] = useState();



  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function handleSubmit(evt){
    evt.preventDefault();
    getSleepCalc();
    
  }

  async function getSleepCalc() {
    const response = await axios.post("http://localhost:5000/calc",state); 
    console.log(response);
    if(response.data.status === "OK"){
      console.log('here', response.data.sleepScore);
      setSleepScore(response.data.sleepScore);
      
    }
  }

  let submitButton;
  if(state.durationBed !== "" && state.durationSleep !== "") {
    submitButton = <button type="submit" className="btn btn-primary">Calculate</button>
  }

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
                    <p className="card-text">Please answer these questions to get your Sleep Score.</p>
                    <form className="sleep-form-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="durationBed">Duration in bed:</label>
                        <select className="form-control" id="durationBed" name="durationBed" onChange={handleChange}>
                          {hours.map(function(segment, i){
                            return <option key={segment}>{segment} Hours</option>
                          })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="durationSleep">Duration in asleep:</label>
                        <select className="form-control" id="durationSleep" name="durationSleep" onChange={handleChange}>
                          {hours.map(function(segment, i){
                            return <option key={segment}>{segment} Hours</option>
                          })}
                        </select>
                    </div>
                    <div className="submit-button">
                      {submitButton}
                    </div>
                    </form>
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

export default SleepForm;
