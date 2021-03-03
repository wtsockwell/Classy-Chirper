import React from 'react';
import Form from './components/Form'
import Timeline from './components/Timeline'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            text: "",
            posts: [
                {name: "One Week ago", text: "I hate React"},
                {name: "The Weekenders", text: "Kill me now"},
                {name: "Mid-week gang", text: "This ain't too bad now"}
        ]
        }
    }

    handlePost = (e) => {
        e.preventDefault()
        this.setState({posts: [...this.state.posts, {name: this.state.user, text: this.state.text}]})
        this.setState({ user: "", text: "" })
    }

    handleUser = (e) => {
        this.setState({ user: e.target.value })
    }
    
    handleText = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <>
                <div className="jumbotron m-4 bg-primary text-white text-center">
                    <h1 className="display-4">Welcome to Chirper</h1>
                    <p className="text-white">Yet another twitter copy, now with classes!</p>
                </div>
                <div className="container d-flex justify-content-between mx-5">
                    <div className="col-md-4">
                        <div className="border p-3">
                    <Form handlePost={this.handlePost} handleUser={this.handleUser} handleText={this.handleText} user={this.state.user} text={this.state.text} />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <Timeline posts={this.state.posts} />
                    </div>
                </div>

            </>
        )
    }

}
export default App