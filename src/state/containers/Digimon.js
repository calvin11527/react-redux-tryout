import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetDigimon } from '../action-creators';

const Digimon = (props) => {
    console.log("Digimon")
    const digimonName = props.match.params.name;
    
    console.log("Before Dispatch Define")
    const dispatch = useDispatch();
    console.log("After Dispatch Define")
    
    console.log("Before Selector Define")
    const digimonState = useSelector(state => state.digimon)
    console.log("After Selector Define")
    
    useEffect(() => {
        console.log("Effect: Before dispatch get digimon");
        dispatch(GetDigimon(digimonName));
        console.log("Effect: After dispatch get digimon");
    }, [])
    console.log("After Effect")
    const ShowData = () => {
        console.log("Show Data")
        if (!_.isEmpty(digimonState.data[digimonName])) {
            console.log("data fetched")
            const digiData = digimonState.data[digimonName];
            return digiData.map(item => {
                return (
                    <div className={"pokemon-wrapper"} key={item.name}>
                        <div className={"item"}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className="item">
                            <h1>Info</h1>
                            <p>{item.name} {item.level}</p>
                        </div>
                    </div>
                )
            })
        }
        if (digimonState.loading) {
            console.log("Loading")
            return <p>Loading...</p>
        }

        if (digimonState.errorMsg !== "") {
            console.log("Error")
            return <p>{digimonState.errorMsg}</p>
        }

        return <p>error getting digimon</p>
    }
    return (
        <div className={"digi"}>
            <h1>{digimonName}</h1>
            {ShowData()}
        </div>
    )
};


export default Digimon