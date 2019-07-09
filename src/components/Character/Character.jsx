import React, { Component } from 'react';
import Avatar from 'avataaars'
import { withStyles } from '@material-ui/styles'

const styles={
    characterContainer: {
        display: 'flex',
    },
    CharacterInputs: {
        background: 'none',        
        borderBottom: '1px solid #C9C9C9',
        borderTop: '0px',
        borderLeft: '0px',
        borderRight: '0px',
    },
    CharacterBlank: {
    color: '#C9C9C9',
    },
     form: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '300px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    derecha: {
      position: 'absolute',
      bottom: '0',
      margin: '0 0 0 32%',
      width: '30%',

    },
    espacio: {
      padding: '9px 15px',
      margin: '0 15px',
      background: '#423B71',
      color: '#fff',
      borderRadius: '13px',
      width: '100px',
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
    },
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
    }

    render() {
        const { classes, toggleStory } = this.props
        return (
            <div className={classes.characterContainer}>
                <div>
                    <Avatar
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
                        <input className={classes.CharacterInputs}
                            onChange={this.handleChange}
                            type="text" 
                            name="name" 
                            id="name"
                        />
                        <input className={classes.CharacterInputs}
                            onChange={this.handleChange} 
                            type="text" 
                            name="lastname" 
                            id="lastname"
                        />
                        <select className={classes.CharacterInputs}
                            name="hairStyle" 
                            id="hairStyle"
                            onChange={this.handleChange}
                        >
                            <option value="blank" className={classes.CharacterBlank} >
                                Selecciona una opcion
                            </option>
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
                        <select className={classes.CharacterInputs}
                            name="accessoriesType" 
                            id="accessoriesType"
                            onChange={this.handleChange}
                        >
                            <option value="blank">
                                Selecciona una opcion
                            </option>
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
                        <select className={classes.CharacterInputs}
                            name="clotheType" 
                            id="clotheType"
                            onChange={this.handleChange}
                        >
                            <option value="blank">
                                Selecciona una opcion
                            </option>
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
                        <select className={classes.CharacterInputs}
                            name="clotheColor" 
                            id="clotheColor"
                            onChange={this.handleChange}
                        >
                            <option value="blank">
                                Selecciona una opcion
                            </option>
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
                        <select className={classes.CharacterInputs}
                            name="eyeType" 
                            id="eyeType"
                            onChange={this.handleChange}
                        >
                            <option value="blank">
                                Selecciona una opcion
                            </option>
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
                        <select className={classes.CharacterInputs}
                            name="mouthType" 
                            id="mouthType"
                            onChange={this.handleChange}
                        >
                            <option value="blank">
                                Selecciona una opcion
                            </option>
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
                        <select className={classes.CharacterInputs}
                            name="skinColor" 
                            id="skinColor"
                            onChange={this.handleChange}
                        >
                            <option value="blank">
                                Selecciona una opcion
                            </option>
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
                <div className={classes.derecha}>
                    <button className={classes.espacio} onClick={()=>toggleStory()}>Aceptar</button>
                    <button className={classes.espacio} onClick={this.props.onClick}>Borrar</button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Character);
