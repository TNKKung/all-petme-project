import React, { useEffect, useState, useRef } from "react";
import validator from 'validator'

import './test.css'

const Test = () => {
  const [display, setDisplay] = useState(false);
  const [singleProvince, setSingleProvince] = useState([]);
  const [singleProvinceData, setSingleProvinceData] = useState([]);
  const [addTog, setAddTog] = useState('▼')
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const province_dataBase_url = 'https://raw.githubusercontent.com/earthchie/jquery.Thailand.js/master/jquery.Thailand.js/database/raw_database/raw_database.json'

  useEffect(() => {
    const promises = new Array(20).fill(fetch(province_dataBase_url)
      .then((res) => {
        return res.json().then((data) => {

          const shallowSingleProvinceList = [];
          const shallowSingleProvinceDataList = [];
          const createSingleProvince = data.filter((each) => {
            if (false == (shallowSingleProvinceList.includes(each.province))) {
              shallowSingleProvinceList.push(each.province)
              shallowSingleProvinceDataList.push(each)
            }
          })

          setSingleProvince(shallowSingleProvinceList)
          setSingleProvinceData(shallowSingleProvinceDataList)
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

  const updateProvince = inputProvince => {
    setSearch(inputProvince);
    setDisplay(false);
  };

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
    
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  return (
    <div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <header class="card-header">
                <a href="" class="float-right btn btn-outline-primary mt-1">Log in</a>
                <h4 class="card-title mt-2">Sign up</h4>
              </header>
              <article class="card-body">
                <form>
                  <div class="form-row">
                    <div class="col form-group">
                      <label>First name </label>
                      <input type="text" class="form-control" placeholder="" />
                    </div>
                    <div class="col form-group">
                      <label>Last name</label>
                      <input type="text" class="form-control" placeholder=" " />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="" onChange={(e) => validateEmail(e)}></input>
                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <span style={{ fontWeight: 'bold', color: 'red'}}>{emailError}</span>
                  </div>
                  <div class="form-group">
                    <label class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" value="option1" />
                      <span class="form-check-label"> Male </span>
                    </label>
                    <label class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" value="option2" />
                      <span class="form-check-label"> Female</span>
                    </label>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>City</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Country</label>
                      <select id="inputState" class="form-control">
                        <option> Choose...</option>
                        <option>Uzbekistan</option>
                        <option>Russia</option>
                        <option selected="">United States</option>
                        <option>India</option>
                        <option>Afganistan</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Create password</label>
                    <input class="form-control" type="password" />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block"> Register  </button>
                  </div>
                  <small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our Terms of use and Privacy Policy.</small>
                </form>
              </article>
              <div class="border-top card-body text-center">Have an account? <a href="">Log In</a></div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default Test
