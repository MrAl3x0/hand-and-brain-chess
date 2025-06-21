import express from "express";
import { joinRoomController } from "../controllers/roomController.js";

const router = express.Router();

/**
 * @route   POST /api/rooms/join
 * @desc    Allows a player to join or create a game room.
 * @access  Public
 */
router.post("/join", joinRoomController);

// TODO: Implement a route to get the current state of a specific room.
// import { getRoomDetailsController } from "../controllers/roomController.js";
// router.get('/:roomId', getRoomDetailsController);

// TODO: Implement a route for players to select their team and role (brain/hand).
// import { selectRoleController } from "../controllers/roomController.js";
// router.post('/:roomId/select-role', selectRoleController);

// TODO: Implement a route to start the game once the lobby is full.
// import { startGameController } from "../controllers/roomController.js";
// router.post('/:roomId/start', startGameController);

export const roomRoutes = router;
