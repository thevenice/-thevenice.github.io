import React from "react";

class MainPage1 extends React.Component {
  render() {
    const { detailArray } = this.props;
    console.log(detailArray);
    if (detailArray) {
      return detailArray.map(item => (
        <div className="kard" key={item.name}>
          <div className=" mx-auto ">
            <h2 className="">{item.name}</h2>
            <div className="">
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
export default MainPage1;
