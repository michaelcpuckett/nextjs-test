import { create } from "zustand";
import { Todo } from "./types";

interface TodoState {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: string) => void;
  update: (id: string, name: string) => void;
  setTodos: (todos: Todo[]) => void;
}

const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  add: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  remove: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  update: (id, name) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, name } : todo
      ),
    })),
  setTodos: (todos) => set({ todos }),
}));

export default useTodoStore;
