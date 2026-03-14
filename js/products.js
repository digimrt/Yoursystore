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
            'img/salty-tan.jpg',
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
            'img/espresso.jpg'
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
            'img/raspberry-jelly.jpg'
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
            'img/ribbon.jpg'
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
            'img/toast.jpg'
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
            'img/peach-pit.jpg'
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
            'img/juava-spritz.jpg'
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
            'img/vanilla.jpg'
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
            'img/rosewood-nights.jpg'
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
            'img/soft-mauve.jpg'
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
            'img/pinkcloud.jpg'
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
            'img/blush-dreams.jpg'
        ],
        description: '',
        available: true,
        discount: false
    },


    {
        id: 13,
        name: 'Rare beauty - Enlighten',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/enlighten.jpg'
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
        price: 200,
        originalPrice: null,
        images: [
            'img/mesmerize.jpg'
        ],
        description: '',
        available: true
    },
    {
        id: 15,
        name: 'Rare beauty - Exhilrate',
        category: 'makeup',
        price: 200,
        originalPrice: null,
        images: [
            'img/exhilrate.jpg'
        ],
        description: '',
        available: true,
        featured: true
    },
    {
        id: 16,
        name: 'Lipstick - Tint',
        category: 'makeup',
        price: 2800,
        originalPrice: null,
        images: [
            'img/tint.jpg'
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
            'img/encourage.jpg'
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
            'img/hope.jpg'
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
            'img/happy.jpg'
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
            'img/bliss.jpg'
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
            'img/mascara.jpg'
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
            'img/eyebrows-pen.jpg'
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
            'img/toasted-teddy.jpg'
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
            'img/freckle.jpg'
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
            'img/juice-box.jpg'
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
            'img/spicy-marg.jpg'
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
            'img/sleepy-girl.jpg'
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
            'img/piggy.jpg'
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
            'img/gelgot2b.jpg'
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
            'img/vaseline.jpg'
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
            'img/pack-daily-scent.jpg'
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
            'img/dove-deodorant.jpg'
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
            'img/venus-gillette.jpg'
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
            'img/romantic.jpg'
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
            'img/coconut-passion.jpg'
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
            'img/rush.jpg'
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
            'img/aqua-kiss.jpg'
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
            'img/amber-romance.jpg'
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
            'img/sol-de-janeiro62.jpg'
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
            'img/sol-de-janeiro87.jpg'
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
            'img/sol-de-janeiro40.jpg'
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
            'img/sol-de-janeiro59.jpg'
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
            'img/sol-de-janeiro71.jpg'
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
            'img/sol-de-janeiro48.jpg'
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
            'img/sol-de-janeiro39.jpg'
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
            'img/yara.jpg'
        ],
        description: '',
        available: true,
        discount: false
    },
    {
        id: 46,
        name: 'Perfume oil - سفير الحب',
        category: 'perfumes',
        price: 150,
        originalPrice: null,
        images: [
            'img/sefirlhoub.jpg'
        ],
        description: '',
        available: true,
        discount: false
    },



];