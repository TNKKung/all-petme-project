// import React, { useEffect, useState, useRef } from "react";

// import './provinceInput.css'

// const ProvinceInput = () => {
//   const [display, setDisplay] = useState(false);
//   const [singleProvince, setSingleProvince] = useState([]);
//   const [singleProvinceData, setSingleProvinceData] = useState([]);
//   const [addTog,setAddTog] = useState('▼')
//   const [search, setSearch] = useState("");
//   const wrapperRef = useRef(null);

//   const province_dataBase_url = 'https://raw.githubusercontent.com/earthchie/jquery.Thailand.js/master/jquery.Thailand.js/database/raw_database/raw_database.json'

//   useEffect(() => {  
//     const promises = new Array(20).fill(fetch(province_dataBase_url)
//     .then((res) => { 
//       return res.json().then((data) => { 

//         const shallowSingleProvinceList = [];
//         const shallowSingleProvinceDataList = [];
//         const createSingleProvince = data.filter( (each) => {
//           if (false === (shallowSingleProvinceList.includes(each.province))) {
//             shallowSingleProvinceList.push(each.province)
//             shallowSingleProvinceDataList.push(each)
//           }
//         })

//         setSingleProvince(shallowSingleProvinceList)
//         setSingleProvinceData(shallowSingleProvinceDataList)
//         return data;
//       }).catch((err) => {
//           console.log(err);
//       }) 
//     }))
//     }, [])

//   useEffect(() => {
//       window.addEventListener("mousedown", handleClickOutside);
//       return () => {
//       window.removeEventListener("mousedown", handleClickOutside);
//       };
//   });

//   const handleClickOutside = event => {
//       const { current: wrap } = wrapperRef;
//       if (wrap && !wrap.contains(event.target)) {
//         setDisplay(false);
//       }
//   };

//   const updateProvince = inputProvince => {
//       setSearch(inputProvince);
//       setDisplay(false);
//   };

//   return (
//     <div>
//     <div ref={wrapperRef} className="flex-container flex-column pos-rel">
//       <div class ='pad'>
//       <input
//         className = 'inputProvince'
//         id="auto"
//         placeholder="กรุณากรอกจังหวัด"
//         value={'  '+search}
//         onChange={event => {
//             let p = event.target.value
//             setSearch(event.target.value.replace(/\s/g, ''))}}
//       />
//       <div className='bttPad' onClick= { () =>{
//           addTog === '▲'?setAddTog('▼'):setAddTog('▲')
//           setDisplay(!display)
//       }
//       }><div className = 'bttText'>{addTog}</div></div>
//       </div>
//       {display && (
//         <div className="autoContainer">
//           { singleProvinceData
//             .filter( ({province}) => province.indexOf(search.toLowerCase()) > -1)
//             .map( (each,i) => {
//               return (
//                 <div 
//                   onClick={() => updateProvince(each.province)}
//                   className="singleProvinceData"
//                   key={i}
//                   tabIndex="0"
//                 >
//                 <span>{each.province}</span>
//                 </div>
//               )
//             })}
//         </div>
//       )}
//       </div>

//     </div>
//   );
// }

// export default ProvinceInput



import React, { useEffect, useState, useRef } from "react";

import './provinceInput.css'

