import { IBaseController } from '../controllers/base-controller';

export interface IGameObject {
    update(deltaTime: number): void;
    destroy(): void;
}

export class Position {
    public x: number;
    public y: number;
}

export enum EDirection {
    None,
    Up,
    Down,
    Left,
    Right
}

export class Bar implements IGameObject {

    //#region [ Fields ]

    private position: Position;
    private width: number;
    private height: number;
    private minHeight: number;
    private maxHeight: number;
    public velocity: number;
    context: CanvasRenderingContext2D;

    //#endregion [ Fields ]

    //#region [ Constructor ]

    constructor(
        context: CanvasRenderingContext2D,
        position: Position,
        width: number,
        height: number,
        minHeight: number,
        maxHeight: number) {
        this.context = context;
        this.position = position;
        this.width = width;
        this.height = height;
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;

        this.velocity = 10;
    }

    //#endregion [ Constructor ]

    //#region [ Methods ]

    public update(deltaTime: number): void {
        // this.move(deltaTime);
        this.draw();
    }

    public destroy(): void {
        throw new Error('Method not implemented.');
    }

    public move(direction: EDirection, deltaTime: number) {

        if (direction === EDirection.None) { return; }

        const loopVelocity = this.velocity * deltaTime;

        if (direction === EDirection.Down && this.position.y + this.height < this.maxHeight) {
            this.position.y += loopVelocity;
        } else if (direction === EDirection.Up && this.position.y > this.minHeight) {
            this.position.y -= loopVelocity;
        }

        // if (this.position.y + this.height > this.maxHeight && this.direction === EDirection.Down) {
        //     this.direction = EDirection.Up;
        // } else if (this.position.y < this.minHeight && this.direction === EDirection.Up) {
        //     this.direction = EDirection.Down;
        // }
    }

    private draw() {
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    //#endregion [ Methods ]

}