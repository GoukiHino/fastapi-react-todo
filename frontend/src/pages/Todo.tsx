import Layout from "../components/Layout";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Todo = () => {
    return (
        <Layout>
            <TodoInput/>
            <TodoList/>
        </Layout>
    );
};

export default Todo;