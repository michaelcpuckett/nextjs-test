import { j } from "../../jstack";
import create from "./create";
import getAll from "./getAll";

export const userRouter = j.router({
  getAll,
  create,
});
