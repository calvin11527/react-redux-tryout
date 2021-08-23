import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetDigimonList } from '../action-creators';
import { Link } from "react-router-dom";

const DigimonList = (props) => {
    // console.log(props);
    const dispatch = useDispatch();
    const digimonList = useSelector(state => state.digimonList);

    useEffect(() => {
        console.log("Digimon List Effect")
        FetchData();
        console.log("After Fetch Data")
    }, [])
    const FetchData = () => {
        console.log("Fetch Data")
        dispatch(GetDigimonList());
        console.log("After dispatch get digimon list")
    }
    const ShowData = () => {
        console.log("Show Digimon Data List");
        if (!_.isEmpty(digimonList.data)) {
            return (
                <div className={"list-wrapper"}>
                    {
                        digimonList.data.map((item) => {
                            return (

                                <div className={"digimon-item"} key={item.name}>
                                    <p>{item.name}</p>
                                    <Link to={`/name/${item.name}`}>View</Link>
                                </div>
                            )
                        })
                    }
                </div>
            )

        }
        if (digimonList.loading) {
            return <p>Loading...</p>
        }
        if (digimonList.errorMsg !== "") {
            return <p>{digimonList.errorMsg}</p>
        }

        return <p>unable to get data</p>
    }
    return (
        <div>{ShowData()}</div>
    )
}

export default DigimonList