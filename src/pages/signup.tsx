import './sign.css'
export default function Register(){
    return(
        <>
            <div className="wrapper">
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">
                            <img src="../images/b1.jpg" alt=""/>
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <header>Create account</header>
                                <div className="input-field">
                                    <input type="text" className="input" id="email"  required={true} autoComplete="on"/>
                                        <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" className="input" required={true} id="pass"/>
                                        <label htmlFor="pass">Password</label>
                                </div>
                                <div className="input-field">

                                    <input type="submit" className="submit" value="Sign Up"/>
                                </div>
                                <div className="signin">
                                    <span>Already have an account? <a href="#">Log in here</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}