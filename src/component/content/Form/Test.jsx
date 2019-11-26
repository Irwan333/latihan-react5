import React, {Component,Fragment} from 'react';
// import Content from './Content.jsx';
import Nama from './Nama.jsx';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nama   : 'Irwan'
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleName(event){
    this.setState({
            nama   : 'Irwans'
    });
}

onSubmit(event){
    event.preventDefault();
    this.setState({
        nama: 'zzzzzzzzz'
    });
}

    render(){
        return(
            <Fragment>
            <div class="container">
                <div class="row justify-content-md-center">
                  <div className="App">
                      <form onSubmit={this.onSubmit}>
                        <Box component="span" display="block">
                          <TextField
                            id="standard-with-placeholder"
                            label="Nama Lengkap"
                            margin="normal"
                            value={this.state.nama}
                            onChange={this.handleNama}
                          />
                        </Box>
                        <Box component="span" display="block">
                          <Button variant="contained" color="primary" type="submit">
                            Ganti Nama
                          </Button>
                        </Box>
                      </form>
                      <Nama nama={this.state.nama}/>
                    </div>
                    </div>
                    </div>
            </Fragment>
        )
    }
}


export default Test;


