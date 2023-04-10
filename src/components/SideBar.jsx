import React from 'react'
import img1 from "../assets/imgs/328948726_3414477078840097_7520726724278824798_n.jpg"

function SideBar() {
    return (
        <div class="header">
            <ul class="header_1">
                <li>SƠ ĐỒ WEB</li>
                <li>THƯ ĐIỆN TỬ</li>
                <li>LIÊN HỆ</li>
                <li><img src={img1} /></li>
                <li><p>ĐĂNG NHẬP</p></li>
            </ul>
        </div>
    )
}

export default SideBar