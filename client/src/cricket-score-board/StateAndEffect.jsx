import { useEffect, useState } from "react";

const StateAndEffect = () => {

    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

    useEffect(() => {
        if (balls >= 6) {
            setOvers(overs + 1);
            setBalls(0);
        }
    });

    const addScore = (runs) => {
        if (runs == 4) {
            setFours(fours + 1);
        }
        if (runs == 6) {
            setSixes(sixes + 1);
        }
        setScore(score + runs);
        setBalls(balls + 1);
    };

    const handleExtras = () => {
        setScore(score + 1);
        setBalls(balls - 1);
    };

    const handleWicket = () => {
        setWickets(wickets + 1);
        setBalls(balls + 1);
    };

    return (
        <div>
            <h2>Cricket Scoreboard</h2>
            <div>
                <h3>Score : {score} / {wickets} ( Fours : {fours}, Sixes : {sixes} )</h3>
                <h3>Overs : {overs}.{balls}</h3>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => addScore(0)}>0 Run</button>
                <button onClick={() => addScore(1)}>1 Run</button>
                <button onClick={() => addScore(2)}>2 Runs</button>
                <button onClick={() => addScore(3)}>3 Runs</button>
                <button onClick={() => addScore(4)}>4 Runs</button>
                <button onClick={() => addScore(6)}>6 Runs</button>
            </div>
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button onClick={handleExtras} style={{ background: "blue" }} >Wide</button>
                <button onClick={handleExtras} style={{ background: "blue" }} >No-Ball</button>
                <button style={{ background: "red" }}
                    onClick={handleWicket}>Wicket</button>
            </div>
        </div>
    );
}

export default StateAndEffect;
