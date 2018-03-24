import { AppUrls } from './app.url.interface'

export const AppUrlValues: AppUrls = {
    url1:"some-url",
    descriptionSudoku:"./assets/description-sudoku.json",
    descriptionTictactoe:"./assets/description-tictactoe.json",
    playSudoku:'sudoku',
    playTicTacToe:'tictactoe',
    dashboard: 'dashboard',
    newgame: 'http://localhost:8080/gameportal-angular/game/load-tictactoe',
    getMoveFromAi: 'http://localhost:8080/gameportal-angular/field/ai/move/__GAMEID__',
    updateField: 'http://localhost:8080/gameportal-angular/field/move/__ID__'
}