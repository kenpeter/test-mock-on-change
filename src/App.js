/*
import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  border: 1px solid #ccc;
  width: 500px;
`;

export function FuncTextArea({onChange = () => {}}) {
  return (
    <div>
      <h1>hi</h1>
      <StyledTextArea onChange={onChange} />
    </div>
  );
}

function App() {
  const onChange = () => {
    console.log('it works');
  };

  return (
    <div>
      <FuncTextArea onChange={onChange} />
    </div>
  );
}

export default App;
*/

import React from 'react';
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mirror: ''
    };
    this.updateMirror = this.updateMirror.bind(this);
  }

  updateMirror(e) {
    let val = e.target.value;
    this.setState((prevState, props) => {
      return {
        mirror: val
      };
    });
  }

  render() {
    return (
      <div>
        <div>
          <textarea type="text" onChange={this.updateMirror} />
        </div>
        <div test="mirror">{this.state.mirror}</div>
      </div>
    );
  }
}
export default App;
