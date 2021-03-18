import {useEffect} from 'react';
import  {connect} from 'react-redux';
import {fetchData} from '../Actions/actions.js'


const RaceList = (props) => {
    useEffect(() => {
        props.fetchData();
    }, []);

    return (
        <div className = 'Race-Wrapper'>
            {props.Races.map((Race) => (
                <p key={Race.index}>{Race.name}</p>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
    Races: state.spells
    }
};

export default connect(mapStateToProps, {fetchData})(RaceList)