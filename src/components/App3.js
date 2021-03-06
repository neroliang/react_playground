import React, { Component } from 'react';

// var EmployeeAutoComplete = React.createClass({
//   render: function() {
//   	return (
//               <input type="text" placeholder="School Name or Moe ID(1)" id="search-input"  onClick="alert();" />
//               <table className="search-results">
//                 <tbody>
//                   {filteredSchools}
//                 </tbody>
//               </table>
//           </div>
//           );
// 	});
//http://reactjs.cn/react/docs/thinking-in-react.html

var EmployeeRow = React.createClass({
  render: function() {
    var lastName = 
      <span>
        {this.props.employee.lastName}
      </span>;

    console.log(this.props.key);
    return (
      <tr>
        <td>{lastName}</td>
        <td>{this.props.employee.managerName} ##</td>
      </tr>
    );
  }
});


var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." id="search-input" />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} />
          {' '}
          Only show current employees
        </p>
      </form>
    );
  }
});

var EmployeeTable = React.createClass({
	render: function() {

    var rows = [];
    this.props.employees.forEach(function(entry) {
    	console.log(entry.firstName);
      rows.push(<EmployeeRow employee={entry} key={entry.firstName} />);
    });

		return (
      <table className="search-results">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manager s Name</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
     );
	}
});

var EmployeeAutoComplete = React.createClass({
  render: function() {
    return (
      <div id="school-admin-search-container"> 
        <SearchBar />
        <EmployeeTable employees={this.props.employee_list} />
      </div>
    );
  }
});

 // extends Component {
 //  constructor() {
 //    super()
 //      this.state = {
 //        filtered_schools: []
 //      }
 //  }

  // onSearchChange(e) {
  //   const searchValue = e.target.value;
  //   debugger;
  //   // const employees = [
  //   //             {"id": 1, "firstName": "James", "lastName": "King", },
  //   //             {"id": 2, "firstName": "Julie", "lastName": "Taylor", },
  //   //             {"id": 3, "firstName": "Eugene", "lastName": "Lee", },
  //   //         ];

  //   this.setState({
  //     filtered_schools: _.filter(employees, (item) => {
  //       return (
  //           searchValue != '' &&
  //           (item.firstName.toLowerCase().startsWith(searchValue) ||
  //            item.id.startsWith(searchValue))
  //           )}).slice(0, 20)
  //   }) 
  // }

//   render() {
//     const filteredSchools = "<tr><td>111</td><td>222</td></tr>";
//     //this.state.filtered_schools;
//     //.map((school_profile, i) => <h2 name={school_profile} key={i} />)
//     // debugger;
//       return (
//           <div id="school-admin-search-container"> 
//               <input type="text" placeholder="School Name or Moe ID(1)" id="search-input"  onClick="alert();" />
//               <table className="search-results">
//                 <tbody>
//                   {filteredSchools}
//                 </tbody>
//                 </table>
//           </div>
//           );
//   }
// }

// onchange={this.onSearchChange.bind(this)}
//
// class Employee extends Component {
//   goToSchoolAdminDashboard(moe_id) {
//     window.location = window.location + '/manage/' + moe_id;
//   }

//   render() {
//     const {id, firstName} = this.props.school_profile;

//     return (
//         <tr className="search-result" onClick={this.goToSchoolAdminDashboard.bind(null, moe_id)}>
//           <td className="result-moe-id">{moe_id}</td>
//           <td className="result-school-name">{school_name}</td>
//         </tr>
//         );
//   }
// }


var EMPLOYEES = [
            {"id": 1, "firstName": "James", "lastName": "King", "managerId": 0, "managerName": "", "reports": 4, "title": "President and CEO", "department": "Corporate", "mobilePhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "james_king.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "mobilePhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "julie_taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "mobilePhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "eugene_lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "mobilePhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Ray", "lastName": "Moore", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "mobilePhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "ray_moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Paul", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "mobilePhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "paul_jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Paula", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "mobilePhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "paula_gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Lisa", "lastName": "Wong", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "mobilePhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "lisa_wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Gary", "lastName": "Donovan", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "mobilePhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "gary_donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "mobilePhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "mobilePhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "amy_jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Steven", "lastName": "Wells", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "mobilePhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "steven_wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        ];


export default class App extends Component {
  render() {
    return (
      <EmployeeAutoComplete employee_list={EMPLOYEES} />
    );
  }

};

