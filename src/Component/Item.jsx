import { Link } from 'react-router-dom';

const Item = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="text-black mt-[64px] mx-[24px]  xl:mx-[165px] ">
                    {index % 2 !== 0
                        ? <div className="flex flex-col xl:flex-row-reverse justify-between items-center xl:gap-[125px]">
                            <img src={item.imageMobile} alt="" className="w-full h-[352px] object-cover mb-4 md:hidden" />
                            <img src={item.imageTablet} alt="" className="w-full h-[352px] object-cover mb-4 hidden md:block xl:hidden" />
                            <img src={item.imageDesktop} alt="" className="h-[560px] w-[540px] object-cover mb-4 hidden xl:block" />
                            <div className="flex flex-col justify-center items-center text-center xl:w-[445px] xl:text-start xl:justify-start xl:items-start">
                                {index === 0 &&
                                    <p className="font-manropeRegular text-[14px] text-darkOrange tracking-[10px] uppercase pt-[32px]">
                                        New Product
                                    </p>}
                                <p className="font-manropeBold text-[29px] tracking-[1px] w-[327px]  pt-[24px] uppercase">{item.name}</p>
                                <p className="text-black text-[15px] leading-[25px] font-manropeMedium opacity-[50%] pt-[24px]">{item.description}</p>
                                <Link to={`/product/${item.id}`}>
                                    <button className="btn1 mt-[24px]">See Product</button>
                                </Link>
                            </div>
                        </div>
                        : <div className="flex flex-col xl:flex-row justify-between items-center xl:gap-[125px]">
                            <img src={item.imageMobile} alt="" className="w-full h-[352px] object-cover mb-4 md:hidden" />
                            <img src={item.imageTablet} alt="" className="w-full h-[352px] object-cover mb-4 hidden md:block xl:hidden" />
                            <img src={item.imageDesktop} alt="" className="h-[560px] w-[540px] object-cover mb-4 hidden xl:block" />
                            <div className="flex flex-col justify-center items-center text-center xl:w-[445px] xl:text-start xl:justify-start xl:items-start">
                                {index === 0 &&
                                    <p className="font-manropeRegular text-[14px] text-darkOrange tracking-[10px] uppercase pt-[32px]">
                                        New Product
                                    </p>}
                                <p className="font-manropeBold text-[29px] tracking-[1px] w-[327px]  pt-[24px] uppercase">{item.name}</p>
                                <p className="text-black text-[15px] leading-[25px] font-manropeMedium opacity-[50%] pt-[24px]">{item.description}</p>
                                <Link to={`/product/${item.id}`}>
                                    <button className="btn1 mt-[24px]">See Product</button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default Item;

