export const Hero = ()=>{
    return (
        <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[52px] sm:py-16 relative overflow-clip">
            <div className="cont relative z-10">
                <div className="flex justify-center items-center">
                    <a href="#" className="border py-1 px-2 rounded-lg border-white/30 flex gap-3">
                    <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Version 2.0 is Here</span>
                    <span>Read more</span>
                </a>
                </div>
                <div className="flex items-center justify-center">
                    <h1 className="text-5xl sm:text-7xl text-center font-bold tracking-tighter my-8 leading-tight  lg:tracking-normal">The Best Open Source <br /> Data Catalog Solution</h1>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-center text-xl lg:text-2xl max-w-lg">A single place for all your data and all your data practitioners to build and manage high quality data assets at scale. Built by the founders of Apache Hadoop, Apache Atlas, and Uber Databook.</p>
                </div>
                <div className="flex justify-center align-center mt-8">
                    <button className="px-6 py-4 bg-white text-black font-bold rounded-lg">Get Startd Free</button>
                </div>
            </div>
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[786px] lg:w-[2400px] lg:h-[1200px] rounded-[100%]  left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px) sm:top-[calc(100%-130px)]"></div>      
        </div>
    )
}
