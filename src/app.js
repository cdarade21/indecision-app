import React from 'react'
import ReactDOM from 'react-dom'
import Indecision from './components/Indecision.js'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

console.log("Webpack is Running!")

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}>What Should I do?</button>
//             </div>
//         )
//     }
// }


// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//                 {this.props.options.map((option)=> <Option key={option} optionText={option}/>)}
//             </div>
//         )
//     }
// }

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

ReactDOM.render(<Indecision/>, document.getElementById('app'))