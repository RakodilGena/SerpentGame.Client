export class StartGameRequest {
    username: string;
    fieldSize: FieldSize;
    gameDifficulty: GameDifficulty;
    wallsTransparent: boolean;

    constructor(
        username: string,
        fieldSize: number,
        gameDifficulty: number,
        wallsTransparent: boolean) {
        this.username = username;
        this.fieldSize = fieldSize;
        this.gameDifficulty = gameDifficulty;
        this.wallsTransparent = wallsTransparent;
    }
}

export enum FieldSize{
    small = 0,
    medium = 1,
    large = 2
}

export enum GameDifficulty
{
    easy = 0,
    medium = 1,
    hard = 2
}
