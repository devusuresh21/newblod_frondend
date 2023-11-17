import React from 'react'

const Register = () => {
    return (
        <div>
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <div className="border p-4">
                    <div className="row g-3">
                        <div className="col-12">
                            <h1 className="text-center">Login</h1>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Profile image</label>
                                <input type="file" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-success" >
                                Register
                            </button>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-success" href="/">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Register