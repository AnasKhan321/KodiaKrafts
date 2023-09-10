import React, { useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import logo from './img/beerr.jpg';
import MyContext from '../ContextApi/Mycontext';


const Beers = (prop) => {

    const { data, fetchData } = useContext(MyContext)
    const [beers, setbeers] = useState([]);
    const [page, setpage] = useState(1);
    console.log(data)

    const FetchBeer = async () => {
        const beerrs = await fetchData(8, page);
        setbeers(beerrs)
        prop.setProgress(100)

    }

    const FetchNextData = async () => {
        const data = await fetchData(8, page + 1);

        setTimeout(() => {
            setbeers(beers.concat(data))
            setpage(page + 1)

        }, 5000)


    }

    useEffect(() => {
        FetchBeer();
    }, [])
    return (
        <div className="Beers w-11/12 md:w-4/6 mx-auto">

            <InfiniteScroll
                dataLength={beers.length}
                next={FetchNextData}
                hasMore={true} // Replace with a condition based on your data source
                loader={<img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" style={{
                    display: "block",
                    margin: " 0 auto", width: "10vw",
                    filter: "invert(1)"
                }} />}
                endMessage={<p>No more data to load.</p>}
            >
                {beers.map((e) => {
                    return (
                        <div className="bear flex p-4 my-4  shadow-md  shadow-orange-700 rounded-lg  bg-black text-white">
                            <div className="img w-3/12">
                                <img src={e.image_url ? e.image_url : "https://images.punkapi.com/v2/82.png"} alt="" className="w-6/12" />

                            </div>

                            <div className="content flex flex-col w-9/12 ">
                                <h1 className="font-bold text-3xl my-2">{e.name}</h1>
                                <h2 className="font-bold text-2xl my-2"> {e.tagline} !</h2>
                                <p>{e.description} </p>
                                <div className="my-2" >
                

                                </div>

                                <p className="my-2 font-bold " > Drink With  {e.brewers_tips}
                                    !, </p>
                            </div>
                        </div>
                    )
                })}
            </InfiniteScroll>


        </div>
    )
}

export default Beers