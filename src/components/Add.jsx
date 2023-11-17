import React from 'react'

const Add = () => {
    const[inputField,changeInputField]=useState({
        "userid": "",
        "title": "",
        "message": ""
        
      });
    
      const InputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        console.log(inputField)
       
        
    }
    
      return (
        <div>
          <div className="container">
            <Navbar />
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="title" className="form-label">Userid</label>
                    <input
                      type="text"
                      className="form-control"
                      name="userid"
                      value={inputField.title}
                      onChange={InputHandler}
                    />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="description" className="form-label">Title</label>
                    <textarea
                      className="form-control"
                      name="title"
                      value={inputField.title}
                      onChange={InputHandler}
                    />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="company" className="form-label">Message</label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      value={inputField.message}
                      onChange={InputHandler}
                    />
                  </div>
                  
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center>
                      <button onClick={readValue} className="btn btn-success">
                        Add Blog
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Add