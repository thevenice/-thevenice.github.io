import React from "react";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      detailArray: [
        { name: "abc", age: 11, email: "abc@qwz.com" },
        { name: "aaqq", age: 21, email: "sss@qwz.com" },
        { name: "wwee", age: 31, email: "ccc@qwz.com" },
        { name: "assee", age: 41, email: "zzz@qwz.com" }
      ]
    };
  }
  render() {
    console.log(this.state.detailArray);
    const { detailArray } = this.state;
    if (detailArray) {
      return detailArray.map(item => (
        <div className="kard py-0 mb-3 bg-primary" key={item.name}>
          <div className="card-body  mx-auto ">
            <h2 className="card-title">{item.name}</h2>
            <div className="card-text">
              <ul>
                <li>{item.age}</li>
                <li>{item.email}</li>
              </ul>
            </div>
          </div>
        </div>
      ));
    } else {
      return <div>error!404</div>;
    }
  }
}
export default MainPage;
