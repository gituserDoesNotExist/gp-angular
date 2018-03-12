import { Field } from "./field";
import { GameFieldWrapper } from "./game-field-wrapper";
import { GameWithFields } from "./game-with-fields";
import { Injectable } from "@angular/core";

export class GameWithFieldsMapper {
    
    constructor() {};

    public asEntity(wrapper: GameFieldWrapper): GameWithFields {
        return new GameWithFields(wrapper.game.id, wrapper.game.lastModified, wrapper.game.description, wrapper.game.gameStatus, wrapper.fields)
}

}