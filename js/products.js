// Products Data with multiple images and availability
const products = [
    // lip
    {
        id: 1,
        name: 'lip gloss rhode',
        category: 'lip',
        price: 100,
        // originalPrice: 4500, //
        images: [
            'img/lip_gloss_rhode.jpg',
            'img/lip_gloss_rhode1.jpg',
            'img/lip_gloss_rhode2.jpg'
        ],
        description: 'lips gloss',
        available: false,
        featured: true,
        //  discount: true //
    },
    {
        id: 2,
        name: 'rare',
        category: 'lip',
        price: 2800,
        originalPrice: 3200,
        images: [
            'img/makiage.jpg',
            'img/victoria.jpg'
        ],
        description: 'udcwcnncnu',
        available: true,
        featured: true
    },
    {
        id: 3,
        name: 'beauty',
        category: 'lip',
        price: 2500,
        originalPrice: null,
        images: [
            'img/bath.jpg',
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=700&fit=crop'
        ],
        description: 'فستان صيفي خفيف وأنيق، مثالي للأيام الحارة. مصنوع من قماش قطني يسمح بالتهوية.',
        available: true,
        featured: true
    },
    {
        id: 4,
        name: 'fashion',
        category: 'lip',
        price: 4200,
        originalPrice: 5500,
        images: [
            'img/rare_beauty.jpg',
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=700&fit=crop'
        ],
        description: 'فستان طويل فخم بتصميم راقي، يناسب المناسبات الرسمية والاحتفالات الكبرى.',
        available: true,
        discount: true
    },

    // blush
    {
        id: 5,
        name: 'حقيبة يد جلدية',
        category: 'blush',
        price: 2200,
        originalPrice: 2800,
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop'
        ],
        description: 'حقيبة يد جلدية فاخرة بتصميم عملي وأنيق. مثالية للاستخدام اليومي وتتسع لجميع احتياجاتك.',
        available: true,
        featured: true,
        discount: true
    },
    {
        id: 6,
        name: 'حقيبة كلاتش أنيقة',
        category: 'blush',
        price: 1800,
        originalPrice: null,
        images: [
            'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=700&fit=crop'
        ],
        description: 'حقيبة كلاتش أنيقة صغيرة الحجم، مثالية للسهرات والمناسبات الخاصة.',
        available: true
    },
    {
        id: 7,
        name: 'حقيبة عملية كبيرة',
        category: 'blush',
        price: 3000,
        originalPrice: 3800,
        images: [
            'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop'
        ],
        description: 'حقيبة عملية كبيرة الحجم مثالية للعمل والسفر. تحتوي على عدة جيوب للتنظيم.',
        available: true,
        featured: true
    },
    {
        id: 8,
        name: 'حقيبة كروس صغيرة',
        category: 'blush',
        price: 1600,
        originalPrice: 2000,
        images: [
            'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=700&fit=crop'
        ],
        description: 'حقيبة كروس صغيرة عملية وعصرية، خفيفة الوزن ومريحة للحمل.',
        available: true,
        discount: true
    },

    // perfumes
    {
        id: 9,
        name: 'كعب عالي كلاسيكي',
        category: 'perfumes',
        price: 2500,
        originalPrice: 3000,
        images: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=700&fit=crop'
        ],
        description: 'كعب عالي كلاسيكي أنيق يناسب جميع المناسبات. مريح للقدم رغم ارتفاعه.',
        available: true,
        featured: true,
        discount: true
    },
    {
        id: 10,
        name: 'صندل صيفي مريح',
        category: 'perfumes',
        price: 1500,
        originalPrice: null,
        images: [
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=700&fit=crop'
        ],
        description: 'صندل صيفي مريح وخفيف، مثالي للأيام الحارة والنزهات الشاطئية.',
        available: true
    },
    {
        id: 11,
        name: 'حذاء رياضي عصري',
        category: 'perfumes',
        price: 2200,
        originalPrice: null,
        images: [
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=700&fit=crop'
        ],
        description: 'حذاء رياضي عصري مريح للمشي والرياضة. يجمع بين الأناقة والراحة.',
        available: true,
        featured: true
    },
    {
        id: 12,
        name: 'بوت جلد طويل',
        category: 'perfumes',
        price: 3500,
        originalPrice: 4200,
        images: [
            'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=700&fit=crop'
        ],
        description: 'بوت جلد طويل فاخر، مثالي للطقس البارد والإطلالات الشتوية الأنيقة.',
        available: true,
        discount: true
    },

    // bath
    {
        id: 13,
        name: 'قلادة ذهبية فاخرة',
        category: 'bath',
        price: 1800,
        originalPrice: 2200,
        images: [
            'img/ring.webp',
            'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=700&fit=crop'
        ],
        description: 'قلادة ذهبية فاخرة بتصميم راقي، تضيف لمسة من الأناقة لأي إطلالة.',
        available: true,
        featured: true,
        discount: true
    },
    {
        id: 14,
        name: 'أساور مجموعة',
        category: 'bath',
        price: 1200,
        originalPrice: null,
        images: [
            'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=700&fit=crop'
        ],
        description: 'مجموعة أساور أنيقة يمكن ارتداؤها معاً أو بشكل منفصل.',
        available: true
    },
    {
        id: 15,
        name: 'نظارة شمسية عصرية',
        category: 'bath',
        price: 1000,
        originalPrice: null,
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=700&fit=crop'
        ],
        description: 'نظارة شمسية عصرية توفر حماية ممتازة من الشمس مع إطلالة أنيقة.',
        available: true,
        featured: true
    },
    {
        id: 16,
        name: 'ساعة يد أنيقة',
        category: 'bath',
        price: 2800,
        originalPrice: 3500,
        images: [
            'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=700&fit=crop'
        ],
        description: 'ساعة يد أنيقة بتصميم كلاسيكي عصري، تناسب جميع الإطلالات.',
        available: true,
        discount: true
    },

    // lip oil
    {
        id: 17,
        name: 'عطر فرنسي فاخر',
        category: 'lipoil',
        price: 4500,
        originalPrice: 5500,
        images: [
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=700&fit=crop'
        ],
        description: 'عطر فرنسي فاخر برائحة مميزة وثبات طويل. مثالي للمناسبات الخاصة.',
        available: true,
        featured: true,
        discount: true
    },
    {
        id: 18,
        name: 'عطر زهري منعش',
        category: 'lipoil',
        price: 3200,
        originalPrice: null,
        images: [
            'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop'
        ],
        description: 'عطر زهري منعش برائحة خفيفة ومنعشة، مثالي للاستخدام اليومي.',
        available: true
    },
    {
        id: 19,
        name: 'عطر شرقي أصيل',
        category: 'lipoil',
        price: 3800,
        originalPrice: null,
        images: [
            'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=700&fit=crop'
        ],
        description: 'عطر شرقي أصيل برائحة دافئة وغنية، يعكس التراث العربي الأصيل.',
        available: true,
        featured: true
    },
    {
        id: 20,
        name: 'عطر ليلي ساحر',
        category: 'lipoil',
        price: 4000,
        //originalPrice: 4800, /
        images: [
            'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=700&fit=crop',
            'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&h=700&fit=crop'
        ],
        description: 'عطر ليلي ساحر برائحة جذابة ومثيرة، مثالي للسهرات والمناسبات المسائية.',
        available: true,
        discount: true
    }
];