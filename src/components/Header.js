import React from 'react'
import logo from '../images/logo.png'
import search from '../images/outline_search_black_24dp.png'
import shopping from '../images/outline_shopping_cart_black_24dp.png'
import down from '../images/outline_south_black_24dp.png'
import rest from '../images/rest.png'
import arrow from '../images/baseline_chevron_right_black_24dp.png'
import arrowblack from '../images/arrowblack.png'
const Header = () => {
    return (
        <div>
            <header className="shadow-md" >
                <div className="flex sm:mx-16 mx-8 ">
                    <div className="flex max-w-full mr-auto items-center">
                        <div>
                            <img src={logo} alt="img" />
                        </div>
                        <div className="menu">
                            <a className="ml-4 text-sm" href="#">Microsoft 365</a>
                            <a className="ml-4 text-sm" href="#">Office</a>
                            <a className="ml-4 text-sm" href="#">Window</a>
                            <a className="ml-4 text-sm" href="#">Xbox</a>
                            <a className="ml-4 text-sm" href="#">Support</a>
                        </div>
                    </div>
                    <div className="max-w-full ml-auto menu flex items-center">
                        <div className="flex ">
                            <a className="text-sm items-center" href="#">About </a>
                            <img className="w-4 mr-4 h-4" src={down} alt="search" />
                        </div>
                        <div className="flex items-center">
                            <a className="text-sm "href="#">Search</a>
                            <img className="w-4 mr-4 h-4" src={search} alt="search" />
                        </div>
                        <div className="flex items-center">
                            <a className="text-sm "href="#">Shopping</a>
                            <img className="w-4 mr-4 h-4" src={shopping} alt="shopping" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-full flex  bg-custom mx-20  h-auto">
                <div className="my-auto mx-20 ">
                    <h1 className="text-3xl font-semibold">Microsoft 365</h1>
                    <p className="my-4">Các ứng dụng Office cao cấp, lưu trữ đám mây bổ sung, bảo mật nâng cao cùng nhiều tính năng khác
                        - tất cả trong một gói đăng kí tiện lợi
                    </p>
                    <div className="flex items-center ">
                        <a className="bg-black menu text-white flex items-center  w-auto " href="#">
                            <p className="my-2  ml-2 ">
                                Cho tối đa 6 người dùng 
                            </p>
                            <img className="w-8 h-8" src={arrow} alt="arrow" />
                        </a>
                        <a className=" flex menu items-center font-semibold ml-8  auto " href="#">
                            <p className="my-2  ml-2">
                                Cho 1 người dùng 
                            </p>
                            <img className="w-8 h-8" src={arrowblack} alt="arrow" />
                            </a>
                    </div>
                </div>
                <div >
                    <img src={rest} alt="bg" />
                </div>
            </div>
        </div>
    )
}

export default Header
