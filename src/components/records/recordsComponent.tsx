import '../../styles/common.css'

function RecordsComponent({toMainMenu, alert1} : any){
    return(
        <>
            <h1 className="menu-title horiz-align-center">User records</h1>
            not yet implemented.

            <button
                onClick={toMainMenu}
                className="menu-btn horiz-align-center">
                Back to main menu
            </button>

            <button
                onClick={() => alert1('alert me')}
                className="menu-btn horiz-align-center">
                alrtt
            </button>
        </>
    );
}

export default RecordsComponent;
