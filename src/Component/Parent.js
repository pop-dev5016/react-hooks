import React, { useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button1 from './Button1'
import Count2 from './Count2'
import Button2 from './Button2'

function Parent() {
    let [age,setAge]=useState(25)
    let [salary,setSalary]=useState(50000)


    let agehandler = ()=>{
        setAge(age+1)
    }
    let salaryhandler = ()=>{
        setSalary(salary+1000)
    }
  return (
    <div>
        <Title></Title>
        <Count text = "Age is " count={age}></Count>
        <Button1 handler={agehandler}>increment age</Button1>
        <Count2 text = "salary is " Count2={salary}></Count2>
        <Button1 handler={salaryhandler}>salary increment</Button1>
    </div>
  )
}

export default Parent