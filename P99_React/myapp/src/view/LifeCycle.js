import React from 'react';
import PropTypes from 'prop-types';
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: 0};
    }
    static propTypes = {
        loginState: PropTypes.number
    };
    componentWillMount() {
        console.log('WillMount 组件初始化时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state')
    }
    componentDidMount() {
        console.log('DidMount! 组件渲染之后调用，只调用一次。可以在此请求数据')
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)
        console.log('WillReceiveProps! 组件初始化时不调用，组件接受新的props时调用')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate react性能优化非常重要的一环。组件接受新的state或者props时调用，' +
            '对比前后两个props和state是否相同，相同返回false阻更，dom树进行diff算法对比')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate! 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate! 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点')
    }
    componentWillUnmount() {
        console.log('WillUnmount! 组件将要卸载时调用，一些事件监听和定时器需要在此时清除')
    }
    render() {
        console.log('render! react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了')
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
};
export default Button
