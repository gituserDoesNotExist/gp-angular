import { AppUrls } from './app.url.interface'

export const AppUrlValues: AppUrls = {
    url1:"some-url",
    descriptionSudoku:"./assets/description-sudoku.json",
    descriptionTictactoe:"./assets/description-tictactoe.json",
    playSudoku:'sudoku',
    playTicTacToe:'tictactoe',
    dashboard: 'dashboard',
    newgame: 'http://localhost:8080/GamePortal/game/load-tictactoe',
    checkMove: 'http://localhost:8080/GamePortal/field/move/valid',
    updateField: 'http://localhost:8080/GamePortal/field/move'
}