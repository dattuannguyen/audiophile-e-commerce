import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg"

function ProductCard({ imageSrc, title }) {
    return (
        <div className=" group relative xl:w-[350px] xl:h-[204px] bg-matteGray rounded-lg p-6 flex flex-col items-center hover:cursor-pointer">
            <div className="absolute -top-16 w-full flex justify-center items-center">
                <img
                    src={imageSrc}
                    alt={title}
                    className="object-contain h-44"
                />
            </div>
            <div className="mt-16 flex flex-col items-center">
                <h2 className="mt-4 text-xl font-manropeBold text-[18px] tracking-[1.29px]">{title}</h2>
                <button className="mt-2 text-black opacity-50 font-manropeBold text-[13px] tracking-[1px] flex items-center group-hover:text-darkOrange">
                    SHOP
                    <img src={arrowRight} alt="" className="pl-2"/>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
