import React from 'react'
import { Row, Col } from 'antd';
import SignUpForm from './components/SignUpForm';

import logo from '../../assets/logo-light.png';
import './scss/footer.scss';
function Footer() {
  return (
    <footer >
      <section className='footer__top'>
        <div className="container">
          <Row gutter={[30, 30]} align='middle'>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <SignUpForm />
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <Row gutter={[30, 30]}>
                <Col xl={8} lg={8} md={8} sm={12} xs={12} className='footer__col--left'>
                  <ul>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Terms of Use</a>
                    </li>
                    <li>
                      <a href="/">Global Office</a>
                    </li>
                    <li>
                      <a href="/">Local Office</a>
                    </li>
                  </ul>
                </Col>
                <Col xl={10} lg={10} md={10} sm={12} xs={12} className='footer__col--right'>
                  <ul>
                    <li>
                      <a href="/">
                        <Row gutter={[30, 30]} align='middle'>
                          <Col>
                            <div className='background-primary text-center d-flex align-items-center radius-primary'
                              style={{ height: '40px', width: ' 40px' }}
                            >
                              <span class="fab fa-linkedin-in" style={{ width: '100%', color: '#fff' }} />
                            </div>
                          </Col>
                          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5>Linkedin</h5>
                          </Col>
                        </Row>
                      </a>
                    </li>
                    <li>
                      <Row gutter={[30, 30]} align='middle'>
                        <Col>
                          <div className='background-primary text-center d-flex align-items-center radius-primary'
                            style={{ height: '40px', width: ' 40px' }}
                          >
                            <span class="fab fa-twitter" style={{ width: '100%', color: '#fff' }} />
                          </div>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                          <h5>Twitter</h5>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row gutter={[30, 30]} align='middle'>
                        <Col>
                          <div className='background-primary text-center d-flex align-items-center radius-primary'
                            style={{ height: '40px', width: ' 40px' }}
                          >
                            <span class="fab fa-facebook-f" style={{ width: '100%', color: '#fff' }} />
                          </div>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                          <h5>Facebook</h5>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row gutter={[30, 30]} align='middle'>
                        <Col>
                          <div className='background-primary text-center d-flex align-items-center radius-primary'
                            style={{ height: '40px', width: ' 40px' }}
                          >
                            <span class="fab fa-google-plus-g" style={{ width: '100%', color: '#fff' }} />
                          </div>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                          <h5>Google</h5>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
      <section className='footer__bottom background-primary'>
        <div className="container">
          <Row gutter={[30, 30]} align='middle'>
            <Col xl={8} lg={8} md={8} sm={24} xs={24} className='logo' >
              <a href='/'>
                <img src={logo} alt="elixir" />
              </a>
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <p style={{ textAlign: 'center', color: '#fff', lineHeight: '1.75', fontWeight: 600 }}>© Copyright 2018 Elixir Inc.</p>
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            </Col>
          </Row>
        </div>
      </section>
    </footer>
  )
}

export default Footer