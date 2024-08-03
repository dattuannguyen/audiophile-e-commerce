import ProductCard from "./ProductCard.jsx";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import {Link} from "react-router-dom";

export default function Products(){
    return(
        <>
            <div className=" pt-[92px] xl:pt-[200px] md:pt-[148px] px-[24px] xl:px-[165px] md:px-[39px]">
                <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-[68px] md:gap-[10px] xl-gap[30px]">
                    <Link to="/headphones" >
                        <ProductCard
                        imageSrc={headphone}
                        title="Headphone"
                        />
                    </Link>

                    <Link to="/speakers">
                        <ProductCard
                            imageSrc={speaker}
                            title="Speaker"
                        />
                    </Link>

                    <Link to="/earphones">
                        <ProductCard
                            imageSrc={earphone}
                            title="Earphone"
                        />
                    </Link>


                </div>
            </div>

        </>
    )
}