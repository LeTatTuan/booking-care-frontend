import React, { Component } from 'react';
import { connect } from 'react-redux';
//import '../HomePage.scss';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Nhạc của tui
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/kZZVwdus3Iw?list=RDkZZVwdus3Iw" title="[Lyrics] Dù có cách xa-Thái Tuyết Trâm"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Source:
                            Musixmatch: Dù có cách xa-Thái Tuyết Trâm

                            [Lyrics]
                            ...Ngày hôm qua anh chợt mang nắng tới
                            Chợt làm ngẩn ngơ đắm say em chiếc hôn bối rối
                            Chợt làm nên câu ca, chợt gọi mùa xuân qua
                            Đường dài tay trong tay em nghe mùa xuân ôi đắm say

                            Và rồi anh nơi thật xa em mang tình yêu không phôi pha
                            Miệng cười khi bỗng nhớ anh em nâng câu hát
                            Hát yêu anh thật nhiều, nhớ môi anh thật nhiều
                            Muốn theo mây và gió nơi phương trời đó em gọi ai ...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        contentOfConfirmModal: state.app.contentOfConfirmModal
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
