import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">

            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2040</p>
                    <p className="uppercase">"Where can i get some?"</p>
                    <p>Savor the best of our kitchen with today’s featured item — handpicked by our chef for its flavor, freshness, and flair. Made with the finest ingredients and crafted to perfection, this special dish is a must-try for true food lovers.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>

            </div>
            
        </div>
    );
};

export default Featured;