import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'

const styles= {
    superContainer: {
        padding: '30px',
        height: '440px',
    },
    contenidoContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        userSelect:'none',
    },
    page: {
        textAlign: 'center',
    }
}

class ContenidoCuento extends Component {
    state= {
        pagina: 0,
    }

    contenidoCuento = 
    [
        [
            `Érase una vez una preciosa niña que siempre llevaba una capa roja con 
            capucha para protegerse del frío. Por eso, todo el mundo la llamaba 
            Caperucita Roja. Caperucita vivía en una casita cerca del bosque. 
            Un día, la mamá de  Caperucita le dijo: Cuando Caperucita se 
            disponía  a salir de casa, su mamá, con gesto un poco serio, le hizo 
            una advertencia:`, 
            `Cuando llegó al bosque, la pequeña comenzó a distraerse contemplando 
            los pajaritos y recogiendo flores. No se dio cuenta de que alguien la 
            observaba detrás de un viejo y frondoso árbol. De repente, oyó una voz 
            dulce y zalamera.`
        ], 
        [
            `¡Oh, eso es estupendo! – dijo el astuto lobo – Yo también vivo por allí. 
            Te echo una carrera a ver quién llega antes. Cada uno iremos por un 
            camino diferente ¿te parece bien? La inocente niña pensó que era una 
            idea divertida y asintió con la cabeza. No sabía que el lobo había elegido 
            el camino más corto para llegar primero a su destino. Cuando el animal  
            llegó a casa de la abuela, llamó a la puerta.`, 
            `El malvado lobo entró en la casa y sin pensárselo dos veces, saltó 
            sobre la cama y se comió a la anciana. Después, se puso su camisón y 
            su gorrito de dormir y se metió entre las sábanas esperando a que 
            llegara la niña. Al rato, se oyeron unos golpes`
        ],
        [
            `Pero un día, las brujas del país vecino arrasaron el país, haciendo 
            prisioneras a todas las hadas y magos. Nuestra hada, poco antes de ser atacada,
             hechizó sus propios vestidos, y ayudada por su fea cara, se hizo pasar por bruja. 
            Así, pudo seguirlas hasta su guarida, y una vez allí, con su magia preparó 
            una gran fiesta para todas, adornando la cueva con murciélagos, sapos y 
            arañas, y música de lobos aullando.`,
            `Durante la fiesta, corrió a liberar a todas las hadas y magos, que con 
            un gran hechizo consiguieron encerrar a todas las brujas en la montaña 
            durante los siguientes 100 años.Y durante esos 100 años, y muchos más, 
            todos recordaron la valentía y la inteligencia del hada fea. Nunca más se 
            volvió a considerar en aquel país la fealdad una desgracia, y cada vez que
            nacía alguien feo, todos se llenaban de alegría sabiendo que tendría 
            grandes cosas por hacer.`
        ]
    ]

    
    previousPage = () => {
        if (this.state.pagina > 0){
            this.setState({
                pagina: this.state.pagina = this.state.pagina-1
            })
        }
    }
    nextPage= ()=>{
        if (this.state.pagina < this.contenidoCuento.length -1){
            this.setState({
                pagina: this.state.pagina = this.state.pagina+1
            })
        }
    }
    
    render() {
        const { classes } = this.props
        return (
            <div className={classes.superContainer}>
                <div className={classes.contenidoContainer}>
                    <div
                        className={classes.page}
                        onClick={this.previousPage}
                    >
                        <p>
                            {this.contenidoCuento[this.state.pagina][0]}
                        </p>
                        <p>
                            {this.state.pagina}
                        </p>
                    </div>
                    <div
                        className={classes.page}
                        onClick={this.nextPage}
                    >
                        <p>
                            {this.contenidoCuento[this.state.pagina][1]}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ContenidoCuento);
