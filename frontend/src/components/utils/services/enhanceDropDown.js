import React from 'react';
import '../helpers/dropDown.css';

function enhanceDropDown(WrappedComponent) {

  return class extends React.Component {
    constructor(props) {      
        super(props);
        this.state = {           
          isOpen: false
        }
    }

    componentDidMount() {
      window.addEventListener('click', this.handleDocumentClick)
    } 

    componentWillUnmount() {
      window.removeEventListener('click', this.handleDocumentClick)
      this.setState({
        list: [],
        isOpen: false
      })
    }
    handleDocumentClick = () => {
      if(this.state.isOpen) {
           this.toggleShowList();
      }
    } 

    toggleShowList = () => {
      this.setState((prevState)=> ({
          ...this.state,
          isOpen: !prevState.isOpen
        })
      );
    }

    handleClickItem = (name) => {
      this.props.onClickItem(name);
      this.toggleShowList();
    }
    
    render() {      
      return(
        <div onClick={(e) => e.stopPropagation()}>
           <WrappedComponent               
              isOpen={this.state.isOpen}
              toggleShowList={this.toggleShowList}
              handleClickItem = {this.handleClickItem}
              {...this.props}
            />
        </div>
      )
    }
  } 
}

export default enhanceDropDown