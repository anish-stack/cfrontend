import   { useEffect } from 'react'
import './callBack.css'
import bg from '../callBackForm/call-bg.png'

const CallBack = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, []);
    return (
        <>
            <div className="login-container">
                <div className="container">
                    <div className="main-login-box">
                        <div className="login-form-main">
                            <div className="heading">
                                <span>For Any Query</span>
                            </div>
                            <form action="">
                                <input type="name" placeholder='Enter Your Name' />
                                <input type="email" placeholder='Enter Your Email' />
                                <input type="text" placeholder='Enter Your Number' />
                                <textarea name="message" id="message" placeholder='Enter Your Message'></textarea>
                                <div className="button-box">
                                    <div className="up-btn">
                                        <button className='btn-grad'>Submit</button>
                                    </div>
                                    {/* <hr />
                                    <div className="down-link">
                                        <span>Don't have an account ?</span>
                                  
                                        <a href="">Register</a>
                                    </div> */}
                                </div>
                            </form>
                        </div>

                        <div className="right-bg">
                            <img src={bg} alt="callback-bg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallBack
