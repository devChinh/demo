import React from 'react'
import img1 from "../assets/imgs/340490580_742952320564598_7991617574878986897_n.png"
import img2 from "../assets/imgs/331577671_527226479512813_4063406612342572816_n.png"

function Header() {
    return (
        <div class="header_2">
            <div class="logo">
                <img src={img1} alt="" />
            </div>
            <div class="search">
                <input type="text" name="" id="" />
                <img src={img2} alt="" />
            </div>
        </div>
    )
}

export default Header