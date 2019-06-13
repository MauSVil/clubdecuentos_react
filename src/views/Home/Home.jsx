import React from 'react';
import InfoCard from '../../components/InfoCard';
import ContactSlider from '../../components/ContactSlider';
import { withStyles } from '@material-ui/styles'
import Heroe from '../../components/Heroe';
import Eliza from '../../assets/eliza.png'
import Oso from '../../assets/oso.png'

const styles= {
    homeContainer: {
        maxWidth: '700px',
    }
}

const Home = (props) => {
    const { classes } = props
    return (
        <div className={classes.homeContainer}>
            <Heroe/>
            <InfoCard
                title={'¿Que es Mi Club de Cuentos?'}
                hasLineDivider={true}
            >
                <p>
                    Mi Club de Cuentos es una biblioteca 
                    digital de cuentos para niños que a 
                    través de nuestra aplicación, desarrollada 
                    para iOS, te dará acceso a un mundo de 
                    cuentos en ingles y español, aptos para 
                    niños de todas las edades. Si no tienes 
                    un dispositivo iOS, puedes encontrar 
                    nuestros cuentos en Amazon Kindle, 
                    búscanos como Mi Club de Cuentos en 
                    la barra de búsqueda.
                </p>
            </InfoCard>
            <InfoCard
                title={'Lo que te ofrecemos'}
                hasLineDivider={true}
            >
                <p>
                    Cuentos en inglés y español 
                    para niños de todas las edades
                </p>
            </InfoCard>
            <InfoCard
                title={'Lo que te ofrecemos'}
                hasLineDivider={true}
                columns={2}
            >
                <InfoCard
                    title={'Osito Tomas'}
                    image={Oso}
                    hasImage={true}
                >
                    <p>
                        Es un pequeño que vive con 
                        su familia en el campo, pero
                        se tiene que mudar a la ciudad 
                        por un cambio en el trabajo de 
                        Papá Oso. Descubre en su serie 
                        de libros como toda la familia 
                        y Tomás, se adaptan a esta 
                        nueva vida.
                    </p>
                </InfoCard>
                <InfoCard
                    title={'Eliza'}
                    image={Eliza}
                    hasImage={true}
                >
                    <p>
                        Eliza es una niña curiosa e inquieta 
                        que sin esperarlo, conoce a quien se 
                        convertirá en su gran amigo durante 
                        las vacaciones que pasa en casa de 
                        su abuelo. Juntos tendrán grandes 
                        aventuras en un mundo inesperado. 
                    </p>
                </InfoCard>
            </InfoCard>
            <InfoCard
                title={'Conocenos'}
                hasLineDivider={true}
            >
                <p>
                    Mi Club de Cuentos fue fundada en 
                    2015 por Karla Puga con la visión 
                    de inspirar a los niños a adquirir 
                    el hábito de la lectura y llevarlo 
                    a su vida adulta. Creemos que la 
                    educación y la lectura son dos de 
                    las herramientas más poderosas con 
                    las que contamos para desarrollar 
                    nuestros países, y al juntar tecnología 
                    con literatura infantil, podemos facilitar 
                    y hacer más eficiente el acceso a 
                    materiales de lectura para las familias 
                    del mundo. 
                </p>
                <p>
                    Desde que fuimos fundados, hemos trabajo 
                    constantemente en el desarrollo de nuestros 
                    cuentos, y aunque no ha sido un proceso 
                    sencillo porque es prueba y error… ¡y vaya 
                    que hemos cometido errores! Hemos aprendido 
                    de cada uno para mejorar nuestro producto y 
                    ofrecerte un mejor servicio. 
                </p>
                <p>
                    Esperamos que disfrutes nuestros cuentos 
                    tanto como nosotros hemos disfrutado 
                    preparándolos y que cada día estemos más 
                    cerca, con tu ayuda, de lograr nuestro 
                    sueño de tener un mundo de niños y familias 
                    que aman la lectura. 
                </p>
            </InfoCard>
            <ContactSlider/>
        </div>
    );
};

export default withStyles(styles)(Home);
