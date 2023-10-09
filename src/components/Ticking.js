import React from 'react';

class Ticking extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      };
      this.convertTime = this.convertTime.bind(this);
    }

    convertTime(timestamp) {
      let minutes = Math.floor(timestamp / 60);
      let seconds = timestamp - minutes * 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      timestamp = minutes + ":" + seconds;
      return timestamp;
    };

    render() {
      const { time } = this.props;
      const { convertTime } = this;
      return (
        <div className="ui huge header center aligned" style={{fontSize:'6rem'}}>{convertTime(time)}</div>
      );
    }
}

export default Ticking
