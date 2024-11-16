
import '../../styles/common.css'
import './gameMenuComponent.css'

function GameMenuComponent({toGameOptions, toUserRecords} : any) {

    return (
        <>
            <div>
                <h1 className="menu-title horiz-align-center">
                    Game menu
                </h1>

                <button className="menu-btn horiz-align-center"
                        onClick={toGameOptions}>
                    Start game
                </button>

                <button className="menu-btn horiz-align-center"
                        onClick={toUserRecords}>
                    View user records
                </button>
            </div>
        </>
    );
}

export default GameMenuComponent;
