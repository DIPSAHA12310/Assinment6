
import logo2 from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='flex justify-between container mx-auto px-20 min-[400px]'>
            <div className='pt-40'>
                <p className='text-Black font-bold text-4xl'>Build Your IDEAL</p>
                <p className='text-4xl font-bold text-orange-500'>
                    Develo<span className='text-4xl text-orange-700 '>pment</span> <span className='text-purple-700'>Stack</span>
                </p>
                 <p>Explore frontend backend ,database and tooling options 
                   <p>
                    compare them side and put together the stack that stack that fits
                    </p> 
                     your next project</p>
                  <div className="gap-20 pt-3">
                      <button className="btn btn-warning">Explore Techonologies</button>
                    <button className="btn btn-active">Learn More</button>
                  </div>
                  
            </div>
            <div>
                <img src={logo2}alt="" />
            </div>
           
        </div>
    );
};

export default Banner;