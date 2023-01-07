import './TopNavBar.scss'

function TopBar() {
    return (
      <div className="navbar">
        	<a onClick={()=> window.print()} className="btn btn-primary">Create Invoice</a>
          <a onClick={()=> window.print()} className="btn btn-primary">Download report	</a>     
      </div>
    );
  }
  
  export default TopBar;