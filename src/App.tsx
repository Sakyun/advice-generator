import iconDice from './assets/icon-dice.svg';
import './App.css'
import useAdviceAPI from "./useAdviceAPI.ts";
import SkeletonLoader from "./AdviceSkeletonLoader.tsx";

function App() {
    // const [advice, setAdvice] = useState<advice>({});
    const {id, advice, loading, error, fetchAdvice} = useAdviceAPI();

    return (
        <>
            <div className="bg">
                {loading ? (
                    <SkeletonLoader/>
                ) : error ? (
                    <div>Error: {error.message}</div>
                ) : (
                    <div className="card">
                        <div className="card-title">Advice #{id}</div>
                        <div className="card-body">“{advice}”</div>
                        <div className="card-separator"></div>
                        <button className="card-btn" onClick={fetchAdvice}>
                            <img src={iconDice} alt="Dice Button"/>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default App
