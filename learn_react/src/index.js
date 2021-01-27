
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// we ar creating the elements using jsx.. which will compile the code and convert to javascript
// instead we can directly create elements in react
//render single tag;
//const element = <h1 className ="testclass">Welcome to react</h1>;
//ReactDOM.render(element,document.getElementById('root'));

// if we want to have multiple header to render in a section
// const element = 
// <div className="testclass">
//   <h1>Welcome to react</h1>
//   <h1>demo app</h1>
// </div>;

// ReactDOM.render(element,document.getElementById('root'));


//create element in react
// const element = React.createElement("h1",null,"welcome to react");
// ReactDOM.render(element,document.getElementById('root'));

// const element = React.createElement("div",{className:"testclass"},
// React.createElement("h1",null,"welcome to react"),
// React.createElement("h1",null,"demo app"));
// ReactDOM.render(element,document.getElementById('root'));



/////////////////////////////////////////////////////////
//////////Function component example/////////////////////
/////////////////////////////////////////////////////////

//function DisplayEmployeeInfo(employee) or use arrow function
/*var DisplayEmployeeInfo = (employee)=>
{
  return <div>
    <h1>Employee Details...</h1>
    <p>
      <label>Employee ID : <b>{employee.Id}</b></label>
    </p>
    <p>
      <label>Employee Name : <b>{employee.Name}</b></label>
    </p>
    <p>
      <label>Employee Location : <b>{employee.Location}</b></label>
    </p>
    <p>
      <label>Employee Salary : <b>{employee.Salary}</b></label>
    </p>
    <Department deptName ={employee.deptName} headName ={employee.headName}></Department>
  </div>;
}

//multiple components
var Department = (department) =>{
  return <div>
    <p>
      Dept Name is : <b>{department.deptName}</b>
    </p>
    <p>
      Dept Head is : <b>{department.headName}</b>
    </p>
  </div>
}

const element = <DisplayEmployeeInfo Id = "100" Name ="test" Location = "Chicago"
Salary = "10000" deptName ="software" headName="sai"></DisplayEmployeeInfo>;

ReactDOM.render(element,document.getElementById("root"));
*/


/////////////////////////////////////////////////////////
//////////class component example////////////////////////
/////////////////////////////////////////////////////////
/*class Employee extends React.Component
{
  //constructor
  constructor(props)
  {
    super(props);
    console.log(this.props);
    //properties are read only cannot assign manipulate values to them
    //this.props.Name = "test org";
  }

  render()
  {
    return <div>
       <h1>Employee Details...</h1>
      <p>
        <label>Employee ID : <b>{this.props.Id}</b></label>
      </p>
      <p>
         <label>Employee Name : <b>{this.props.Name}</b></label>
      </p>
      <p>
       <label>Employee Location : <b>{this.props.Location}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{this.props.Salary}</b></label>
      </p>
      <Department DeptName ={this.props.DeptName} HeadName ={this.props.HeadName}></Department>
    </div>
  }
}

class Department extends React.Component
{
  render()
  {
    return <div>
      <h1>Department Details..</h1>
      <p>
        Dept Name is : <b>{this.props.DeptName}</b>
      </p>
      <p>
        Dept Head is : <b>{this.props.HeadName}</b>
      </p>
    </div>
  }
}


const element = <Employee Id = "100" Name ="test" Location = "Chicago"
Salary = "10000" DeptName ="software" HeadName="sai"></Employee>;
ReactDOM.render(element,document.getElementById("root"));
*/

/////////////////////////////////////////////////////////
//////////state in class component example///////////////
/////////////////////////////////////////////////////////
/*class CountChars extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state ={message:''};
  }
  onMessageChange=(text)=>{
    this.setState({
        message:'Message has ' +text.length+' number of characters'
    });

  }
  render()
  {
    return <div>
      <h1>Number of characters</h1>
      <p>
        <label>Enter Message: <input type="text" onChange={e => this.onMessageChange(e.target.value)}></input></label>
      </p>
      <p>
        <label>{this.state.message}</label>
      </p>
    </div>
  }
}

class Employee extends React.Component
{
  // state is used to save the state of the the object
  state = {counter:0};
  addEmployee=()=>{
      //alert("adding a new employee");
      this.setState({counter:this.state.counter+1});
  };
  render()
  {
    return <div>
       <h1>Employee component</h1>
      <p>
        <button onClick={this.addEmployee}>Add Employee</button>
      </p>
      <p>
        <label>Add employee button is clicked : <b>{this.state.counter}</b> times</label>
      </p>
    </div>
  }
}
const element = <CountChars></CountChars>
//const element = <Employee></Employee>
ReactDOM.render(element,document.getElementById("root"));*/

