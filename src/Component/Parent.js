import React, { useState,useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button1 from './Button1'

function Parent() {
    let [age,setAge]=useState(25)
    let [salary,setSalary]=useState(50000)


    let agehandler = useCallback(()=>{
        setAge(age+1)
    },[age])
    let salaryhandler = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
    <div>
        <Title></Title>
        <Count text = "Age is " count={age}></Count>
        <Button1 handler={agehandler}>increment age</Button1>
        <Count text = "salary is " count={salary}></Count>
        <Button1 handler={salaryhandler}>salary increment</Button1>
    </div>
  )
}

export default Parent