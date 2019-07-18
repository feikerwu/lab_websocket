import React from 'react';

class App extends React.Component {
  render() {
    return <button onClick={() => this.start()}>开始连接</button>;
  }

  start() {
    const wsClient = new WebSocket('wss://echo.websocket.org');
    wsClient.addEventListener('open', evt => {
      console.log(evt);
      wsClient.send({ test: 1 });
    });

    wsClient.addEventListener('message', evt => {
      console.log(evt);
    });
  }
}

export default App;