const ProvinceInput = () => {
  const [display,setDisplay] =useState(false)
  const [singleProvinceData, setSingleProvinceData] = useState([]);
  const [districtData, setDistrictData] = useState([{"amphoe":"คลองท่อม","zipcode":81120,"district":"คลองท่อมเหนือ","province":"กระบี่","amphoe_code":8104,"district_code":810402,"province_code":81},{"amphoe":"คลองท่อม","zipcode":81120,"district":"คลองท่อมใต้","province":"กระบี่","amphoe_code":8104,"district_code":810401,"province_code":81},{"amphoe":"คลองท่อม","zipcode":81170,"district":"คลองพน","province":"กระบี่","amphoe_code":8104,"district_code":810403,"province_code":81},{"amphoe":"คลองท่อม","zipcode":81170,"district":"ทรายขาว","province":"กระบี่","amphoe_code":8104,"district_code":810404,"province_code":81},{"amphoe":"คลองท่อม","zipcode":81120,"district":"พรุดินนา","province":"กระบี่","amphoe_code":8104,"district_code":810406,"province_code":81},{"amphoe":"คลองท่อม","zipcode":81120,"district":"ห้วยน้ำขาว","province":"กระบี่","amphoe_code":8104,"district_code":810405,"province_code":81},{"amphoe":"คลองท่อม","zipcode":81120,"district":"เพหลา","province":"กระบี่","amphoe_code":8104,"district_code":810407,"province_code":81}]);
  const [singleAmphoeData, setSingleAmphoeData] = useState(['ครองท่อม','ปลายพระยา','ลำทับ','อ่าวลึก','เกาะลันตา','เขาพนม','เมืองกระบี่','เหนือครอง']);
  const [amphoeData, setAmphoeData] = useState([]);
  
  const [provinceData, setProvinceData] = useState([]);
  const [inputPostalCode, setInputPostalCode] = useState("81120")
  const [inputAmphoe, setInputAmphoe] = useState("คลองท่อม")
  const [inputDistrict, setInputDistrict] = useState("คลองท่อมเหนือ")

  const [inputProvince, setInputProvince] = useState('กระบี่')
  const wrapperRef = useRef(null);
  const [provinceInterval,setProvinceInterval] = useState([])
  const  province_dataBase_url= 'https://raw.githubusercontent.com/earthchie/jquery.Thailand.js/master/jquery.Thailand.js/database/raw_database/raw_database.json'
  //const province_dataBase_url = 'https://api.npoint.io/96c60b86db7a518ace7c'


  useEffect(() => {
    const promises = new Array(20).fill(fetch(province_dataBase_url)
      .then((res) => {
        return res.json().then((data) => {
          let i = -1
          const intervalList = []
          const shallowProvinceDataList = [];
          const shallowSingleProvinceList = [];
          const shallowSingleProvinceDataList = [];
          const createSingleProvince = data.filter((each) => {
            i=i+1
            if (false === (shallowSingleProvinceList.includes(each.province))) {
              shallowSingleProvinceList.push(each.province)
              shallowSingleProvinceDataList.push(each)
            }
            else {
              intervalList.push(i)
            }
            shallowProvinceDataList.push(each)
          })
          setProvinceData(shallowProvinceDataList)
          setSingleProvinceData(shallowSingleProvinceDataList)
          setProvinceInterval(intervalList)
          return data;
        }).catch((err) => {
          console.log(err);
        })
      }))
  }, [])

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };


  const changePV = (ev) => {
    setInputProvince(ev)
    

    let i =0
    let index = 1

    const shallowAmphoe = []
    const shallowSingleAmphoe = []

    for(;i<provinceData.length;i++){
      if (provinceData[i].province == ev) {
        shallowAmphoe.push(provinceData[i])
        if (false === (shallowSingleAmphoe.includes(provinceData[i].amphoe))) {
          shallowSingleAmphoe.push(provinceData[i].amphoe)
        }
      }
      else if(i<provinceData.length-1){
        i = provinceInterval[index]-1
        index = index +1
      }
    }
    setSingleAmphoeData(shallowSingleAmphoe)
    setAmphoeData(shallowAmphoe)
    changeAP(shallowSingleAmphoe[0])
  }

  
  const changeAP = (ev) => {
    console.log('changeAP')

    setInputAmphoe(ev)
    let selectedAmphoe = ev

    let index = 1
    const shallowDistrict = []
    const shallowSingleDistrict = []
    console.log(amphoeData)
    for(let i =0;i<amphoeData.length;i++){
      console.log(amphoeData[i].amphoe,selectedAmphoe)
      if (amphoeData[i].amphoe == selectedAmphoe) {
        if (false === (shallowSingleDistrict.includes(amphoeData[i].district))) {
          shallowSingleDistrict.push(amphoeData[i].district)
          shallowDistrict.push(amphoeData[i])
        }
      }
    }
    
    setDistrictData(shallowDistrict)
    //console.log(shallowSingleDistrict[0])
    changeDT(shallowSingleDistrict[0])
  }

  const changeDT = (ev) => {
    setInputDistrict(ev)
    showPostalcode(inputDistrict,inputAmphoe,inputProvince)
  }

  const getPostalCode = (dis,amp,prov) =>{
    let i =0
    let index = 1
    
    //console.log(`i:${i} index:${index}\ndis:${dis} amp:${amp} prov:${prov}`)
    for(;i<provinceData.length;i++){
      if (provinceData[i].province == prov) {
        if (provinceData[i].district == dis & provinceData[i].amphoe == amp){
          return provinceData[i].zipcode
        }
      }
      else if(i<provinceData.length-1){
        i = provinceInterval[index]-1
        index = index +1
      }
    }
    return 0
  }

  const showPostalcode = (inpDistrict,inpAmphoe,inpProvince) => {
    //console.log('start show postal')
    //console.log(`dt:${inpDistrict} ap:${inpAmphoe} pv:${inpProvince} `)
    var currentPostalCode = getPostalCode(inpDistrict,inpAmphoe,inpProvince)
    if(currentPostalCode != 0){
      return setInputPostalCode(currentPostalCode)
    }
    else setInputPostalCode("")
  }


  return (
    <div className='addpad'>
      <div class='reg-block'>
      <text class='reg-input-head'>จังหวัด</text>
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
          <div class='pad'>
            <select
              title="เลือกจังหวัด"
              id="select-testing"
              class="selectProvince"
              onChange={(event) => {
                changePV(event.target.value)
              }}
              value = {inputProvince}
            >
              {singleProvinceData.map(each => {
                return (
                  <option value= {each.province}>{each.province}</option>
                )
              })}
            </select>
          </div>
        </div>
        
        <div class='reg-block'>
        <text class='reg-input-head'>อำเภอ</text>
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
          <div class='pad'>
            <select
              title="เลือกอำเภอ"
              id="select-testing"
              class="selectProvince"
              onChange={(event) => {
                changeAP(event.target.value)
              }}
              value = {inputAmphoe}
            >
              {singleAmphoeData.map(each => {
                return (
                  <option value= {each}>{each}</option>
                )
              })}
            </select>
          </div>
          </div>
        {/* <input
          className='reg-input-wrapper'
          id="auto"
          placeholder="กรุณากรอกรหัสไปรษณีย์"
          value={'  ' + inputAmphoe}
          onChange={event => {
            let p = event.target.value
            setInputAmphoe(event.target.value.replace(/\s/g, ''))

          }}
        /> */}
      </div>

      <div class='reg-block'>
        <text class='reg-input-head'>ตำบล/เขต</text>
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
          <div class='pad'>
            <select
              title="เลือกตำบล"
              id="select-testing2"
              class="selectProvince"
              onChange={(event) => {
                changeDT(event.target.value)
                console.log(event.target.value)
              }}
              value = {inputDistrict}
            >
              {districtData.map(each => {
                return (
                  <option value= {each.district}>{each.district}</option>
                )
              })}
            </select>
          </div>
          </div>
        {/* <input
          className='reg-input-wrapper'
          id="auto"
          placeholder="กรุณากรอกรหัสไปรษณีย์"
          value={'  ' + inputDistrict}
          onChange={event => {
            let p = event.target.value
            setInputDistrict(event.target.value.replace(/\s/g, ''))
          }}
        /> */}
      </div>

     
      

      

        <div class='reg-block'>
          <text class='reg-input-head'>รหัสไปรษณีย์</text>
          <input
            className='reg-input-wrapper'
            id="auto"
            placeholder="กรุณากรอกรหัสไปรษณีย์"
            value={'  ' + inputPostalCode}
            onChange={event => {
              let p = event.target.value
              setInputPostalCode(event.target.value.replace(/\s/g, ''))
            }}
          />
        </div>
      </div>


    </div>
  );
}

export default ProvinceInput



