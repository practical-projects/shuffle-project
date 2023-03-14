import { clock } from "./components/clock.js";
import { playPause } from "./components/player.js";
import { clockData } from "./data/clockData.js";

playPause();

new clock("#clock", clockData);
