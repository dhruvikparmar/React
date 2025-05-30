import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {

    let name="dhruvik"

    let obj={
        age:"20",
        subject:"react"
    }

    let arr=["11","12","13"]
    return (
      <div>
        <h1>{name}</h1>
        <h1>{obj.age}</h1>
        <h1>{arr[2]}</h1>
      </div>
    )
  }
}
