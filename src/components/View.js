import React, { Component } from "react";
// import bgImage from "";
import dataJson from "./data.json";
import Options from "./Options";
import Record from "./Record";
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'


// import withReactContent from "sweetalert2-react-content";
// const MySwal = withReactContent(Swal);

let recordList = [];

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
      count: 0,
      records: "",
      //recordList: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dataJson, loading: false });
      // this.setState({ img: dataJson[0].img });
    }, 1000);
    console.log("creando");
  }
  resetStory = () => {
    this.setState({count : this.state.count - this.state.count})
    console.log("Estado del count: " + this.state.count);
  }

  
  handlerClick = (e) => {
    const idButton = e.target.id;

    if (this.state.count > 5) {
      Swal.fire({
        title: '¿Deseas jugar nuevamente?',
        text: "Se reiniciará la historia si escoges 'Volver a jugar'",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, volver a jugar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Historia reiniciada!',
            showConfirmButton: false,
            timer: 1500
          })
          // Swal.fire(
          //   'Juego reiniciado',
          //   'Clic en OK para empezar',
          //   'success'
          //   )
          this.resetStory();
          recordList.splice(0, recordList.length);
          this.setState({records: ""});
          console.log("Array vaciado: " + recordList);
          console.log("Records vaciado: " + this.state.records);
        }
      })
      // MySwal.fire({
      //   title: "Ya se acabó la historia, shu de aquí ",
      //   showClass: {
      //     popup: "animate__animated animate__fadeInDown",
      //   },
      //   hideClass: {
      //     popup: "animate__animated animate__fadeOutUp",
      //   },
      // });
    } else if (idButton === "a" && this.state.records !== "A") {
      this.setState({
        count: this.state.count + 1,
        records: "A",
      });
    } else if (idButton === "a" && this.state.records === "A") {
      this.setState({
        count: this.state.count + 2,
        records: "A",
      });
    } else if (idButton === "b" && this.state.records === "A") {
      this.setState({
        count: this.state.count + 3,
        records: "B",
      });
    } else if (idButton === "b") {
      this.setState({
        count: this.state.count + 2,
        records: "B",
      });
    }
    console.log(recordList);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.records !== this.state.records) {
      recordList.push(this.state.records);
    }

    console.log("Estado actual: " + this.state.records);
    console.log("Array con selección: " + recordList);
  }

  

  render() {
    // let style = {
    //   // border: "6px solid #000",
    //   backgroundImage: url(${this.state.data[this.state.count].imgUrl}),
    // }

    return (
      // <div style="style">
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div
              className="layout"
              style={{
                backgroundImage: `url(${
                  this.state.data[this.state.count].imgUrl
                })`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            >
                <div className="story">
                  <h2>{this.state.data[this.state.count].historia}</h2>
                </div>

                <div className="optionsPosition">
                  <Options
                    textLine={this.state.data}
                    index={this.state.count}
                    onSelectButton={this.handlerClick}
                  />
                </div>

                <div className="recordatorio">
                  <Record
                    list={recordList}
                    selectButtonValue={this.state.records}
                  />
                </div>
              </div>
            
          </>
        )}
      </div>
    );
  }
}

export default View;
