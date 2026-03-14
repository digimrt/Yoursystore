// Products Data with multiple images and availability
const products = [
    // makeup
    {
        id: 1,
        name: 'Lip gloss - Salty tan',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/salty-tan.JPG',
        ],
        description: 'MAKEUP gloss',
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 2,
        name: 'Lip gloss - Espresso',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/espresso.JPG'
        ],
        description: '',
        available: true,
        featured: true
    },
    {
        id: 3,
        name: 'Lip gloss - Raspberry Jelly',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/raspberry-jelly.JPG'
        ],
        description: '',
        available: true,
        featured: true
    },
    {
        id: 4,
        name: 'Lip gloss - Ribbon',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/ribbon.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },

    {
        id: 5,
        name: 'Lip gloss - Toast',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/toast.JPG'
        ],
        description: '',
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 6,
        name: 'Lip gloss - Peach pit',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/peach-pit.JPG'
        ],
        description: '',
        available: true
    },
    {
        id: 7,
        name: 'Lip gloss - Juava spritz',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/juava-spritz.JPG'
        ],
        description: '',
        available: true,
        featured: true
    },
    {
        id: 8,
        name: 'Lip gloss - Vanilla',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/vanilla.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },

    {
        id: 9,
        name: 'Summer fridays - Rosewood nights',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/rosewood-nights.JPG'
        ],
        description: '',
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 10,
        name: 'Summer fridays - Soft mauve',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/soft-mauve.JPG'
        ],
        description: '',
        available: true
    },
    {
        id: 11,
        name: 'Summer fridays - Pink cloud',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/pinkcloud.JPG'
        ],
        description: '',
        available: true,
        featured: true
    },
    {
        id: 12,
        name: 'Summer fridays - Blush dreams',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/blush-dreams.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },


    {
        id: 13,
        name: 'Rare beauty - Enlighten',
        category: 'makeup',
        price: 300,
        originalPrice: null,
        images: [
            'img/enlighten.JPG'
        ],
        description: '',
        available: true,
        featured: false,
        discount: false
    },
    {
        id: 14,
        name: 'Rare beauty - Mesmerize',
        category: 'makeup',
        price: 300,
        originalPrice: null,
        images: [
            'img/mesmerize.JPG'
        ],
        description: '',
        available: true
    },
    {
        id: 15,
        name: 'Rare beauty - Exhilrate',
        category: 'makeup',
        price: 300,
        originalPrice: null,
        images: [
            'img/exhilrate.JPG'
        ],
        description: '',
        available: true,
        featured: true
    },
    {
        id: 16,
        name: 'Lipstick - Tint',
        category: 'makeup',
        price: 150,
        originalPrice: null,
        images: [
            'img/tint.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },


    {
        id: 17,
        name: 'Blush - Encourage',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/encourage.JPG'
        ],
        description: '',
        available: true,
        featured: true,
        discount: false

    },
    {
        id: 18,
        name: 'Blush - Hope',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/hope.JPG'
        ],
        description: '',
        available: true
    },
    {
        id: 19,
        name: 'Blush - Happy',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/happy.JPG'
        ],
        description: '',
        available: true,
        featured: true
    },
    {
        id: 20,
        name: 'Blush - Bliss',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/bliss.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 21,
        name: 'Mascara',
        category: 'makeup',
        price: 400,
        originalPrice: null,
        images: [
            'img/mascara.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 22,
        name: 'Eyebrows pen',
        category: 'makeup',
        price: 150,
        originalPrice: null,
        images: [
            'img/eyebrows-pen.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 23,
        name: 'Blush - Toasted teddy',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/toasted-teddy.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 24,
        name: 'Blush - Freckle',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/freckle.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 25,
        name: 'Blush - Juice box',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/juice-box.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 26,
        name: 'Blush - Spicy marg',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/spicy-marg.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 27,
        name: 'Blush - Sleepy girl',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/sleepy-girl.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 28,
        name: 'Blush - Piggy',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/piggy.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },

    // skin care

    {
        id: 29,
        name: 'Gel got2b',
        category: 'skincare',
        price: 250,
        originalPrice: null,
        images: [
            'img/gelgot2b.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 30,
        name: 'Vaseline',
        category: 'skincare',
        price: 200,
        originalPrice: null,
        images: [
            'img/vaseline.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 36,
        name: 'Pack daily scent',
        category: 'skincare',
        price: 600,
        originalPrice: null,
        images: [
            'img/pack-daily-scent.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 37,
        name: 'Dove deodorant',
        category: 'skincare',
        price: 250,
        originalPrice: null,
        images: [
            'img/dove-deodorant.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 38,
        name: 'Venus gillette',
        category: 'skincare',
        price: 500,
        originalPrice: null,
        images: [
            'img/venus-gillette.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },



    // perfumes


    {
        id: 31,
        name: 'Victoria`s secret - Romantic',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/romantic.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 32,
        name: 'Victoria`s secret - Coconut passion',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/coconut-passion.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 33,
        name: 'Victoria`s secret - Rush',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/rush.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 34,
        name: 'Victoria`s secret - Aqua kiss',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/aqua-kiss.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 35,
        name: 'Victoria`s secret - Amber romance',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/amber-romance.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },

    {
        id: 39,
        name: 'Sol de Janeiro 62 - 35ml',
        category: 'perfumes',
        price: 300,
        originalPrice: null,
        images: [
            'img/sol-de-janeiro62.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },

    {
        id: 40,
        name: 'Sol de Janeiro 87 - 35ml',
        category: 'perfumes',
        price: 300,
        originalPrice: null,
        images: [
            'img/sol-de-janeiro87.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 41,
        name: 'Sol de Janeiro 40 - 35ml',
        category: 'perfumes',
        price: 300,
        originalPrice: null,
        images: [
            'img/sol-de-janeiro40.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 42,
        name: 'Sol de Janeiro 59 - 35ml',
        category: 'perfumes',
        price: 300,
        originalPrice: null,
        images: [
            'img/sol-de-janeiro59.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },

    {
        id: 43,
        name: 'Sol de Janeiro 71 - 35ml',
        category: 'perfumes',
        price: 300,
        originalPrice: null,
        images: [
            'img/sol-de-janeiro71.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },

    {
        id: 44,
        name: 'Sol de Janeiro 48 - 35ml',
        category: 'perfumes',
        price: 300,
        originalPrice: null,
        images: [
            'img/sol-de-janeiro48.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 45,
        name: 'Sol de Janeiro 39 - 35ml',
        category: 'perfumes',
        price: 300,
        originalPrice: null,
        images: [
            'img/sol-de-janeiro39.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 46,
        name: 'Perfume oil - يارا',
        category: 'perfumes',
        price: 150,
        originalPrice: null,
        images: [
            'img/yara.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 47,
        name: 'Perfume oil - سفير الحب',
        category: 'perfumes',
        price: 150,
        originalPrice: null,
        images: [
            'img/sefirlhoub.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 48,
        name: 'Perfume oil - موصوف',
        category: 'perfumes',
        price: 150,
        originalPrice: null,
        images: [
            'img/mousouf.JPG'
        ],
        description: '',
        available: true,
        discount: false
    },






    /* discount */

    {
        id: 49,
        name: 'Perfume set with hair clip',
        category: '',
        price: 800,
        originalPrice: 1000,
        images: [
            'img/perfumesetwith.jpg'
        ],
        description: '',
        available: true,
        discount: true
    },
    {
        id: 50,
        name: 'Eyebrows set',
        category: '',
        price: 350,
        originalPrice: 400,
        images: [
            'img/eyebrowsset.jpg'
        ],
        description: '',
        available: true,
        discount: true
    },
    {
        id: 51,
        name: 'Perfume set with sleeping mask',
        category: '',
        price: 800,
        originalPrice: 1000,
        images: [
            'img/perfumesetwithmask.jpg'
        ],
        description: '',
        available: true,
        discount: true
    },
    {
        id: 52,
        name: 'Perfume set with tint kiko',
        category: '',
        price: 800,
        originalPrice: 1050,
        images: [
            'img/Perfumewithtint.jpg'
        ],
        description: '',
        available: true,
        discount: true
    },
    {
        id: 53,
        name: 'Perfume set with hair clip',
        category: '',
        price: 800,
        originalPrice: 1000,
        images: [
            'img/perfumehairclip.jpg'
        ],
        description: '',
        available: true,
        discount: true
    },
    {
        id: 54,
        name: 'Cleaning set with perfume sol de janeiro',
        category: '',
        price: 850,
        originalPrice: 1050,
        images: [
            'img/cleaningsetwithjaneiro.jpg'
        ],
        description: '',
        available: true,
        discount: true
    },
    {
        id: 55,
        name: 'Rhode set',
        category: '',
        price: 800,
        originalPrice: 1000,
        images: [
            'img/rhodeset.jpg'
        ],
        description: '',
        available: true,
        discount: true
    },





];
