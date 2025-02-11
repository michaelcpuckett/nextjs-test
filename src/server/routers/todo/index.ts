import { j } from "../../jstack";
import create from "./create";
import _delete from "./delete";
import getAll from "./getAll";

export const todoRouter = j.router({
  getAll,
  create,
  delete: _delete,
});
