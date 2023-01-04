import './Table1.scss';
import {data} from '../../Data/data.js';

console.log(data);

function FirstTable() {
    return (
    <div className="table1-div">
      <div class="card">
        <div class="card-body">
          
          <h5 class="card-title">Card title</h5>
          <div className="grid-container">
                {Array.from({ length: 9 }, (_, i) => {
                  return (
                    <div key={i} className="grid-item">
                      <form>
                        <label className="label">
                          <span>
                            Name:
                          </span>
                          <input className="input" type="text" name="name" />
                        </label>
                      </form>
                    </div>
                  )  
                })}
            </div>
            <div className="grid-container">
                {Array.from({ length: 3 }, (_, i) => {
                  return (
                    <div key={i} className="grid-item">
                      <form>
                        <label className="label">
                          <span> Date   : </span>
                          <input className="input" type="date" name="name" />
                        </label>
                      </form>
                    </div>
                  )  
                })}
              </div>
            <a href="#" class="btn btn-primary">Clear</a>
        </div>
        
      </div>
    
        
    </div>
    );
  }
  
  export default FirstTable;