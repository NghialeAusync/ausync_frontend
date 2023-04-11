import React from 'react';
import teamPic from '../../../Assets/0e702d84-67f4-4180-b087-0c9f5c7f5e42.jpg';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-9 mx-auto ">
                    <div className="col-md-3 img">
                        <Fade duration={2000} left>
                            <img src={`${teamPic}`} alt="" className="img-fluid"/>
                        </Fade>
                    </div>
                    <div className="col-md-7 ps-2">
                        <Fade duration={2000} right>
                            <h1 className="miniTitle">Ausyn có thể giúp gì cho bạn?</h1>
                            <p className="headerContent">Ausyn là một ứng dụng AI đột phá trong lĩnh vực tái tạo giọng nói, mang đến cho người dùng trải nghiệm chưa từng có với công nghệ âm thanh đỉnh cao. Với mục đích giúp người dùng dễ dàng tạo ra các đoạn âm thanh mới từ một đoạn ghi âm gốc, Ausyn thực sự đã mở ra một thế giới mới đầy sáng tạo và linh hoạt. </p>

                            <p className="headerContent">Cách thức hoạt động của Ausyn rất đơn giản và thân thiện. Người dùng chỉ cần tải lên một đoạn ghi âm với thời lượng chỉ 3 giây, sau đó chờ trong vài giây để ứng dụng xử lý và tạo ra nhiều đoạn âm thanh khác dựa trên giọng nói gốc. Ausyn sử dụng công nghệ AI tiên tiến để phân tích, học hỏi và tái tạo chất lượng âm thanh cao, đồng thời đảm bảo tính bảo mật thông tin người dùng.</p>

                            <p className="headerContent">Lợi ích mà Ausyn mang lại cho người dùng không chỉ dừng lại ở việc tiết kiệm thời gian và công sức. Ứng dụng còn giúp người dùng nâng cao khả năng sáng tạo, tùy chỉnh giọng nói theo ý muốn và áp dụng vào nhiều lĩnh vực khác nhau như giáo dục, giải trí, quảng cáo và kể cả việc tạo ra nội dung đa dạng hơn cho các dự án âm thanh. </p>

                            <p className="headerContent">Hãy trải nghiệm Ausyn ngay hôm nay để khám phá những tiềm năng vô hạn mà giọng nói có thể mang lại, và biến ý tưởng của bạn thành hiện thực chỉ trong vài giây!</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;