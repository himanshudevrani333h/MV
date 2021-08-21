import React from "react";
import data from "./data"
class Category extends React.Component {
  state = {
    AllGenere: [],
  };
  componentDidMount() {
    //api call(msg bhejna=> get)
    // fetch("/genre")
    //   .then(function (res) {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     this.setState({ AllGenere: json });
    //   });
   
    let datatemp = [];
    for (let i = 0; i < data.length; i++) {
      let dup = false;
      for (let j = 0; j < datatemp.length; j++) {
        if (datatemp[j]._id == data[i].genre._id) dup = true;
      }
      if (!dup) datatemp.push(data[i].genre);
    }

    this.setState({ AllGenere:datatemp});
  }
  render() {
    return (
      <ul class="list-group">
         <li class="list-group-item" key="allgenre" onClick={(e)=>{
           this.props.receiveFilterData("All Genre");
         }}>
              All Genre
            </li>
        {this.state.AllGenere.map((el) => {
          return (
            <li class="list-group-item" key={el._id} onClick={()=>{
              this.props.receiveFilterData(el.name);
            }}>
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category
