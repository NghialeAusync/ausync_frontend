import React from 'react';
import { Col, Row, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const PricingCard = ({data, id}) => {
    return (
        <Tab.Pane eventKey={id + 1}>
            <Row>
                {
                    data.map(({title, name, price}, index) => {
                        return(
                            <Col md={4} key={index}>
                                <Fade bottom duration={1800} distance='40px'>
                                    <div className={`pricingCard pricingCard${id + 1}`}>
                                        <div className="pricingBox">
                                            <h4>{title}</h4>
                                            <p className="pricePlan">
                                                <span className={`ph${id + 1}`}>{price} đồng/</span> tháng
                                            </p>
                                            <h5>{name}</h5>
                                            {/* <p className="planDescription">Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p> */}
                                        </div>
                                        <li>
                                            <span className="checkIcon">
                                            {/* <FontAwesomeIcon icon={faCheckCircle}/> */}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="checkIcon">
                                            {/* <FontAwesomeIcon icon={faCheckCircle}/> */}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="checkIcon">
                                            {/* <FontAwesomeIcon icon={faCheckCircle}/> */}
                                            </span>
                                            <ul>
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>Miễn phí 3.000 ký tự/ngày</small></li>
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>3.000 ký tự xử lý tối đa/chuyển đổi</small></li>
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>Tốc độ chuyển đổi: Chậm</small></li> 
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>1 luồng xử lý đồng thời</small></li> 
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>1 lượt tải xuống/ngày</small></li>
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>Sử dụng trên 1 thiết bị</small></li>
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>Thời gian lưu trữ: 1 ngày</small></li>
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>Xuất hóa đơn VAT</small></li>
                                                <li> <FontAwesomeIcon icon={faCheckCircle}/> <small>Nghe thử tốc độ cao</small></li>
                                            </ul>
                                        </li>
                                    </div>
                                </Fade>
                            </Col>
                        )
                    })
                }
            </Row>
        </Tab.Pane>
    );
};

export default PricingCard;