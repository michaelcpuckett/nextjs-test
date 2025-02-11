import { create } from "zustand";
import { Todo } from "./types";

interface TodoState {
  todos: Todo[] | null;
  add: (todo: Todo) => void;
  remove: (id: string) => void;
  update: (id: string, name: string) => void;
  initialize: (todos: Todo[]) => void;
}

const useTodoStore = create<TodoState>()((set) => ({
  todos: null,
  add: (todo) =>
    set((state) => {
      if (!state.todos) {
        throw new Error("Not initialized.");
      }

      return { todos: [...(state.todos || []), todo] };
    }),
  remove: (id) =>
    set((state) => {
      if (!state.todos) {
        throw new Error("Not initialized.");
      }

      return {
        todos: (state.todos || []).filter((todo) => todo.id !== id),
      };
    }),
  update: (id, name) =>
    set((state) => {
      if (!state.todos) {
        throw new Error("Not initialized.");
      }

      return {
        todos: (state.todos || []).map((todo) =>
          todo.id === id ? { ...todo, name } : todo
        ),
      };
    }),
  initialize: (todos) => set({ todos }),
}));

export default useTodoStore;
