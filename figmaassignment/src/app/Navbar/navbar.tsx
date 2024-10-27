import Link from "next/link";

export default function Navbar(){
    return (
        <div>
            <div className="w-[1322px] h-[91px] m-auto flex text-white">
                <div className="w-[187px] h-[58px] mt-[17px] ms-[136px] font-bold text-2x1">
                    <h3 className="w-[152px] h-[32px] mt-[13px]">BrandName</h3>
                </div>
                <div className="w-[815px] h-[58px] mt-[17px] ms-[40px] font-bold flex">
                    <div className="w-[275px] h-[24px] mt-[17px] font-bold flex gap-[21px]">
                        <Link href='/' className="hover:text-[#23A6F0]">Home</Link>
                        <Link href='/' className="hover:text-[#23A6F0]">Product</Link>
                        <Link href='/' className="hover:text-[#23A6F0]">Pricing</Link>
                        <Link href='/' className="hover:text-[#23A6F0]">Content</Link>
                        <Link href='/' className="hover:text-[#23A6F0]">Login</Link>
                        <button className="h-[52px] w-[110px] py-[15px] px-[25px] text-sm font-bold bg-[#23A6F0] rounded-md hover:bg-[#3395ce]">JOIN US</button>
                    </div>
                </div>
            </div>
        </div>
    );
}