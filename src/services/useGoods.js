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
            descr: 'It is a multi-stemmed palm. Cylindrical trunks with a diameter of about 15 cm grow close to each other, are erect and slightly sloping. Green young stems, as they mature, change their color to yellow. Care: The optimum temperature for this plant is + 22 - 24 °C throughout the year.At the same time, cooling in winter to + 15 °C and warming in summer to + 30 °C are quite acceptable.But the palm tree does not tolerate sudden changes in temperature.',
        },
        {
            id: 2,
            name: 'Floral Moss',
            price: '33.00',
            img: floralMoss,
            descr: 'Settle in a piece of tropical rainforest. This moss is easy to maintain and will not grow - it will remain the same size as you bought it. Care: Floral moss is a low maintenance plant.The only condition for its maintenance is to ensure maximum humidity.The moss does not tolerate direct sunlight and likes frequent, abundant watering.',
        },
        {
            id: 3,
            name: 'Graptosedum Darley',
            price: '32.00',
            img: graptosedumDarley,
            descr: 'In appearance, the plants are similar to either graptopetalum or sedum, and the flowering often contrasts with the vegetative part: a sedum-like plant blooms with graptopetalum flowers and vice versa. Care: Graptosedum is an unpretentious, undemanding, and well- adapted plant for growing in indoor conditions.It easily tolerates the neighborhood with other succulents but also looks very impressive on its own.',
        },
        {
            id: 4,
            name: 'Haworthia Venosa',
            price: '48.00',
            img: haworthiaVenosa,
            descr: 'This is a miniature succulent growing in dense groups, forming numerous shoots growing on long stolons submerged in the soil. Plants are almost stemless, forming a rosette of leaves raised above the soil surface. Care: Haworthia venosa is unpretentious, grows well and quickly when planted in properly selected soil, stolons produce new, easily rooted rosettes.The beautiful checkerboard pattern and pink- brown color of the leaves appear only in bright sunlight.',
        },
        {
            id: 5,
            name: 'Monstera Obliqua',
            price: '45.00',
            img: monsteraObliqua,
            descr: 'This plant has chosen the tropical rainforests of Brazil and Guiana. This climbing vine with elliptical or oblong, lanceolate, pointed leaves at the ends makes an indelible impression even on those who have nothing to do with floriculture. Its leaves are about 20 cm long, while the width does not exceed 6 cm. Care: A damp greenhouse or florarium is the most suitable place for this species.Under comfortable conditions, the leaves gain strength and become large, and the distance of internodes decreases.',
        },
        {
            id: 6,
            name: 'Notocactus Roseoluteus',
            price: '33.00',
            img: notocactusRoseoluteus,
            descr: 'In nature, such cactus can be found on the hills, as well as in the foothills of Paraguay, southern Brazil, Argentina, and Uruguay. They are distinguished by a single short-cylindrical or spherical stem. Care: Notocactus prefer a lot of bright light but they need to get used to the spring sun gradually.In summer, it is better to shade during the hottest sundial.A moderate or warm temperature is preferred, about 22-23 °C.In winter, a dormant period should be arranged at a temperature of 10-12 °C.',
        },
        {
            id: 7,
            name: 'Sansevieria Trifasciata',
            price: '36.00',
            img: sansevieriaTrifasciata,
            descr: 'It is a perennial plant with rosettes of 6-8 leaves in length. The leaves are hard, sword-like, up to 1 m long, dark green with light transverse wavy stripes, most brightly colored in young leaves. There are whitish-green flowers, collected in a cluster, with a strong aroma. Sansevieria Trifasciata blooms in spring and autumn. Care: Sansevieria will not die in low light conditions but you should not constantly keep it in the back of the room.It needs a lot of light, including sunlight.',
        },
        {
            id: 8,
            name: 'Silver Torch',
            price: '24.00',
            img: silverTorch,
            descr: 'This species of cactus can be easily distinguished by columnar, thin scions that brush out at the base. On the surface of these stems, there is a huge number of areoles, so the cactus itself is densely covered with white-yellow spines. Care: Grow this plant in the warm season at an air temperature of 22 to 26 ℃.In winter, there is a dormant period.Therefore, cleistocactus should be placed in a fairly cool place(about 10- 12 f℃).',
        },
    ]
    return { goods }
}

export default useGoods