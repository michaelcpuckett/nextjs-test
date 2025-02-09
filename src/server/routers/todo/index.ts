import { j } from "../../jstack";
import create from "./create";
import getAll from "./getAll";

export const todoRouter = j.router({
  getAll,
  create,
});
