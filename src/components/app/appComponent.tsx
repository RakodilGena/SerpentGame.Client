import HeaderComponent from "../header/headerComponent.tsx";
import GameMenuComponent from "../gameMenu/gameMenuComponent.tsx";
import React from "react";
import RecordsComponent from "../records/recordsComponent.tsx";
import GameOptionsComponent from "../gameOptions/gameOptionsComponent.tsx";

function AppComponent() {

    const [currentState, setState] = React.useState(stateEnum.mainMenu)
    const alert1 = (message: string) => alert(message);



    return (
        <>
            <div>
                <HeaderComponent></HeaderComponent>
                {currentState == stateEnum.mainMenu
                    ? <GameMenuComponent
                        toGameOptions={() => setState(stateEnum.gameOptions)}
                        toUserRecords={() => setState(stateEnum.userRecords)}>
                    </GameMenuComponent>
                    : null}

                {currentState == stateEnum.userRecords
                    ? <RecordsComponent
                        toMainMenu={() => setState(stateEnum.mainMenu)}
                        alert1={alert1}>

                    </RecordsComponent>
                    : null}

                {currentState === stateEnum.gameOptions
                ? <GameOptionsComponent
                        toMainMenu={() => setState(stateEnum.mainMenu)}>

                    </GameOptionsComponent>
                : null}
            </div>

        </>

    )
}

enum stateEnum{
    mainMenu,
    gameOptions,
    playing,
    gameFinished,
    gameCrushed,
    userRecords
}

export  default AppComponent;
