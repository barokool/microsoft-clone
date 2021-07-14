import React from 'react'
import micro1 from '../images/microsoft.png'
import micro2 from '../images/microsoft2.png'
import xbox from '../images/xbox.png'
import col1 from '../images/col1.png'
import col2 from '../images/col2.png'
import col3 from '../images/col3.png'
import col4 from '../images/col4.png'
import arrow from '../images/arrowblack.png'
import arrowwhite from '../images/baseline_chevron_right_black_24dp.png'
import inbox from '../images/inbox.png'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
const main = () => {
    return (
        <div>
            <main>
                <section>
                    <div className="menu flex max-w-xl mx-auto mb-16 md:max-w-2xl md:mt-20 md:mb-20">
                        <div>
                            <a className=" max-w-xl mx-auto">
                                <img className="ml-16  " src={micro1} alt='micro1' />
                                <p className="mt-2">Chọn microsoft của bạn </p>
                            </a>
                        </div>
                        <a className="ml-16 max-w-xl mx-auto">
                            <img className="ml-16" src={xbox} alt="xbox" />
                            <p>Khám phá trò chơi trên PC </p>
                        </a>
                        <a className="ml-12 max-w-xl mx-auto">
                            <img className="ml-16" src={micro2} alt="micro2" />
                            <p>Cửa hàng cho windows 10</p>
                        </a>
                    </div>
                </section>
                <section className="mb-20">
                    <div className="mx-20 grid md:grid-flow-col gap-8">
                        <div >
                            <img className="mb-8" src={col1} alt='pics' />
                            <h2 className="text-xl font-semibold">Microsoft Teams</h2>
                            <a href="#"  className="flex items-center">
                                <p >
                                    Tìm hiểu thêm
                                </p>
                                <img src={arrow} alt='arrow' />
                            </a>
                        </div>
                        <div>
                            <img className="mb-8" src={col2} alt='pics' />
                            <h2 className="text-xl font-semibold">Microsoft Edge</h2>
                            <a href="#" className="flex items-center">
                                <p >
                                    Tìm hiểu thêm
                                </p>
                                <img src={arrow} alt='arrow' />
                            </a>
                        </div>
                        <div>
                            <img className="mb-8" src={col3} alt='pics' />
                            <h2 className="text-xl font-semibold">Microsoft OneDrive</h2>
                            <a href="#"  className="flex items-center">
                                <p >
                                    Tìm hiểu thêm
                                </p>
                                <img src={arrow} alt='arrow' />
                            </a>
                        </div>
                        <div>
                            <img className="mb-8" src={col4} alt='pics' />
                            <h2 className="text-xl font-semibold">Windows 10 Update</h2>
                            <a href="#"  className="flex items-center">
                                <p >
                                    Tìm hiểu thêm
                                </p>
                                <img src={arrow} alt='arrow' />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="mb-20">
                    <div className="max-w-full flex  bg-custom mx-20  h-auto ">
                        <div className="mx-auto my-auto">
                            <h1 className="text-3xl font-semibold">Outlook dành cho iOS và Android</h1>
                            <p className="mt-4">Kết nối. Sắp xếp. Hoàn thành mọi việc.</p>
                            <div className="bg-black mt-4 w-32 ">
                            <a href="#" className="text-white items-center h-full flex ">
                                <p className="my-2 mx-4">
                                Tải xuống 
                                </p>
                                <img className="w-6 h-6" src={arrowwhite} alt='arrow' />
                            </a>
                            </div>
                        </div>
                        <div>
                            <img src={inbox} alt='pics' />
                        </div>
                    </div>
                </section>
                <section className="mb-20 ">
                <div className="mx-20">
                    <h1 className="text-2xl font-semibold mb-6">Dành cho doanh nghiệp</h1>
                    <div className=" grid md:grid-flow-col gap-8">
                        <div>
                            <img className="mb-8" src={pic1} alt="pics" />
                            <h1 className="text-xl font-semibold">Microsoft 365 dành cho doanh nghiệp</h1>
                            <a href="#" className=" mt-2 flex items-center ">
                                <p>
                                Mua sắm ngay
                                </p>
                                <img src={arrow}  alt='arrow'/>
                            </a>
                        </div>
                        <div>
                            <img className="mb-12" src={pic2} alt="pics" />
                            <h1 className="text-xl font-semibold">Tải Visual Studio 2019</h1>
                            <a href="#" className="mt-2 flex items-center ">
                                <p>
                                    Tải xuống ngay
                                </p>
                                <img src={arrow}  alt='arrow'/>
                            </a>
                        </div>
                        <div>
                            <img className="mb-8" src={pic3} alt="pics"/>
                            <h1 className="text-xl font-semibold">Windows 10 Enterprise</h1>
                            <a href="#" className="flex mt-2 items-center ">
                                <p>
                                    Tải xuống ngay
                                </p>
                                <img src={arrow}  alt='arrow'/>
                            </a>
                        </div>
                        <div>
                            <img className="mb-8" src={pic4} alt="pics"/>
                            <h1 className="text-xl font-semibold">Giới thiệu về Microsoft Viva</h1>
                            <a href="#" className="flex mt-2 items-center ">
                                <p>
                                    Tìm hiểu thêm
                                </p>
                                <img src={arrow}  alt='arrow'/>
                            </a>
                        </div>
                    </div>
                </div>

                </section>
                
            </main>
        </div>
    )
}

export default main
