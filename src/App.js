import React, { Component } from 'react';
import logo from './logo.svg';
import NestedDD from "./NestedDD.js";
import './App.css';

class App extends Component {
  state= {
    dropdownData: [{
      "id": "31",
      "label": "IT & Telecom",
      "subItems": [{
        "id": "433",
        "label": "Software Developement"
      }, {
        "id": "313",
        "label": "Project Management"
      }, {
        "id": "367",
        "label": "Big Data & Hadoop"
      }, {
        "id": "307",
        "label": "Software development"
      }, {
        "id": "325",
        "label": "Software testing"
      }, {
        "id": "343",
        "label": "OS & Databases"
      }, {
        "id": "315",
        "label": "IT Hardware & Networking"
      }, {
        "id": "317",
        "label": "IT Security & Cloud Computing"
      }, {
        "id": "293",
        "label": "Software Tools"
      }, {
        "id": "385",
        "label": "Telecom"
      }, {
        "id": "409",
        "label": "Others"
      }]
    }, {
      "id": "41",
      "label": "BPO, Operations & Engineering",
      "subItems": [{
        "id": "311",
        "label": "Six Sigma & Quality"
      }, {
        "id": "383",
        "label": "BPO"
      }, {
        "id": "303",
        "label": "Logistics & Supply Chain"
      }, {
        "id": "329",
        "label": "Engineering & Construction"
      }, {
        "id": "361",
        "label": "Production"
      }, {
        "id": "327",
        "label": "Export Import"
      }, {
        "id": "377",
        "label": "Others"
      }]
    }, {
      "id": "35",
      "label": "Banking, Finance & Analytics",
      "subItems": [{
        "id": "441",
        "label": "Finance and Risk Management"
      }, {
        "id": "309",
        "label": "Data Science & Analytics"
      }, {
        "id": "319",
        "label": "Finance & Risk Management"
      }, {
        "id": "323",
        "label": "Banking & Investments"
      }, {
        "id": "297",
        "label": "Accounting"
      }, {
        "id": "335",
        "label": "Stock trading"
      }, {
        "id": "373",
        "label": "Insurance"
      }, {
        "id": "405",
        "label": "Others"
      }]
    }, {
      "id": "39",
      "label": "Marketing",
      "subItems": [{
        "id": "445",
        "label": "Software development"
      }, {
        "id": "301",
        "label": "Digital Marketing"
      }, {
        "id": "355",
        "label": "Advertising"
      }, {
        "id": "337",
        "label": "Content Writing"
      }, {
        "id": "321",
        "label": "Marketing Tools"
      }, {
        "id": "347",
        "label": "PR & Branding"
      }, {
        "id": "363",
        "label": "Services Marketing"
      }, {
        "id": "357",
        "label": "Others"
      }]
    }, {
      "id": "33",
      "label": "Design",
      "subItems": [{
        "id": "305",
        "label": "Web Design"
      }, {
        "id": "295",
        "label": "Design Tools"
      }, {
        "id": "389",
        "label": "Animation & Game Design"
      }, {
        "id": "369",
        "label": "Interior Design"
      }, {
        "id": "365",
        "label": "Others"
      }, {
        "id": "381",
        "label": "Architectural Design"
      }]
    }, {
      "id": "45",
      "label": "Sales & Business Development",
      "subItems": [{
        "id": "341",
        "label": "Sales"
      }, {
        "id": "345",
        "label": "Retail"
      }, {
        "id": "393",
        "label": "Others"
      }]
    }, {
      "id": "37",
      "label": "Human Resources & Administration",
      "subItems": [{
        "id": "299",
        "label": "Human Resource Management"
      }, {
        "id": "331",
        "label": "Compensation & Benefits"
      }, {
        "id": "395",
        "label": "Training & Development"
      }, {
        "id": "349",
        "label": "Recruitment"
      }, {
        "id": "379",
        "label": "Administration"
      }]
    }, {
      "id": "47",
      "label": "Healthcare",
      "subItems": [{
        "id": "353",
        "label": "Healthcare Management"
      }, {
        "id": "359",
        "label": "Fitness & Nutrition"
      }]
    }, {
      "id": "49",
      "label": "Leadership & Management",
      "subItems": [{
        "id": "387",
        "label": "Strategy & Leadership"
      }, {
        "id": "391",
        "label": "Personality Development"
      }]
    }, {
      "id": "85",
      "label": "Executive Programs",
      "subItems": []
    }, {
      "id": "43",
      "label": "Others",
      "subItems": [{
        "id": "371",
        "label": "Languages"
      }, {
        "id": "351",
        "label": "Law"
      }, {
        "id": "333",
        "label": "Teaching & Academics"
      }, {
        "id": "339",
        "label": "Lifestyle"
      }, {
        "id": "397",
        "label": "Hobbies"
      }, {
        "id": "375",
        "label": "Others"
      }]
    }, {
      "id": "77",
      "label": "Banking, Finance and Analytics",
      "subItems": [{
        "id": "437",
        "label": "Banking & Investments"
      }, {
        "id": "435",
        "label": "Finance and Risk Management"
      }, {
        "id": "443",
        "label": "Accounting"
      }]
    }]
  }

  render() {
    const {dropdownData}= this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="App-intro">
          <NestedDD dropdownData={dropdownData} multiSelect checkboxes />
        </main>
      </div>
    );
  }
}

export default App;
