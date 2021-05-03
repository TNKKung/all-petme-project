
import React, { useEffect, useState, useRef } from "react";

import './provinceInput.css'

const ProvinceInput = ({setDistrict,setSubDistrict,
  setProvince,setPostalCode}) => {

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
    changeAP(shallowSingleAmphoe[0],shallowAmphoe)
  }

  
  const changeAP = (ev,amphoeDataFunc) => {

    setInputAmphoe(ev)
    let selectedAmphoe = ev

    let index = 1
    const shallowDistrict = []
    const shallowSingleDistrict = []
    for(let i =0;i<amphoeDataFunc.length;i++){
      
      if (amphoeDataFunc[i].amphoe == selectedAmphoe) {
        if (false === (shallowSingleDistrict.includes(amphoeDataFunc[i].district))) {
          shallowSingleDistrict.push(amphoeDataFunc[i].district)
          shallowDistrict.push(amphoeDataFunc[i])
        }
      }
    }
    setDistrictData(shallowDistrict)
    changeDT(shallowSingleDistrict[0])
  }

  const changeDT = (ev) => {
    setInputDistrict(ev)
    showPostalcode(inputDistrict,inputAmphoe,inputProvince)
  }

  const getPostalCode = (dis,amp,prov) =>{
    let i =0
    let index = 1
    
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
    var currentPostalCode = getPostalCode(inpDistrict,inpAmphoe,inpProvince)
    if(currentPostalCode != 0){

      setDistrict(inputAmphoe)
      setSubDistrict(inpDistrict)
      setProvince(inpProvince)
      setPostalCode(currentPostalCode)
      return setInputPostalCode(currentPostalCode)
    }
    else setInputPostalCode("")
  }


  return (
    <div className='addpad'>
      <div class='reg-blockA'>
      <text class='reg-input-headA'>จังหวัด</text>
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
          <div class='pad'>
            <select
              title="เลือกจังหวัด"
              id="select-testing"
              class="selectProvinceA"
              onChange={(event) => {
                changePV(event.target.value)
                setProvince(event.target.value)
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
        <text class='reg-input-headA'>อำเภอ</text>
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
          <div class='pad'>
            <select
              title="เลือกอำเภอ"
              id="select-testing"
              class="selectProvinceA"
              onChange={(event) => {
                changeAP(event.target.value,amphoeData)
                setDistrict(event.target.value)
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
        <text class='reg-input-headA'>ตำบล/เขต</text>
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
          <div class='pad'>
            <select
              title="เลือกตำบล"
              id="select-testing2"
              class="selectProvinceA2"
              onChange={(event) => {
                changeDT(event.target.value)
                setSubDistrict(event.target.value)
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

  

        <div class='reg-blockAa2'>
          <text class='reg-input-headA'>รหัสไปรษณีย์</text>
          <div className='sdskaka'>{inputPostalCode}</div>
        </div>
      </div>


    </div>
  );
}

export default ProvinceInput


