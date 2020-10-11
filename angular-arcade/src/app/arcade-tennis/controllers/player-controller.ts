import { Bar, EDirection, IGameObject } from '../objects/bar';
import { IBaseController } from './base-controller';
import { KeyboardController } from './keyboard-controller';

export class PlayerController implements IBaseController {

    constructor(private bar: Bar, private keyboardController: KeyboardController) { }

    public update(deltaTime: number) {

        let direction = null;

        if (KeyboardController.keysPressed['s'] &&
            KeyboardController.keysPressed['s'] === 1) {
            direction = EDirection.Down;
        } else if (KeyboardController.keysPressed['w'] &&
            KeyboardController.keysPressed['w'] === 1) {
            direction = EDirection.Up;
        }

        this.bar.move(direction, deltaTime);
        this.bar.update(deltaTime);
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }

}
