import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: 'lightgray',
            padding: '10px',
            borderBottom: '1px #fff dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"
                        onChange={this.props.markCompleted.bind(this, id)} /> {' '}
                    {title}
                    <button style = {btnStyle} onClick={this.props.delete.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right'
}

export default TodoItem
