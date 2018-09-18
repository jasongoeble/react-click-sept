//cor component import for react
import React, { Component } from "react";
//top level inmport
import Wrapper from "./components/Wrapper";
    //thes imports go for before the container
    import Nav from "./components/Nav";
    import Title from "./components/Title";
    //this impor is used to hold the main content on the page
    import Container from "./Container";
        import FriendCard from "./components/FriendCard";
        import Row from "./Row";
        import Column from "./Column";
        import friends from "./images.json";
//import styling to apply to the entire page
import "./App.css";

//function to shuffle the arrangement of the cards
//uses random math numbers
function shuffleFriends(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class App extends Component {
    // Set this.state
    state = {
        friends,
        currentScore: 0,
        topScore: 0,
        rightWrong: "",
        clicked: [],
    };

    //function to recognize the clicking of images
    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };

    //function to define the score upon successful clicks
    //including when each image has been clicked exactly once
    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            rightWrong: ""
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        } else if (newScore === 12) {
            this.setState({ rightWrong: "You clicked each image exactly once.  Good job@" });
        }
        this.handleShuffle();
    };

    //function to define the score when an image is clicked more than once
    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            rightWrong: "You already clickced that image.  Time to start over",
            clicked: []
        });
        this.handleShuffle();
    };

    //function to shuffle the arrangmement of the cards on the screen
    handleShuffle = () => {
        let shuffledFriends = shuffleFriends(friends);
        this.setState({ friends: shuffledFriends });
    };

    render() {
        return ( 

            <Wrapper >

            <Title >
                Image Memeory Game - Straight Out of XKCD
            </Title >

            {/* scoring states */}
            <
            Nav title = ""
            score = { this.state.currentScore }
            topScore = { this.state.topScore }
            rightWrong = { this.state.rightWrong }
            />

            <Container >
            
            {/* cards are shuffled and handled in rows and columns */}
            <Row > 
            {
                this.state.friends.map(friend => ( 
                    <Column size = "md-3 sm-6" >
                    <
                    FriendCard key = { friend.id }
                    handleClick = { this.handleClick }
                    handleIncrement = { this.handleIncrement }
                    handleReset = { this.handleReset }
                    handleShuffle = { this.handleShuffle }
                    id = { friend.id }
                    image = { friend.image }
                    /> 
                    </Column >
                ))
            } 
            </Row> 
            </Container > 
            </Wrapper>
        );
    }
}

export default App;