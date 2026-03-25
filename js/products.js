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
        description: ``,
        available: true,
        featured: false,
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
        description: ``,
        available: true,
        featured: false
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
        description: ``,
        available: true,
        featured: false
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
        description: ``,
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
        description: ``,
        available: true,
        featured: false,
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
        description: ``,
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
        description: ``,
        available: true,
        featured: false
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
        description: ``,
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
        description: ``,
        available: true,
        featured: false,
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
        description: ``,
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
        description: ``,
        available: true,
        featured: false
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
        available: true,
        featured: false
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
        description: ``,
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
        description: ``,
        available: true,
        featured: false,
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
        description: ``,
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
        description: ``,
        available: true,
        featured: false
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
        available: false,
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
        description: ``,
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
        description: ``,
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
        description: ``,
        available: true,
        discount: false
    },
    {
        id: 58,
        name: 'Biodance',
        category: 'skincare',
        price: 300,
        originalPrice: null,
        images: [
            'img/biodance.JPG'
        ],
        description: `ماسك كوري مخصص لترطيب البشرة بعمق وتحسين مرونتها. يحتوي على مكونات نشطة تساعد على تغذية الجلد ومنحه مظهرًا أكثر امتلاءً ونضارة.

المكونات البارزة:
 • كولاجين منخفض الجزيئات: يساعد على شد البشرة وتحسين مرونتها.
 • حمض الهيالورونيك منخفض الجزيئات: يرطب البشرة بعمق ويحافظ على الماء داخل الجلد.
 • Galactomyces Ferment (بروبيوتيك): يدعم صحة البشرة ويمنحها إشراقة ويُحسّن مظهر المسام.

الفوائد الأساسية:
 • ترطيب قوي للبشرة
 • تقليل مظهر المسام
 • شد وتحسين مرونة الجلد
 • يمنح البشرة مظهرًا ناعمًا وممتلئًا

طريقة الاستخدام:
 1. ضعي الماسك على بشرة نظيفة بعد التونر.
 2. اتركيه حوالي 4 ساعات حتى ينشف.
 3. أزيليه ودلّكي السيروم المتبقي حتى تمتصه البشرة.

الحجم: 34 غرام`,
        available: true,
        discount: false
    },
    {
        id: 59,
        name: 'Sachet hydrocolloid',
        category: 'skincare',
        price: 50,
        originalPrice: null,
        images: [
            'img/hydrocolloid.JPG'
        ],
        description: `Hydrocolloid مضاف لها:
 • Salicylic Acid (حمض الساليسيليك)
 • Tea essence (غالباً زيت شجرة الشاي)
 • وظيفتها:
 • امتصاص السوائل مثل الأولى.
 • تعالج الحبة كيميائياً بتقليل الالتهاب وتنظيف المسام.
 • أفضل للحبوب الملتهبة أو التي لم تفتح بعد`,
        available: true,
        discount: false
    },
    {
        id: 60,
        name: 'Sachet',
        category: 'skincare',
        price: 50,
        originalPrice: null,
        images: [
            'img/sachet.JPG'
        ],
        description: `تعمل مثل ضمادة تمتص السوائل من الحبة.
 • وظيفتها:
 • تمتص القيح والزيوت من الحبة.
 • تحمي الحبة من اللمس والبكتيريا.
 • تساعدها تجف أسرع.
 • أفضل للحبوب المفتوحة أو التي فيها رأس أبيض.
 • عادة تكون لطيفة على البشرة الحساسة.`,
        available: true,
        discount: false
    },
    {
        id: 69,
        name: 'Vaseline original',
        category: 'skincare',
        price: 200,
        originalPrice: null,
        images: [
            'img/Vaselineoriginal.JPG'
        ],
        description: ``,
        available: true,
        discount: false
    },
    {
        id: 70,
        name: 'Vaseline - cacao butter',
        category: 'skincare',
        price: 200,
        originalPrice: null,
        images: [
            'img/cacaobutter.JPG'
        ],
        description: ``,
        available: true,
        discount: false
    },



    // perfumes
    {
        id: 71,
        name: 'Miss arrogate - من عساف',
        category: 'perfumes',
        price: 2000,
        originalPrice: null,
        images: [
            'img/missarrogate.JPG'
        ],
        description: ``,
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 36,
        name: 'Pack daily scent',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/pack-daily-scent.JPG'
        ],
        description: ``,
        available: true,
        discount: false
    },


    {
        id: 31,
        name: 'Victoria`s secret - Romantic',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/romantic.JPG'
        ],
        description: ``,
        available: false,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
        available: false,
        discount: false
    },
    {
        id: 56,
        name: 'Victoria`s secret - Velvet petals',
        category: 'perfumes',
        price: 600,
        originalPrice: null,
        images: [
            'img/velvetpetals.JPG'
        ],
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
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
        description: ``,
        available: false,
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
        description: ``,
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
        description: ``,
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
        description: ``,
        available: true,
        discount: false
    },
    {
        id: 57,
        name: 'Perfume oil - روز باريس',
        category: 'perfumes',
        price: 150,
        originalPrice: null,
        images: [
            'img/roseparis.JPG'
        ],
        description: ``,
        available: true,
        discount: false
    },






    /* discount */

    {
        id: 49,
        name: 'Perfume set with hair clip',
        category: null,
        price: 800,
        originalPrice: 1000,
        images: [
            'img/perfumesetwith.JPG'
        ],
        description: ``,
        available: true,
        discount: true
    },
    /*{
        id: 50,
        name: 'Eyebrows set',
        category: null,
        price: 350,
        originalPrice: 400,
        images: [
            'img/eyebrowsset.JPG'
        ],
        description: ``,
        available: true,
        discount: true
    }, */
    {
        id: 51,
        name: 'Perfume set with sleeping mask',
        category: null,
        price: 800,
        originalPrice: 1000,
        images: [
            'img/perfumesetwithmask.JPG'
        ],
        description: ``,
        available: true,
        discount: true
    },
    /*  {
         id: 52,
         name: 'Perfume set with tint kiko',
         category: null,
         price: 800,
         originalPrice: 1050,
         images: [
             'img/Perfumewithtint.JPG'
         ],
         description: ``,
         available: true,
         discount: true
     },*/
    {
        id: 53,
        name: 'Perfume set with hair clip',
        category: null,
        price: 800,
        originalPrice: 1000,
        images: [
            'img/perfumehairclip.JPG'
        ],
        description: ``,
        available: true,
        discount: true
    },
   /* {
        id: 54,
        name: 'Cleaning set with perfume sol de janeiro',
        category: null,
        price: 850,
        originalPrice: 1050,
        images: [
            'img/cleaningsetwithjaneiro.JPG'
        ],
        description: ``,
        available: true,
        discount: true
    },  */
    {
        id: 55,
        name: 'Rhode set',
        category: null,
        price: 800,
        originalPrice: 1000,
        images: [
            'img/rhodeset.JPG'
        ],
        description: ``,
        available: true,
        discount: true
    },


    /*--------NEW-------- */

    {
        id: 61,
        name: 'Madagascar Centella',
        category: '',
        price: 1100,
        originalPrice: null,
        images: [
            'img/MadagascarCentella.JPG'
        ],
        description: ` هي المجموعة الأساسية والمهدئة للبشرة. تركز على إصلاح الحاجز الواقي وعلاج الاحمرار والتحسس.
الوظيفة: ترطيب، تهدئة، وإصلاح.

المكون الأساسي: مستخلص السنتيلا أسياتيكا النقي.

مناسبة لـ: جميع أنواع البشرة، خاصة الحساسة والمتضررة.`,
        available: false,
        featured: true,
        discount: false
    },
    {
        id: 62,
        name: 'Tea-Trica (لحب الشباب)',
        category: null,
        price: 1100,
        originalPrice: null,
        images: [
            'img/Tea-Trica.JPG'
        ],
        description: ` مجموعة متخصصة في العناية بالبشرة التي تعاني من البثور والتهيج المفاجئ.
الوظيفة: التحكم في الدهون، تهدئة حب الشباب، وتنقية المسام.
المكون الأساسي: مزيج من شجرة الشاي وسنتيلا أسياتيكا (تريكا).
مناسبة لـ: البشرة الدهنية والمعرضة لحب الشباب.
`,
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 63,
        name: 'Poremizing (للمسام)',
        category: null,
        price: 1100,
        originalPrice: null,
        images: [
            'img/Poremizing.JPG'
        ],
        description: `تركز هذه المجموعة على تحسين مظهر المسام الواسعة وتنظيفها 
بعمق.
الوظيفة: شد المسام، إزالة الرؤوس السوداء، وتحسين ملمس الجلد.
المكون الأساسي: ملح الهيمالايا الوردي.
مناسبة لـ: البشرة الدهنية والمختلطة التي تعاني من مسام بارزة.
`,
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 64,
        name: 'Hyalu-Cica (للترطيب الفائق)',
        category: null,
        price: 1100,
        originalPrice: null,
        images: [
            'img/Hyalu-Cica.JPG'
        ],
        description: `مجموعة مخصصة للبشرة التي تعاني من الجفاف وفقدان الحيوية.
الوظيفة: ترطيب عميق، منع فقدان الماء، وإعطاء لمعة صحية.
المكون الأساسي: مزيج من حمض الهيالورونيك والسنتيلا.
مناسبة لـ: البشرة الجافة والبشرة الباهتة.
`,
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 65,
        name: 'Tone Brightening (للتفتيح)',
        category: null,
        price: 1100,
        originalPrice: null,
        images: [
            'img/ToneBrightening.JPG'
        ],
        description: `تعمل هذه المجموعة على توحيد لون البشرة والتخلص من التصبغات وآثار الحبوب.
الوظيفة: تفتيح البقع الداكنة، توحيد لون البشرة، وإعطاء إشراقة.
المكون الأساسي: مادة "ماديكاسوسايد" والنياسيناميد.
مناسبة لـ: البشرة التي تعاني من التصبغات والبهتان.`,
        available: false,
        featured: true,
        discount: false
    },
    {
        id: 66,
        name: 'Purito - Best Kit',
        category: null,
        price: 1100,
        originalPrice: null,
        images: [
            'img/PuritoBest.JPG'
        ],
        description: `علامة "بوريتو" تركز على المكونات النظيفة والآمنة لتقوية حاجز البشرة.
الوظيفة: تغذية البشرة، تقوية الحاجز الطبيعي، وتوفير عناية يومية متوازنة.
المكون الأساسي: البانثينول، السنتيلا،
ومستخلصات نباتية مهدئة.
مناسبة لـ: البشرة الحساسة والتي تحتاج إلى تغذية عميقة.
`,
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 67,
        name: 'Brightening Facial Scrub (ACURE)',
        category: null,
        price: 700,
        originalPrice: null,
        images: [
            'img/Brightening.JPG'
        ],
        description: ` واحد من أشهر المقشرات الفيزيائية عالمياً وحاصل على عدة جوائز بفضل تركيبته الفعالة والنباتية.
إليكِ كل ما تحتاجين معرفته عنه:
1. وظيفة المنتج الأساسية
يعمل هذا المقشر على إزالة خلايا الجلد الميتة والشوائب العالقة في المسام، مما يساعد في تحويل البشرة من باهتة ومجهدة إلى بشرة أكثر إشراقاً ونعومة.
2. المكونات الرئيسية
• عشب البحر (Sea Kelp): غني بالمعادن التي تنقي البشرة وتغذيها.
• الطين الأخضر الفرنسي (French Green Clay): يعمل كالمغناطيس لسحب الدهون والشوائب من داخل المسام.
• قشور الليمون وقصب السكر: توفر تقشيراً لطيفاً وتساعد في تفتيح لون البشرة.
• خلايا جذعية من مريمية ليلية: توفر حماية ومضادات أكسدة للبشرة.
3. المميزات
• نباتي 100% (Vegan): خالٍ من القسوة ولا يحتوي على مكونات حيوانية.
• نظيف (Clean Beauty): خالٍ من البارابين، الكبريتات، الفتالات، والزيوت المعدنية.
• نتائج فورية: ستلاحظين نعومة واضحة في ملمس الجلد بعد أول استخدام.
`,
        available: true,
        featured: true,
        discount: false
    },
    {
        id: 68,
        name: 'Gluta Collagen Pin',
        category: null,
        price: 850,
        originalPrice: null,
        images: [
            'img/GlutaCollagenPin.JPG'
        ],
        description: `يجمع المنتج بين عدة عناصر مشهورة في عالم التجميل:
• الجلوتاثيون (Gluta): يُعرف بدوره كمضاد للأكسدة قوي، ويُستخدم غالباً بهدف تفتيح لون البشرة وتوحيدها.
• الكولاجين (Collagen): تحديداً "Collagen Dipeptide" (كما هو موضح بجانب العلم الياباني)، وهو نوع سهل الامتصاص يساعد في مرونة البشرة وتقليل التجاعيد.
• مستخلصات الفواكه الحمراء: يحتوي على صور للطماطم، الفراولة، التوت، والكرز (Acerola Cherry)، وهي مصادر غنية بـ فيتامين C الذي يعزز امتصاص الكولاجين ويحمي البشرة من الإجهاد التأكسدي.
تفاصيل العبوة
• الكمية: تحتوي الحقيبة على 30 ظرفاً (Sachet)، وزن كل ظرف 10 جرام.`,
        available: true,
        featured: true,
        discount: false
    },





];

