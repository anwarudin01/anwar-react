import React from 'react';

export class Tombol extends React.Component {
  constructor() {
    super();
    // membuat objek state
    this.state = {
      title: 'Belajar Reactjs',
      subTitle: 'Ayo klik untuk ubah state ini',
    };
  }

  changeTitle = () => {
    this.setState({
      title: 'Anda berhasil mengubah state ini, Terimakasih.',
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
        <button onClick={this.changeTitle}>Ubah Judul</button>
      </div>
    );
  }
}