/////////////////////////////////////////////////////////
//////////interaction between components example/////////
/////////////////////////////////////////////////////////
/*
class Employee extends React.Component
{
  //constructor
  constructor(props)
  {
    super(props);
    this.state={
      updateSalary:null
    };
  }
  getUpdatedSalary =(salary)=>{
    this.setState({updateSalary:salary});
  }

  render()
  {
    return <div>
       <h1>Employee Details...</h1>
      <p>
        <label>Employee ID : <b>{this.props.Id}</b></label>
      </p>
      <p>
         <label>Employee Name : <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Employee total Salary : <b>{this.props.Salary}</b></label>
      </p>
      <p>
        <label>Update salary : <b>{this.state.updateSalary}</b></label>
      </p>
      <Salary BaseSalary ={this.props.BaseSalary} FederalTax ={this.props.FederalTax} StateTax={this.props.StateTax}
        onSalaryChanged={this.getUpdatedSalary}></Salary>
    </div>
  }
}

class Salary extends React.Component
{
    //constructor
    constructor(props)
    {
      super(props);
      this.state={
        basesal:this.props.BaseSalary,
        ftax:this.props.FederalTax,
        stax:this.props.StateTax
      };
    }
    updateSalary=()=>{
      let salary = parseInt(this.refs.basesal.value) + parseInt(this.refs.ftax.value) + parseInt(this.refs.stax.value);
      //callback
      this.props.onSalaryChanged(salary);
    }
    render()
    {
      return <div>
      <h1>Salary Details...</h1>
      <p>
        <label>Base salary : <input type="text" defaultValue={this.state.basesal} ref="basesal"></input></label>
      </p>
      <p>
         <label>Federal tax : <input type="text" defaultValue={this.state.ftax} ref="ftax"></input></label>
      </p>
      <p>
       <label>State tax : <input type="text" defaultValue={this.state.stax} ref="stax"></input></label>
      </p> 
      <button onClick={this.updateSalary}>Update</button>
      </div>
    }
}

const element = <Employee Id = "100" Name ="sai" Salary = "115000"
BaseSalary = "100000" FederalTax ="10000" StateTax="5000"></Employee>;
ReactDOM.render(element,document.getElementById("root"));*/

/////////////////////////////////////////////////////////
//////////communication using context b/w components/////
/////////////////////////////////////////////////////////

// when ever you need the properties to be shared accross multiple components
// create context

/*const employeeContext = React.createContext();

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      Id:101,
      Name:"test org",
      Salary:150000
    };
  }
  changeEmployeeData=()=>{
    this.setState({Id:102})
  };

    render()
    {
      return <div>
        <h2>Welcome to app component</h2>
        <p>
          <label>Employee id <b>{this.state.Id}</b></label>
        </p>
        <employeeContext.Provider value={this.state}>
          <Employee></Employee>
        </employeeContext.Provider>
        <p>
          <button onClick={this.changeEmployeeData}>Update</button>
        </p>
      </div>
    }
}

class Employee extends React.Component
{
  static contextType = employeeContext;
  render()
    {
      return <div>
        <h2>Welcome to employee component</h2>
        <p>
          <label>Employee id:<b>{this.context.Id}</b></label>
        </p>
        <p>
          <label>Employee name: <b>{this.context.Name}</b></label>
        </p>
        <p>
          <label>Employee salary: <b>{this.context.Salary}</b></label>
        </p>
        <Salary></Salary>
      </div>
    }

}

class Salary extends React.Component
{
  static contextType = employeeContext;
  render()
    {
      return <div>
        <h2>Welcome to salary component</h2>
        <p>
          <label>Employee id <b>{this.context.Id}</b></label>
        </p>
        <p>
          <label>Employee name <b>{this.context.Name}</b></label>
        </p>
        <p>
          <label>Employee salary <b>{this.context.Salary}</b></label>
        </p>
      </div>
    }

}
const element = <App></App>
ReactDOM.render(element,document.getElementById("root"));*/

/////////////////////////////////////////////////////////
//////////////Lists in react/////////////////////////////
/////////////////////////////////////////////////////////
function Employee(props)
{
  return <div>
      <p>
        <label>Employee ID : <b>{props.data.Id}</b></label>
      </p>
      <p>
         <label>Employee Name : <b>{props.data.Name}</b></label>
      </p>
      <p>
       <label>Employee Location : <b>{props.data.Location}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{props.data.Salary}</b></label>
      </p>
  </div>
}

function DisplayEmployee(props)
{
  const empList = props.employeesList;
  const listEmployees = empList.map((emp) =>
            <Employee data={emp}></Employee>);

  return(<div>
    {listEmployees}
  </div>);
}
const employees =[
  {Id:101,Name:'sai',Location:'chicago', Salary:12345},
  {Id:102,Name:'kiran',Location:'arkansas', Salary:24567}
];

const element = <DisplayEmployee employeesList = {employees}></DisplayEmployee>
ReactDOM.render(element,document.getElementById("root"));



