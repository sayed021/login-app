import React from 'react';
import { ButtonSuccess } from '../../../components/atoms/Buttons';
import { Input } from '../../../components/atoms/FormControls';
import RadioInput from '../../../components/atoms/FormControls/Radio';
import { Option, Select } from '../../../components/atoms/FormControls/Select/Select';
import { FormGroup } from '../../../components/molecules';
import { Col, Col50, Col33, Row } from '../../../components/molecules/Columns';
import { CenterText } from '../Login/partial';
import { SignupWrap } from './partial';


const RegristronForm = props => {
    return (
        <SignupWrap>
            <Row>
                <Col50>
                    <FormGroup>
                        <Input type="text" name="firstname" placeholder="First name" />
                    </FormGroup>
                </Col50>
                <Col50>
                    <FormGroup>
                        <Input type="text" name="surname" placeholder="Surname" />
                    </FormGroup>
                </Col50>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Input type="text" name="username" placeholder="Mobile number or email address" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="New password" />
                    </FormGroup>
                </Col>
            </Row>

            {/* DoB */}

            <Row>
                <Col>DOB</Col>
            </Row>
            
            <Row>
                <Col33>
                    <FormGroup>
                        <Select>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                            <Option value="13">13</Option>
                            <Option value="14">14</Option>
                            <Option value="15">15</Option>
                            <Option value="16">16</Option>
                            <Option value="17">17</Option>
                            <Option value="17">17</Option>
                            <Option value="19">19</Option>
                            <Option value="20">20</Option>
                            <Option value="21">21</Option>
                            <Option value="22">22</Option>
                            <Option value="23">23</Option>
                            <Option value="24">24</Option>
                            <Option value="25">25</Option>
                            <Option value="26">26</Option>
                            <Option value="27">27</Option>
                            <Option value="28">28</Option>
                            <Option value="29">29</Option>
                            <Option value="30">30</Option>
                            <Option value="31">31</Option>
                        </Select>
                    </FormGroup>
                </Col33>
                <Col33>
                    <FormGroup>
                        <Select>
                            <Option value="1">january</Option>
                            <Option value="2">February</Option>
                            <Option value="3">March</Option>
                            <Option value="4">April</Option>
                            <Option value="5">May</Option>
                            <Option value="6">Jun</Option>
                            <Option value="7">Julay</Option>
                            <Option value="8">August</Option>
                            <Option value="9">Septembor</Option>
                            <Option value="10">Octobor</Option>
                            <Option value="11">Nobembor</Option>
                            <Option value="12">Decembor</Option>
                        </Select>
                    </FormGroup>
                </Col33>
                <Col33>
                    <FormGroup>
                        <Select>
                            <Option value="2009">2009</Option>
                            <Option value="2008">2008</Option>
                            <Option value="2007">2007</Option>
                            <Option value="2006">2006</Option>
                            <Option value="2005">2005</Option>
                            <Option value="2004">2004</Option>
                            <Option value="2003">2003</Option>
                            <Option value="2002">2002</Option>
                            <Option value="2001">2001</Option>
                            <Option value="2000">2000</Option>
                            <Option value="1990">1990</Option>
                            <Option value="1991">1991</Option>
                            <Option value="1992">1992</Option>
                            <Option value="1993">1993</Option>
                            <Option value="1994">1994</Option>
                            <Option value="1995">1995</Option>
                            <Option value="1996">1996</Option>
                            <Option value="1997">1997</Option>
                            <Option value="1998">1998</Option>
                            <Option value="1999">1999</Option>
                        </Select>
                    </FormGroup>
                </Col33>
            </Row>

            {/* gender */}
            <Row>
                <Col>
                    <div><p>Gender</p></div>
                </Col>
            </Row>
            
            <Row>
                <Col33>
                    <FormGroup>
                        <RadioInput name="gender" value="Male">
                            Male
                        </RadioInput>
                    </FormGroup>
                </Col33>
                <Col33>
                    <FormGroup>
                        <RadioInput name="gender" value="Female">
                        Female
                        </RadioInput>
                    </FormGroup>
                </Col33>
                <Col33>
                    <FormGroup>
                        <RadioInput name="gender" value="oOthers">
                            Others
                        </RadioInput>
                    </FormGroup>
                </Col33>
            </Row>

            <Row>
                <Col>
                    <FormGroup>
                        <p><em>By clicking Sign Up, you agree to our Terms, Data <a href="#">Policy</a> and <a href="#">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.</em></p>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CenterText>
                        <ButtonSuccess>
                            Sign Up
                        </ButtonSuccess>
                    </CenterText>
                </Col>
            </Row>
        </SignupWrap>
    );
}

export default RegristronForm;
