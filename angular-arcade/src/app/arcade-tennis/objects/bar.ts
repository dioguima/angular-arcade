export interface IGameObject {
    update(deltaTime: number): void;
    destroy(): void;
}

export class Position {
    public x: number;
    public y: number;
}

export enum Direction {
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
    private velocity: number;
    private direction: Direction;
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

        this.direction = Direction.Down;
        this.velocity = 10;
    }

    //#endregion [ Constructor ]

    //#region [ Methods ]

    public update(deltaTime: number): void {
        this.move(deltaTime);
        this.draw();
    }

    public destroy(): void {
        throw new Error('Method not implemented.');
    }

    private move(deltaTime: number) {

        const loopVelocity = this.velocity * deltaTime;

        if (this.direction === Direction.Down) {
            this.position.y += loopVelocity;
        } else if (this.direction === Direction.Up) {
            this.position.y -= loopVelocity;
        } else {
            throw new Error('Unexpected direction bar');
        }

        if (this.position.y + this.height > this.maxHeight && this.direction === Direction.Down) {
            this.direction = Direction.Up;
        } else if (this.position.y < this.minHeight && this.direction === Direction.Up) {
            this.direction = Direction.Down;
        }
    }

    private draw() {
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    //#endregion [ Methods ]

}