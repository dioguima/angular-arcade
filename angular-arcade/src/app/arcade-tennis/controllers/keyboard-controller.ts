export class KeyboardController {

    public static keysPressed: any = {};

    constructor() {
        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keyup', this.keyUp);
    }

    private keyDown(event: KeyboardEvent) {
        KeyboardController.keysPressed[event.key] = 1;
    }

    private keyUp(event: KeyboardEvent) {
        KeyboardController.keysPressed[event.key] = 0;
    }

}
