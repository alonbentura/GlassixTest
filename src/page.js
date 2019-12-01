/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const key = "b0b8cd08bd4c1824cd4df64ab44f6975fc71e6ba25914603fe048c61"
export class Page extends React.Component {
  constructor() {
    super()
    this.state = {
      data: ''
    }
  }




  componentDidMount() {
    this.getIpData()
  }

  getIpData = () => {
    fetch(`https://api.ipdata.co/?api-key=${key}`, {
      method: "GET"
    }).then(res => res.json())
      .then(res => this.setState({ data: res }))

  }



  googleMap = () => {
    const { data } = this.state
    if (data) {
      return (
        <div>
          <div>City: {data.city}</div>
          <div>Country: {data.country_name}</div>
          <div>Ip: {data.ip}</div>
          <iframe
            style={{ width: 400, height: 600 }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=location=${data.latitude},${data.longitude}`}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div> {
        this.googleMap()}</div>
    )
  }
}
