export class Board{
    constructor(room_name, size, amount_to_win, spectate_allowed){
        this.room_name = room_name
        this.size = size
        this.amount_to_win = amount_to_win
        this.spectate_allowed = spectate_allowed
    }
}