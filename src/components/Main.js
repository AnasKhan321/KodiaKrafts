import React, { useContext, useEffect, useState } from 'react'
import logo from './img/beerr.jpg';
import MyContext from '../ContextApi/Mycontext';
const Main = (prop) => {

    const { data, fetchData } = useContext(MyContext)
    const [beers, setbeers] = useState([])
    console.log(data)

    const FetchBeer = async () => {
        let number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        console.log(number)
        const beerrs = await fetchData(8, number);
        setbeers(beerrs)
        prop.setProgress(100)

    }

    useEffect(() => {
        FetchBeer();
    }, [])
    return (
        <div className="container w-4/5 mx-auto">
            <div className="img w-full">
                <img src={logo} alt="logo" className="w-full" />
            </div>
            <div className="heading my-4 font-bold">

                <h1 className="text-center font-bold text-2xl ">Top Bears </h1>
            </div>
            <div className="topbears flex flex-wrap">
                {beers.map((e, i) => {


                    return (
                        <div className="bear flex p-4 w-12/12 my-2   md:w-6/12 " key={e.id} >
                            <div className="img">
                                <img src={e.image_url?e.image_url : "https://images.punkapi.com/v2/82.png"} alt="" className="w-64" />
                            </div>

                            <div className="content flex justify-center flex-col border  mx-4  border-orange-300 ">
                                <h3 className="font-bold my-2 border-b-2 border-orange-200 p-4" > {e.first_brewed}</h3>
                                <div className="information border-b-2 border-orange-200 p-4 ">
                                    <h2 className="font-bold my-2 text-2xl ">{e.name}  {e.tagline} </h2>

                                    <p className="text-orange-800">{e.description.slice(0,120)}</p>
                                </div>
                                <div className="deatils p-4 font-bold ">
                                    {e.contributed_by}
                                </div>
                            </div>
                        </div>
                    )


                })}





            </div>
        </div>
    )
}

export default Main;