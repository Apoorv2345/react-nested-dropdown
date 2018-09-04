import React, { Component } from 'react';
import logo from './logo.svg';
import NestedDD from "./NestedDD/index.js";
import './App.css';

class App extends Component {

  state= {
    dropdownData:[{
      "id": 946,
      "label": "United States",
      "subItems": [
        {
          "id": 925,
          "label": "Jõhvi"
        }
      ]
    }, {
      "id": 989,
      "label": "China",
      "subItems": [
        {
          "id": 222,
          "label": "Litibakul"
        },
        {
          "id": 601,
          "label": "Qesarya"
        },
        {
          "id": 608,
          "label": "Hakui"
        },
        {
          "id": 502,
          "label": "Kafir Qala"
        }
      ]
    }, {
      "id": 145,
      "label": "Philippines",
      "subItems": [
        {
          "id": 514,
          "label": "Magapit"
        },
        {
          "id": 442,
          "label": "Salam"
        },
        {
          "id": 831,
          "label": "Cazin"
        },
        {
          "id": 940,
          "label": "Gainesville"
        },
        {
          "id": 738,
          "label": "Challans"
        },
        {
          "id": 138,
          "label": "Daojiang"
        },
        {
          "id": 434,
          "label": "Sungayang"
        },
        {
          "id": 896,
          "label": "Thạnh Mỹ"
        },
        {
          "id": 213,
          "label": "Al ‘Āliyah"
        },
        {
          "id": 771,
          "label": "Massy"
        },
        {
          "id": 109,
          "label": "Dihtyari"
        },
        {
          "id": 431,
          "label": "Montréal-Ouest"
        },
        {
          "id": 399,
          "label": "Tugulym"
        },
        {
          "id": 200,
          "label": "Nizhnevartovsk"
        },
        {
          "id": 101,
          "label": "Pingyao"
        },
        {
          "id": 651,
          "label": "Roa"
        }
      ]
    }, {
      "id": 939,
      "label": "Czech Republic",
      "subItems": [
        {
          "id": 361,
          "label": "Aygek"
        },
        {
          "id": 606,
          "label": "Bergen"
        },
        {
          "id": 575,
          "label": "Corrientes"
        },
        {
          "id": 848,
          "label": "Geputan"
        },
        {
          "id": 581,
          "label": "Soi Dao"
        },
        {
          "id": 561,
          "label": "Maoqitun"
        },
        {
          "id": 817,
          "label": "Jijia"
        },
        {
          "id": 781,
          "label": "Riđica"
        },
        {
          "id": 876,
          "label": "Thị Trấn Mường Khương"
        },
        {
          "id": 965,
          "label": "Sempu"
        },
        {
          "id": 124,
          "label": "Fenais da Luz"
        },
        {
          "id": 331,
          "label": "Xialu"
        },
        {
          "id": 437,
          "label": "Bébédja"
        },
        {
          "id": 785,
          "label": "Komyshnya"
        },
        {
          "id": 427,
          "label": "Al Jarrāḩī"
        },
        {
          "id": 731,
          "label": "London"
        },
        {
          "id": 100,
          "label": "Boyu"
        },
        {
          "id": 765,
          "label": "Los Guayos"
        },
        {
          "id": 641,
          "label": "‘Amrān"
        }
      ]
    }, {
      "id": 459,
      "label": "Lesotho",
      "subItems": [
        {
          "id": 622,
          "label": "Vilar do Monte"
        },
        {
          "id": 636,
          "label": "Calape"
        }
      ]
    }, {
      "id": 321,
      "label": "Netherlands",
      "subItems": [
        {
          "id": 115,
          "label": "Zhongchao"
        },
        {
          "id": 182,
          "label": "Katoro"
        },
        {
          "id": 376,
          "label": "Stanišić"
        },
        {
          "id": 995,
          "label": "Sigetec"
        }
      ]
    }, {
      "id": 480,
      "label": "China",
      "subItems": [
        {
          "id": 898,
          "label": "Santa Fe"
        },
        {
          "id": 755,
          "label": "Belo Jardim"
        },
        {
          "id": 532,
          "label": "Belogorsk"
        }
      ]
    }, {
      "id": 100,
      "label": "Honduras",
      "subItems": [
        {
          "id": 442,
          "label": "Eshan"
        },
        {
          "id": 804,
          "label": "Nova Venécia"
        },
        {
          "id": 926,
          "label": "Sade"
        },
        {
          "id": 158,
          "label": "Knin"
        },
        {
          "id": 216,
          "label": "Pampas Chico"
        },
        {
          "id": 303,
          "label": "Blinsung"
        },
        {
          "id": 607,
          "label": "Thị Trấn Sìn Hồ"
        }
      ]
    }, {
      "id": 594,
      "label": "Indonesia",
      "subItems": [
        {
          "id": 250,
          "label": "Wang Noi"
        }
      ]
    }, {
      "id": 635,
      "label": "Poland",
      "subItems": [
        {
          "id": 117,
          "label": "Kallithéa"
        },
        {
          "id": 104,
          "label": "Chengjiao"
        },
        {
          "id": 579,
          "label": "Zipárion"
        },
        {
          "id": 970,
          "label": "Goiânia"
        },
        {
          "id": 581,
          "label": "Hukou"
        },
        {
          "id": 123,
          "label": "Santai"
        },
        {
          "id": 525,
          "label": "Ključ"
        },
        {
          "id": 781,
          "label": "Gempolan Wetan"
        },
        {
          "id": 214,
          "label": "António Enes"
        },
        {
          "id": 226,
          "label": "Tiling"
        },
        {
          "id": 418,
          "label": "Sendangagung"
        },
        {
          "id": 885,
          "label": "Shuangqiaoping"
        },
        {
          "id": 967,
          "label": "Tây Đằng"
        },
        {
          "id": 367,
          "label": "Andrijevica"
        },
        {
          "id": 422,
          "label": "Hŭngnam"
        },
        {
          "id": 109,
          "label": "Chyňava"
        },
        {
          "id": 670,
          "label": "Tosno"
        },
        {
          "id": 672,
          "label": "Taoyuan"
        },
        {
          "id": 818,
          "label": "Lymanske"
        }
      ]
    }]
  }

  /**
   * [Callback for nested dd select action ]
   * @param  {[type]} list [description]
   * @return {[type]}      [description]
   */
  nestedDDCallBack=(list)=>{
    console.log(list);
  }

  /**
   * [render apps render function]
   * @return {[type]} [description]
   */
  render() {
    const {dropdownData}= this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nested Dropdown below 🙇 </h1>
        </header>
        <main className="App-intro">
          {/* You can use nested dropdown as a component like below */}
          <NestedDD dropdownData={dropdownData} multiSelect checkboxes onSelectCallBack={this.nestedDDCallBack} />
        </main>
      </div>
    );
  }
}

export default App;
