import arecaPalm from '../resources/img/goods/areca-palm-min.png'
import floralMoss from '../resources/img/goods/floral-moss-min.png'
import graptosedumDarley from '../resources/img/goods/graptosedum-darley-min.png'
import haworthiaVenosa from '../resources/img/goods/haworthia-venosa-min.png'
import monsteraObliqua from '../resources/img/goods/monstera-obliqua-min.png'
import notocactusRoseoluteus from '../resources/img/goods/notocactus-roseoluteus-min.png'
import sansevieriaTrifasciata from '../resources/img/goods/sansevieria-trifasciata-min.png'
import silverTorch from '../resources/img/goods/silver-torch-min.png'

const useGoods = () => {
    const goods = [
        {
            id: 1,
            name: 'Areca Palm',
            price: '22.00',
            img: arecaPalm,
        },
        {
            id: 2,
            name: 'Floral Moss',
            price: '33.00',
            img: floralMoss,
        },
        {
            id: 3,
            name: 'Graptosedum Darley',
            price: '32.00',
            img: graptosedumDarley,
        },
        {
            id: 4,
            name: 'Haworthia Venosa',
            price: '48.00',
            img: haworthiaVenosa,
        },
        {
            id: 5,
            name: 'Monstera Obliqua',
            price: '45.00',
            img: monsteraObliqua,
        },
        {
            id: 6,
            name: 'Notocactus Roseoluteus',
            price: '33.00',
            img: notocactusRoseoluteus,
        },
        {
            id: 7,
            name: 'Sansevieria Trifasciata',
            price: '36.00',
            img: sansevieriaTrifasciata,
        },
        {
            id: 8,
            name: 'Silver Torch',
            price: '24.00',
            img: silverTorch,
        },
    ]
    return { goods }
}

export default useGoods