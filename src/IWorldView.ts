import WorldModel from "./Worldmodel";

/**
 * Interface for displaying a world model.
 */
export interface IWorldView {
  /**
   * Displays a world model on screen.
   * @param world The model of the world to be displayed
   */
  display(world: WorldModel): void;
}

export default IWorldView;