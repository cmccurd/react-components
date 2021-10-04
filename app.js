// TODO
class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cam',
      done: false,
      tasks: [
        { content: 'Eggs', completed: false },
        { content: 'Milk', completed: false },
        { content: 'Sugar', completed: true }
      ]
    }
    this.onListItemClick = this.onListItemClick.bind(this);
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    return (
      <main>
        <h1>Grocery List</h1>
        <h2>Welcome, {this.state.name}!</h2>
        <ToBuyList style={{textDecoration: this.state.done ? 'line-through' : 'none'}} onClick={this.onListItemClick} tasks={this.state.tasks} />
      </main>
    )
  }

};

function ToBuyList(props) {
  return (
    <ul>{
      props.tasks.map(task => {
        return (<li >{task.content}</li>)
      })
    }
    </ul>
  );
};

ReactDOM.render(<GroceryList />, document.getElementById("app"));
