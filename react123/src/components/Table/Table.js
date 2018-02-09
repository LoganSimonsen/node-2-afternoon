import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
      }
      componentDidMount(){
        axios.get('http://localhost:3000/api/products').then(response => {
            console.log(response);
            let a = response.data[0]['product_id'];
            let b = response.data[0]['name'];
            let c = response.data[0]['description']
           let d =  response.data[0]['image_url']
          this.setState({ ProductID1: <td> {a} </td>});
          this.setState({ Name: <td> {b} </td>});
          this.setState({ Description: <td> {c} </td>});
          this.setState({ Image: <td> <img src={d}></img> </td>});
      });
    }

    render() {
        const { test, ProductID1, Name, Description, Image } = this.state;
      return (
    
        <table>
            <tbody>
                <tr>
                    <th>Product ID</th><th>Name</th><th>Description</th><th>Image</th>
                </tr>     
                  <tr>
                {ProductID1} {Name} {Description}  {Image}
                  </tr>

            </tbody>   
        </table>
        
        
      );
    }
  }
  
  export default Table;