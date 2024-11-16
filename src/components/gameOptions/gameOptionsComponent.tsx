import '../../styles/common.css'
import './gameOptionsComponent.css'
import {useState} from "react";
import {FieldSize, GameDifficulty} from "../../models/gameSettings.ts";

function GameOptionsComponent({toMainMenu}:any){
    const [userName, setUserName] = useState('');
    const handleUsernameChange = (e: any) => {
        let value = e.target.value;
        setUserName(value);
        console.log(value);
    }

    const [diff, setDiff] = useState(GameDifficulty.easy);
    const handleDiffChange = (e: any) => {
        let value = e.target.value;
        setDiff(value);
        console.log(value);
    }

    const [fieldSize, setFieldSize] = useState(FieldSize.small);
    const handleFieldSizeChange = (e: any) => {
        let value = e.target.value;
        setFieldSize(value);
        console.log(value);
    }

    const [wallsTransparent, setWallsTransparent] = useState(true);
    const handleWallsTransparentChange = (e: any) => {
        let value = e.target.checked;
        setWallsTransparent(value);
        console.log(value);
    }

    const check = () => {
        console.log(`name:${userName}`)
        console.log(`diff:${diff}`)
        console.log(`size:${fieldSize}`)
        console.log(`wallTrans:${wallsTransparent}`)
    };

    return (
        <>
            <h1 className="menu-title horiz-align-center">
                Pick game options
            </h1>

            <div>
                <div className="options-element horiz-align-center">
                    Enter your name:
                    <input type="text" value={userName} onChange={handleUsernameChange}/>
                </div>

                <div className="options-element horiz-align-center">
                    <label htmlFor="diff">Pick game difficulty:</label>
                    <select name="diff" id="diff" value={diff} onChange={handleDiffChange}>
                        <option value={GameDifficulty.easy}>Easy</option>
                        <option value={GameDifficulty.medium}>Medium</option>
                        <option value={GameDifficulty.hard}>Hard</option>
                    </select>
                </div>

                <div className="options-element horiz-align-center">
                    <label htmlFor="size">Pick field size:</label>
                    <select name="size" id="size" value={fieldSize} onChange={handleFieldSizeChange}>
                        <option value={FieldSize.small}>Small</option>
                        <option value={FieldSize.medium}>Medium</option>
                        <option value={FieldSize.large}>Large</option>
                    </select>
                </div>

                <div className="options-element horiz-align-center">
                    <input
                        type="checkbox"
                        id="wallsTrans"
                        name="wallsTrans"
                        checked={wallsTransparent} onChange={handleWallsTransparentChange}/>
                    <label htmlFor="wallsTrans">Transparent walls</label>
                </div>

            </div>

            <div className="menu-btn horiz-align-center">
            <button
                    onClick={check}>
                    check
                </button>
            </div>

            <div className="menu-btn horiz-align-center">
                <button
                    onClick={toMainMenu}>
                Back to main menu
                </button>
            </div>
        </>
    );
}

export default GameOptionsComponent;
