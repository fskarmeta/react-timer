import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import './App.css';
import Card from './cards'


let count = [0,0,0,0,0,0,0];
let ak = 9
let intervalID;
let flag = true;

let pauseButton = () => {
  clearInterval(intervalID);
  intervalID = null;
}


let resumeButton = () => {
  if (flag) {
intervalID = setInterval(timer,1000)
  }
}

let resetButton = () => {
  clearInterval(intervalID);
  count = [0,0,0,0,0,0,0];
  intervalID = setInterval(timer, 1000);
}




const timer = function(){

setTimeout(function(){
  if (count[6] === ak) {
    count[6] = 0;
    if (count[5] === ak) {
        count[5] = 0
        if (count[4] === ak) {
            count[4] = 0
            if (count[3] === ak) {
                count[3] = 0
                if(count[2] === ak) {
                    count[2] = 0
                    if (count[1] === ak) {
                        if (count[0] === ak) {
                            count = [0,0,0,0,0,0,0];    
                        }
                    } else {
                        count[1]++
                    }
                } else {
                    count[2]++
                }
            } else {
                count[3]++
            }
        } else {
            count[4]++
        }
    } else {
        count[5]++
    }
  }  else {
  count[6]++;
  }
}, 1)


 
 
 ReactDOM.render(
   <Card six={count[6]} five={count[5]} four={count[4]} three={count[3]} two={count[2]} one={count[1]} reset={resetButton} pause={pauseButton} resume={resumeButton}/>,
  document.getElementById('root')
 );
 
 }

 intervalID = setInterval(timer, 1000)

// interval={pauseTimer()}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
