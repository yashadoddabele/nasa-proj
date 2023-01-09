import React from 'react';
import {useState} from 'react';
import './App.css';
import {motion} from 'framer-motion';
import axios from 'axios';

const abt = "welcome to space";

const App = () => {
    //input date
    const [date, setDate] = useState("");
    //output url of img
    const [result, setResult] = useState([]);

    //user inputs date
     function handleChange(event) {
         setDate(event.target.value);
     }
     //user clicks generate button
     function handleClick() {
        console.log(date);

        //retrieve api data
        const API_URL = 'https://api.nasa.gov/planetary/apod?api_key='+process.env.REACT_APP_NASA_API_KEY+'&date='+date;
        axios.get(API_URL).then((response) => 
            {console.log(response); 
            //set result to url of nasa image
            setResult(response.data.url)})
            
        }

    return (
        <motion.div className="app">
            <motion.h1 
                initial={{size: 0, opacity: 0}} 
                animate={{size: 1, opacity: 1}}
                transition={{delay: 0.5, duration: 2}}> {abt} </motion.h1>
            <div className="container">
            <motion.div className="search"
                initial={{size: 0, opacity: 0}} 
                animate={{size: 1, opacity: 1}}
                transition={{delay: 2.2, duration: 1.3}}
            >
                <input placeholder="YYYY-MM-DD"
                onChange={handleChange}
                    />
                <motion.button onClick={handleClick} type="submit" 
                    whileHover={{scale: 1.1, boxShadow: "0px 0px 8px black"}}>
                    generate
                </motion.button>

                {<img src={result} ></img>}
            </motion.div>
            </div>
        </motion.div>
    );
}

export default App;