import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../../../Assets/api.jpg';
// import addButton from '../../../Assets/add-square-svgrepo-com.svg'
// import Service from './Service';
// import Spinner from '../../Shared/Spinner/Spinner';

const Services = () => {
    const [, setServices] = useState([])
    
    useEffect(() => {
        axios.get('https://immense-river-40491.herokuapp.com/services')
        .then(res => setServices(res.data))
    }, [])

    return (
        <div className="row col-md-9 mx-auto ">
            <div className="col-md-6 ps-2">
                <section id="services" className="services" >
                    <h4 className="miniTitle">Hình thức sử dụng</h4>
                        <h4 class="text-base sm:text-lg font-semibold text-black">Dùng trực tiếp trên Website</h4>
                        <p>Bạn chỉ cần tạo một tài khoản, tải lên đoạn audio có chứa giọng nói mẫu sau đó copy & paste đoạn nội dung văn bản cần chuyển thành giọng nói. Trong tích tắc bạn sẽ nhận về file mp3 hoặc wav có chứa giọng nói tương tự với giọng trong đoạn audio gốc.</p>
                        <h4 class="text-base sm:text-lg font-semibold text-black">Dùng qua API</h4>
                        <p>Bạn chỉ cần tạo một tài khoản, vào cài đặt và tạo một secret key của riêng bạn, khi đó bạn có thể tự động tạo các API để tích hợp cho các ứng dụng của mình.</p>
                </section>
            </div>
            <div className="col-md-3 img">
                <img src={`${api}`} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default Services;