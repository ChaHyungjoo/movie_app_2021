import React from "react"
import PropTypes from "prop-types"


const fruits =[
    {
        id : 1,
        name : "apple",
        test : "aaa"
    },
    {
        id : 2,
        name : "banana",
        test : "bbb"
    },
    {
        id : 3,
        name : "orange",
        test : "ccc"
    }
]

function renderFruit(fruits){
    console.log(fruits);
}

function Test2(props){
    return(
        <div>
            <h3>I like {props.name} !! {props.test}</h3>
        </div>
    )
}

Test2.propTypes = {
    name : PropTypes.string.isRequired,
    test : PropTypes.string.isRequired
}

function Test(){
    return(
        <div> 
            {fruits.map(item => (
                <Test2 key={item.id} name={item.name} test={item.test} />
            ))}
        </div>
    )
}

export default Test