import ArticleImg1 from '../resources/img/article-img-1-min.png';
import ArticleImg2 from '../resources/img/article-img-2-min.png';
import ArticleImg3 from '../resources/img/article-img-3-min.png';

const UseArticles = () => {

const articles = [
    {   id: 1,
        img: ArticleImg1,
        date: '20 Aug 2022',
        title: 'How to Make Florarium',
        descr: "Terrariums with plants - or, as they are often called, florariums - are popular because all the care comes down to rare but regular  watering (every two to three weeks). As a rule, unpretentious plant species are planted in the florarium: it can be similar to the tropical jungle, and to the rocky desert. Florarium can be assembled at a master class, or at home according to our instructions. We'll tell you what is needed for this.All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well. ",
    },
    {   id: 2,
        img: ArticleImg2,
        date: '12 Jul 2022',
        title: '5 Flowers for Your Balcony',
        descr: 'Do you have a balcony and a desire to decorate it with flowers? This is a great decision! We will tell you which flowers are suitable for the balcony and will grow in such conditions.All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well. ',
    },
    {   id: 3,
        img: ArticleImg3,
        date: '2 May 2022',
        title: '5 Best Succulents for Your Home',
        descr: "Succulents are excellent plants for busy people who forget about watering. Succulents are unpretentious, pleasing to the eye, and don't need fertilizers. All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well."
    },
    {   id: 4,
        img: ArticleImg1,
        date: '10 Aug 2022',
        title: 'How to Make Florarium 2',
        descr: "Terrariums with plants - or, as they are often called, florariums - are popular because all the care comes down to rare but regular  watering (every two to three weeks). As a rule, unpretentious plant species are planted in the florarium: it can be similar to the tropical jungle, and to the rocky desert. Florarium can be assembled at a master class, or at home according to our instructions. We'll tell you what is needed for this.All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well. ",
    },
    {   id: 5,
        img: ArticleImg2,
        date: '18 Jul 2022',
        title: '10 Flowers for Your Balcony',
        descr: 'Do you have a balcony and a desire to decorate it with flowers? This is a great decision! We will tell you which flowers are suitable for the balcony and will grow in such conditions.All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well. ',
    },
    {   id: 6,
        img: ArticleImg3,
        date: '20 May 2022',
        title: '10 Best Succulents for Your Home',
        descr: "Succulents are excellent plants for busy people who forget about watering. Succulents are unpretentious, pleasing to the eye, and don't need fertilizers. All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well."
    },
    {   id: 7,
        img: ArticleImg1,
        date: '10 Aug 2023',
        title: 'How to Make Florarium 3',
        descr: "Terrariums with plants - or, as they are often called, florariums - are popular because all the care comes down to rare but regular  watering (every two to three weeks). As a rule, unpretentious plant species are planted in the florarium: it can be similar to the tropical jungle, and to the rocky desert. Florarium can be assembled at a master class, or at home according to our instructions. We'll tell you what is needed for this.All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well. ",
    },
    {   id: 8,
        img: ArticleImg2,
        date: '18 Jul 2023',
        title: '15 Flowers for Your Balcony',
        descr: 'Do you have a balcony and a desire to decorate it with flowers? This is a great decision! We will tell you which flowers are suitable for the balcony and will grow in such conditions.All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well. ',
    },
    {   id: 9,
        img: ArticleImg3,
        date: '20 May 2023',
        title: '15 Best Succulents for Your Home',
        descr: "Succulents are excellent plants for busy people who forget about watering. Succulents are unpretentious, pleasing to the eye, and don't need fertilizers. All florariums are conditionally divided into two large groups: open and closed ones. In open florariums, moisture will gradually leave the vessel - such florariums should be watered regularly, although watering will be required less often than when keeping the same plants in a pot. In closed florariums, moisture, evaporating from the top layer of soil and plant leaves, settles on the walls of the vessel. The resulting droplets flow or fall down, repeating the natural circulation of water in the atmosphere. Such florariums either do not require watering at all, or watering is very rare.As plants for the first florarium, fittonia, forest green moss and salinaria are suitable. Of the commercially available plants in closed systems, ferns (e.g., aspleniums, adiantum) and mosses, various ficuses (e.g., ficus microcarpa), coffee, cirrus asparagus, spathiphyllum, chlorophytum, and chamedorea coexist well."
    }
    ]
    
    return {articles};
}

export default UseArticles;