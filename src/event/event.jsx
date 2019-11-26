 import React,{Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama   : '',
            alamat : '',
            hobi   : '',
            umur: null
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let umur = this.state.umur;
        if (!Number(umur)) {
            alert("silahkan isi usia anda terlebih dahulu");
        }
    }

    onChangeHandler = (event) => {
        let nama   = event.target.name;
        let alamat = event.target.alamat;
        let hobi   = event.target.hobi;
        let val = event.target.value;
        this.setState({
            [nama]  : val,
            [alamat]:val,
            [hobi]: ''
        });
    }
  
    render() {
        return (
            <div className="container">
	            <form>
				  <div className="form-group" onSubmit={this.onSubmitHandler}>
				    <label>Halo {this.state.nama}</label>
				    <input type="text" onChange={this.onChangeHandler} name="nama" className="form-control" placeholder="masukan nama anda" required />
				  </div>
				  <div className="form-group" onSubmit={this.onSubmitHandler}>
				    <label>Sebutkan Salah satu Hobi Kamu {this.state.hobi}</label>
				    <input type="text" onChange={this.onChangeHandler} name="hobi" className="form-control" placeholder="masukan nama anda" required />
				  </div>
				  <div className="form-group" onSubmit={this.onSubmitHandler}>
				    <label>Umur kamu adalah {this.state.umur}</label>
				    <input type="number" onChange={this.onChangeHandler} name="umur" className="form-control" placeholder="masukan nama anda"  />
				  </div>
				  <div class="form-group">
				    <label for="exampleFormControlTextarea1">Alamat tinggal {this.state.alamat}</label>
				     <textarea onChange={this.onChangeHandler} name="alamat" className="form-control" placeholder="masukan alamat lengkap"></textarea> 
				  </div>
				  <input type="submit" onClick = {this.updateState}  value="simpan data" className="btn btn-primary"/> 
				</form>
            </div>
        );
    }
}

export default Form; 