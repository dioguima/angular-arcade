import { Component, OnInit } from '@angular/core';
// import { AiController } from './controllers/ai-controller';
import { IBaseController } from './controllers/base-controller';
import { KeyboardController } from './controllers/keyboard-controller';
import { PlayerController } from './controllers/player-controller';
import { Bar, IGameObject } from './objects/bar';

@Component({
  selector: 'app-arcade-tennis',
  templateUrl: './arcade-tennis.component.html',
  styleUrls: ['./arcade-tennis.component.scss']
})
export class ArcadeTennisComponent implements OnInit {

  private mainCanvas: HTMLCanvasElement;
  private canvasContext: CanvasRenderingContext2D;
  private lastLoopTime: Date;

  private gameControllers: IBaseController[];

  constructor() { }

  ngOnInit() {
    this.mainCanvas = document.getElementById('mainCanvas') as HTMLCanvasElement;
    this.canvasContext = this.mainCanvas.getContext('2d');
    const barP1 = new Bar(this.canvasContext, { x: 20, y: 20 }, 15, 60, 0, this.mainCanvas.height);
    // const barP2 = new Bar(this.canvasContext, { x: 1165, y: 20 }, 15, 60, 0, this.mainCanvas.height);

    const keyboardController = new KeyboardController();

    const playerOneController = new PlayerController(barP1, keyboardController);

    this.gameControllers = [
      playerOneController,
      // barP2
    ];

    setInterval(() => this.update(), 10);
  }

  public update(): void {
    const deltaTime = this.getDeltaTime();
    this.clearCanvas();

    for (const object of this.gameControllers) {
      object.update(deltaTime);
    }
  }

  private clearCanvas(): void {
    this.canvasContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
    this.canvasContext.fillStyle = 'white';
  }

  public getDeltaTime(): number {
    if (!this.lastLoopTime) {
      this.lastLoopTime = new Date();
      return 0;
    } else {
      const previousLoopTime = this.lastLoopTime;
      this.lastLoopTime = new Date();
      return (this.lastLoopTime.getTime() - previousLoopTime.getTime()) / 100;
    }

  }

}
