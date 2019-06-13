import React, { Component } from 'react';
import Avatar from 'avataaars'
import { withStyles } from '@material-ui/styles'

const styles={
    characterContainer: {
        display: 'flex',
    },
    form: {
        display: 'flex',
        height: '75%',
        minWidth: '310px',
        flexDirection: 'row',
        minWidth: '300px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    labels: {
        display: 'flex',
        flexDirection: 'column',
        width: '150px',
        height: '100%',
        justifyContent: 'space-around',
        '& label':{
            padding: '5px'
        }
    },
    inputs: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-around',
        '& input': {
            padding: '5px 10px'
        },
        '& select': {
            padding: '5px 10px'
        },
    }
}

class Character extends Component {
    
    state={
        name: '',
        lastname:'',
        hairStyle:'',
        accessoriesType:'',
        clotheType:'',
        clotheColor:'',
        eyeType:'',
        mouthType:'',
        skinColor:'',
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    handleDecline= (e)=>{
        e.preventDefault()
        this.props.onClick()
        // console.log("hola")
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.characterContainer}>
                <div>
                    <Avatar
                        // style={{width: '100px', height: '100px'}}
                        avatarStyle='Circle'
                        topType={this.state.hairStyle}
                        accessoriesType={this.state.accessoriesType}
                        hairColor='BrownDark'
                        facialHairType='Blank'
                        clotheType={this.state.clotheType}
                        clotheColor={this.state.clotheColor}
                        eyeType={this.state.eyeType}
                        eyebrowType='Default'
                        mouthType={this.state.mouthType}
                        skinColor={this.state.skinColor}
                    />
                </div>
                <form className={classes.form}>
                    <div className={classes.labels}>
                        <label htmlFor="name">Nombre</label>
                        <label htmlFor="lastname">Apellido</label>
                        <label htmlFor="hairStyle">Cabello</label>
                        <label htmlFor="accessoriesType">Lentes</label>                        
                        <label htmlFor="clotheType">Ropa</label>                        
                        <label htmlFor="clotheColor">Color Ropa</label>                        
                        <label htmlFor="eyeType">Tipo de Ojos</label>                        
                        <label htmlFor="mouthType">Tipo de Boca</label>                        
                        <label htmlFor="skinColor">Color de Piel</label>                        
                    </div>
                    <div className={classes.inputs}>
                        <input
                            onChange={this.handleChange}
                            type="text" 
                            name="name" 
                            id="name"
                        />
                        <input
                            onChange={this.handleChange} 
                            type="text" 
                            name="lastname" 
                            id="lastname"
                        />
                        <select
                            name="hairStyle" 
                            id="hairStyle"
                            onChange={this.handleChange}
                        >
                            <option value="LongHairDreads">
                                Pelo Largo Ondulado
                            </option>
                            <option value="ShortHairShortCurly">
                                Pelo Corto Ondulado
                            </option>
                            <option value="ShortHairShortFlat">
                                Pelo Corto Lacio
                            </option>
                            <option value="LongHairCurly">
                                Pelo Chino
                            </option>
                            <option value="Hat">
                                Con sombrero
                            </option>
                        </select>
                        <select
                            name="accessoriesType" 
                            id="accessoriesType"
                            onChange={this.handleChange}
                        >
                            <option value="Round">
                                Lentes Redondos
                            </option>
                            <option value="Sunglasses">
                                Lentes de Sol
                            </option>
                            <option value="Blank">
                                Sin Lentes
                            </option>
                            <option value="Prescription01">
                                Lentes Hipster Blancos
                            </option>
                            <option value="Prescription02">
                                Lentes Hipster Negros
                            </option>
                        </select>
                        <select
                            name="clotheType" 
                            id="clotheType"
                            onChange={this.handleChange}
                        >
                            <option value="Hoodie">
                                Sudadera
                            </option>
                            <option value="ShirtCrewNeck">
                                Playera
                            </option>
                            <option value="BlazerShirt">
                                Con Blazer
                            </option>
                            <option value="GraphicShirt">
                                Playera Estampada
                            </option>
                            <option value="Overall">
                                Overall
                            </option>
                        </select>
                        <select
                            name="clotheColor" 
                            id="clotheColor"
                            onChange={this.handleChange}
                        >
                            <option value="Black">
                                Negro
                            </option>
                            <option value="Blue02">
                                Azul
                            </option>
                            <option value="Gray02">
                                Gris
                            </option>
                            <option value="Red">
                                Rojo
                            </option>
                            <option value="White">
                                Blanco
                            </option>
                        </select>
                        <select
                            name="eyeType" 
                            id="eyeType"
                            onChange={this.handleChange}
                        >
                            <option value="Close">
                                Cerrados
                            </option>
                            <option value="Happy">
                                Felices
                            </option>
                            <option value="Squint">
                                Curiosos
                            </option>
                            <option value="Surprised">
                                Sorprendidos
                            </option>
                            <option value="Wink">
                                Guiñando
                            </option>
                        </select>
                        <select
                            name="mouthType" 
                            id="mouthType"
                            onChange={this.handleChange}
                        >
                            <option value="Tongue">
                                Con Lengua
                            </option>
                            <option value="Smile">
                                Sonriente
                            </option>
                            <option value="Serious">
                                Serio
                            </option>
                            <option value="ScreamOpen">
                                Gritando
                            </option>
                            <option value="Concerned">
                                Preocupado
                            </option>
                        </select>
                        <select
                            name="skinColor" 
                            id="skinColor"
                            onChange={this.handleChange}
                        >
                            <option value="Pale">
                                Palido
                            </option>
                            <option value="Light">
                                Blanco
                            </option>
                            <option value="Brown">
                                Cafe
                            </option>
                            <option value="DarkBrown">
                                Cafe Obscuro
                            </option>
                            <option value="Black">
                                Negro
                            </option>
                        </select>
                    </div>
                </form>
                <div>
                    <button>Accept</button>
                    <button onClick={this.props.onClick}>Decline</button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Character);
