interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

interface ITodoList {
  todos: TodoType[];
}

type AddFn = (text: string) => void;

type ToggleFn = (item: TodoType) => void;
