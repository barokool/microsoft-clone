import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-custom h-auto">
                <div className="mx-20 grid grid-flow-col gap-8 ">
                    <div className="flex flex-col">
                        <h3 className="mt-8 font-medium">Nội dung mới</h3>
                        <a  className="my-2 text-xs colortext">Microsoft 365</a>
                        <a className="my-2 text-xs colortext">Ứng dụng cho Windows 10</a>

                    </div>
                    <div className="flex flex-col">
                        <h3 className="mt-8 font-medium">Microsoft Store</h3>
                        <a className="my-2  text-xs colortext">Hồ sơ tài khoản</a>
                        <a className="my-2  text-xs colortext">Trung tâm Tải xuống</a>
                        <a className="my-2  text-xs colortext">Trả lại</a>
                        <a className="my-2  text-xs colortext">Theo dõi đơn hàng</a>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="my-2  mt-8 font-medium">Giáo dục</h3>
                        <a className="my-2 text-xs colortext">Microsoft trong giáo dục</a>
                        <a className="my-2 text-xs colortext">Office cho học sinh</a>
                        <a className="my-2  text-xs colortext">Office 365 cho trường học</a>
                    </div>
                    <div className="flex flex-col">
                         <h3 className="mt-8 font-medium">Doanh nghiệp</h3>
                        <a className="my-2  text-xs colortext">Microsoft Azure</a>
                        <a className="my-2  text-xs colortext">Microsoft Industry</a>
                        <a className="my-2  text-xs colortext">Dịch vụ Tài chính</a>
                    </div>
                    <div className="flex flex-col">
                       <h3 className="mt-8 font-medium">Nhà phát triển</h3>
                        <a className="my-2  text-xs colortext">Microsoft Visual Studio</a>
                        <a className="my-2  text-xs colortext">Trung tâm nhà phát triển</a>
                        <a className="my-2  text-xs colortext">Kênh 9</a>
                        <a className="my-2  text-xs colortext">Trung tâm Phát triển Microsoft 365</a>
                        <a className="my-2  text-xs colortext">Chương trình Nhà phát triển Microsoft 365</a>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="mt-8 font-medium">Công ty</h3>
                        <a className="my-2  text-xs colortext">Sự nghiệp</a>
                        <a className="my-2  text-xs colortext">Giới thiệu về Microsoft</a>
                        <a className="my-2  text-xs colortext">Tin tức công ty</a>
                        <a className="my-2  text-xs colortext">Quyền riêng tư ở Microsoft</a>
                        <a className="my-2  text-xs colortext">Nhà đầu tư</a>
                    </div>

                </div>
                <div className="mt-10  ">
                    <div className="ml-auto divide flex sm:max-w-3xl ">
                        <a className="text-xs   ">Liên hệ với Microsoft</a>
                        <a className="text-xs  ">Quyền riêng tư</a>
                        <a className="text-xs   ">Điều khoản sử dụng</a>
                        <a className="text-xs   ">Nhãn hiệu</a>
                        <a className="text-xs   ">Giới thiệu về quảng cáo </a>
                        <a className="text-xs   ">Microsoft 2021</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
