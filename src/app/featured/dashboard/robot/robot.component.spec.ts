import { RobotComponent } from "./robot.component";

describe('Test de Robot', ()=>{
const robot= new RobotComponent();

it('Robot Should create', ()=>{
  expect(robot.owner).toBe('robot');
});

});