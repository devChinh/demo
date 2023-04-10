import React from 'react'
import img1 from "../assets/imgs/340304718_475814974685913_7206914403703386626_n.png"
import img2 from "../assets/imgs/340434130_952353689116784_6966252481362571077_n.png"
import img3 from "../assets/imgs/340434130_952353689116784_6966252481362571077_n.png"
import img4 from "../assets/imgs/340434130_952353689116784_6966252481362571077_n.png"
import img5 from "../assets/imgs/340434130_952353689116784_6966252481362571077_n.png"
import img6 from "../assets/imgs/340434130_952353689116784_6966252481362571077_n.png"
import img7 from "../assets/imgs/340434130_952353689116784_6966252481362571077_n.png"
import img8 from "../assets/imgs/340439310_597007615690906_1817027137833773011_n.png"

function Main() {
    return (
        <div>  <div class="menu">
            <div class="menu-1">
                <img src={img1} alt="" />
            </div>
            <div class="menu-2">
                <div class="menu2_1">
                    <img src={img8} alt="" />
                </div>
                <div class="menu2_2">
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                </div>
                <div class="menu2_2">
                    <img src={img5} />
                    <img src={img6} />
                    <img src={img7} />
                </div>
            </div>
        </div></div>
    )
}

export default Main