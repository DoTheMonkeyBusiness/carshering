import React, {Component} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default(propName) => (ChildComponent) => {
  return class HocLoader extends Component {
    constructor() {
      super();

    }

    propIsEmpty() {
      const prop = this.props[propName];
      console.log('hi beach',prop);
      if(!prop ||
        (prop.hasOwnProperty('lenght') && !prop.lenght) ||
        (!Object.keys(prop).length)) {
        return true
      }
      return false
    }

    loaderComponent(){
      return <div><LinearProgress /></div>
    }

    render() {
      return (
        this.propIsEmpty()? this.loaderComponent(): <ChildComponent {...this.props}/>
      );
    }
  }
}


