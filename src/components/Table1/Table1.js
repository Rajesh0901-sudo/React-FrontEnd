import "./Table1.scss";
import React from "react";
import { Data } from "../../Data/data.js";
import Multiselect from "multiselect-react-dropdown";

const clear = () => {
  this.state.data.map((data) => {
    data.value = "";
    console.log(data);
  });
};

class FirstTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      selectedValues: "",
    };
  }
  onSelect = (value) => {
    this.setState({ selectedValues: value });
  };
  onRemove = (value) => {
    this.setState({ selectedValues: "" });
  };
  render() {
    return (
      <div className="table1-div">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Information</h5>
            <div className="grid-container">
              {this.state.data.map((data, i) => {
                return (
                  <div key={data.index} className="grid-item">
                    <form>
                      <label className="label">
                        <div className="label-div">{data.label} :</div>

                        {data["options"] !== undefined ? (
                          <Multiselect
                            options={this.state.data["options"]} // Options to display in the dropdown
                            selectedValues={this.selectedValues} // Preselected value to persist in dropdown
                            onSelect={this.onSelect} // Function will trigger on select event
                            onRemove={this.onRemove} // Function will trigger on remove event
                            displayValue="options" // Property name to display in the dropdown options
                          />
                        ) : (
                          <input
                            className="input"
                            type={data.type}
                            name="name"
                          />
                        )}
                      </label>
                    </form>
                  </div>
                );
              })}
            </div>
            <a href="#" onClick={clear} class="btn btn-primary">
              Clear
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstTable;
