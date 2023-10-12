import iconDice from './assets/icon-dice.svg';
import './App.css'

const SkeletonLoader = () => {
    return (
        <div className="card skeleton">
            <div className="card-title skeleton"></div>
            <div className="card-body skeleton"></div>
            <div className="card-separator skeleton"></div>
            <button className="card-btn skeleton">
                <img src={iconDice} alt="Dice button"/>
            </button>
        </div>
    );
}

export default SkeletonLoader;