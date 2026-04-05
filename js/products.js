// Product Data for Yoursy Store
// Pink Rose Theme - All Products with Variants

const productsData = [
    // ============ MAKEUP - LIP GLOSS (منتج رئيسي مع متغيرات) ============
    {
        id: "lipgloss_collection",
        name: { ar: "Lip Balm Rhode", fr: "Lip Balm Rhode", en: "Lip Balm Rhode" },
        price: 200,
        originalPrice: null,
        image: "img/lipbalmrhode.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "lipgloss_saltytan", name: { ar: "Salty Tan", fr: "Salty Tan", en: "Salty Tan" }, price: 200, image: "img/salty-tan.JPG", inStock: true },
            { id: "lipgloss_espresso", name: { ar: "Espresso", fr: "Espresso", en: "Espresso" }, price: 200, image: "img/espresso.JPG", inStock: true },
            { id: "lipgloss_raspberry", name: { ar: "Raspberry Jelly", fr: "Raspberry Jelly", en: "Raspberry Jelly" }, price: 200, image: "img/raspberry-jelly.JPG", inStock: true },
            { id: "lipgloss_ribbon", name: { ar: "Ribbon", fr: "Ribbon", en: "Ribbon" }, price: 200, image: "img/ribbon.JPG", inStock: true },
            { id: "lipgloss_toast", name: { ar: "Toast", fr: "Toast", en: "Toast" }, price: 200, image: "img/toast.JPG", inStock: true },
            { id: "lipgloss_peachpit", name: { ar: "Peach Pit", fr: "Peach Pit", en: "Peach Pit" }, price: 200, image: "img/peach-pit.JPG", inStock: true },
            { id: "lipgloss_juava", name: { ar: "Juava Spritz", fr: "Juava Spritz", en: "Juava Spritz" }, price: 200, image: "img/juava-spritz.JPG", inStock: true },
            { id: "lipgloss_vanilla", name: { ar: "Vanilla", fr: "Vanilla", en: "Vanilla" }, price: 200, image: "img/vanilla.JPG", inStock: true }
        ]
    },
    {
        id: "summer_fridays_collection",
        name: { ar: "Summer Fridays", fr: "Summer Fridays", en: "Summer Fridays" },
        price: 200,
        originalPrice: null,
        image: "img/summerfridaysbeauty.PNG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "summer_rosewood", name: { ar: "Rosewood Nights", fr: "Rosewood Nights", en: "Rosewood Nights" }, price: 200, image: "img/rosewood-nights.JPG", inStock: false },
            { id: "summer_softmauve", name: { ar: "Soft Mauve", fr: "Soft Mauve", en: "Soft Mauve" }, price: 200, image: "img/soft-mauve.JPG", inStock: true },
            { id: "summer_pinkcloud", name: { ar: "Pink Cloud", fr: "Pink Cloud", en: "Pink Cloud" }, price: 200, image: "img/pinkcloud.JPG", inStock: true },
            { id: "summer_blushdreams", name: { ar: "Blush Dreams", fr: "Blush Dreams", en: "Blush Dreams" }, price: 200, image: "img/blush-dreams.JPG", inStock: true }
        ]
    },
    {
        id: "rare_beauty_collection",
        name: { ar: "Highlighter Rare Beauty", fr: "Highlighter Rare Beauty", en: "Highlighter Rare Beauty" },
        price: 300,
        originalPrice: null,
        image: "img/highlighterrarebeauty.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "rare_enlighten", name: { ar: "Enlighten", fr: "Enlighten", en: "Enlighten" }, price: 300, image: "img/enlighten.JPG", inStock: true },
            { id: "rare_mesmerize", name: { ar: "Mesmerize", fr: "Mesmerize", en: "Mesmerize" }, price: 300, image: "img/mesmerize.JPG", inStock: true },
            { id: "rare_exhilrate", name: { ar: "Exhilrate", fr: "Exhilrate", en: "Exhilrate" }, price: 300, image: "img/exhilrate.JPG", inStock: true }
        ]
    },
    {
        id: "blush_collection",
        name: { ar: "Rare Beauty Blush", fr: "Rare Beauty Blush", en: "Rare Beauty Blush" },
        price: 200,
        originalPrice: null,
        image: "img/rarebeautyblushes.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "blush_encourage", name: { ar: "Encourage", fr: "Encourage", en: "Encourage" }, price: 200, image: "img/encourage.JPG", inStock: true },
            { id: "blush_hope", name: { ar: "Hope", fr: "Hope", en: "Hope" }, price: 200, image: "img/hope.JPG", inStock: true },
            { id: "blush_happy", name: { ar: "Happy", fr: "Happy", en: "Happy" }, price: 200, image: "img/happy.JPG", inStock: true },
            { id: "blush_bliss", name: { ar: "Bliss", fr: "Bliss", en: "Bliss" }, price: 200, image: "img/bliss.JPG", inStock: true },
        ]
    },
    {
        id: "rhode_collection",
        name: { ar: "Rhode Blush", fr: "Rhode Blush", en: "Rhode Blush" },
        price: 200,
        originalPrice: null,
        image: "img/blushrhodes.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "blush_toastedteddy", name: { ar: "Toasted Teddy", fr: "Toasted Teddy", en: "Toasted Teddy" }, price: 200, image: "img/toasted-teddy.JPG", inStock: true },
            { id: "blush_freckle", name: { ar: "Freckle", fr: "Freckle", en: "Freckle" }, price: 200, image: "img/freckle.JPG", inStock: true },
            { id: "blush_juicebox", name: { ar: "Juice Box", fr: "Juice Box", en: "Juice Box" }, price: 200, image: "img/juice-box.JPG", inStock: true },
            { id: "blush_spicymarg", name: { ar: "Spicy Marg", fr: "Spicy Marg", en: "Spicy Marg" }, price: 200, image: "img/spicy-marg.JPG", inStock: true },
            { id: "blush_sleepygirl", name: { ar: "Sleepy Girl", fr: "Sleepy Girl", en: "Sleepy Girl" }, price: 200, image: "img/sleepy-girl.JPG", inStock: true },
            { id: "blush_piggy", name: { ar: "Piggy", fr: "Piggy", en: "Piggy" }, price: 200, image: "img/piggy.JPG", inStock: true }
        ]
    },
    {
        id: "vs_collection",
        name: { ar: "Victoria's Secret", fr: "Victoria's Secret", en: "Victoria's Secret" },
        price: 600,
        originalPrice: null,
        image: "img/romantic.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "vs_romantic", name: { ar: "Romantic", fr: "Romantic", en: "Romantic" }, price: 600, image: "img/romantic.JPG", inStock: true },
            { id: "vs_coconut", name: { ar: "Coconut Passion", fr: "Coconut Passion", en: "Coconut Passion" }, price: 600, image: "img/coconut-passion.JPG", inStock: true },
            { id: "vs_rush", name: { ar: "Rush", fr: "Rush", en: "Rush" }, price: 600, image: "img/rush.JPG", inStock: false },
            { id: "vs_aquakiss", name: { ar: "Aqua Kiss", fr: "Aqua Kiss", en: "Aqua Kiss" }, price: 600, image: "img/aqua-kiss.JPG", inStock: true },
            { id: "vs_amber", name: { ar: "Amber Romance", fr: "Amber Romance", en: "Amber Romance" }, price: 600, image: "img/amber-romance.JPG", inStock: false },
            { id: "vs_velvet", name: { ar: "Velvet Petals", fr: "Velvet Petals", en: "Velvet Petals" }, price: 600, image: "img/velvetpetals.JPG", inStock: true }
        ]
    },
    {
        id: "sol_collection",
        name: { ar: "Sol de Janeiro", fr: "Sol de Janeiro", en: "Sol de Janeiro" },
        price: 300,
        originalPrice: null,
        image: "img/sol-de-janeiro62.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "sol_62", name: { ar: "62", fr: "62", en: "62" }, price: 300, image: "img/sol-de-janeiro62.JPG", inStock: true },
            { id: "sol_87", name: { ar: "87", fr: "87", en: "87" }, price: 300, image: "img/sol-de-janeiro87.JPG", inStock: true },
            { id: "sol_40", name: { ar: "40", fr: "40", en: "40" }, price: 300, image: "img/sol-de-janeiro40.JPG", inStock: true },
            { id: "sol_59", name: { ar: "59", fr: "59", en: "59" }, price: 300, image: "img/sol-de-janeiro59.JPG", inStock: true },
            { id: "sol_71", name: { ar: "71", fr: "71", en: "71" }, price: 300, image: "img/sol-de-janeiro71.JPG", inStock: true },
            { id: "sol_48", name: { ar: "48", fr: "48", en: "48" }, price: 300, image: "img/sol-de-janeiro48.JPG", inStock: true },
            { id: "sol_39", name: { ar: "39", fr: "39", en: "39" }, price: 300, image: "img/sol-de-janeiro39.JPG", inStock: false }
        ]
    },
    {
        id: "oil_collection",
        name: { ar: "Perfume Oil", fr: "Perfume Oil", en: "Perfume Oil" },
        price: 150,
        originalPrice: null,
        image: "img/yara.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "oil_yara", name: { ar: "يارا", fr: "Yara", en: "Yara" }, price: 150, image: "img/yara.JPG", inStock: true },
            { id: "oil_sefirlhoub", name: { ar: "سفير الحب", fr: "Sefir El Houb", en: "Sefir El Houb" }, price: 150, image: "img/sefirlhoub.JPG", inStock: true },
            { id: "oil_mousouf", name: { ar: "موصوف", fr: "Mousouf", en: "Mousouf" }, price: 150, image: "img/mousouf.JPG", inStock: true },
            { id: "oil_roseparis", name: { ar: "روز باريس", fr: "Rose Paris", en: "Rose Paris" }, price: 150, image: "img/roseparis.JPG", inStock: true }
        ]
    },
    {
        id: "vaseline",
        name: { ar: "Vaseline Lip Balm", fr: "Vaseline Lip Balm", en: "Vaseline Lip Balm" },
        price: 200,
        originalPrice: null,
        image: "img/lipbalmvaseline.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "vaseline_original", name: { ar: "Original", fr: "Original", en: "Original" }, price: 200, image: "img/Vaselineoriginal.JPG", inStock: true },
            { id: "vaseline_cacaobutter", name: { ar: "Cacao Butter", fr: "Cacao Butter", en: "Cacao Butter" }, price: 200, image: "img/cacaobutter.JPG", inStock: true },
            { id: "vaseline_rosylips", name: { ar: "Rosy Lips", fr: "Rosy Lips", en: "Rosy Lips" }, price: 200, image: "img/vaseline.JPG", inStock: true }
        ]
    },

    // ============ SKIN CARE PRODUCTS ============
    {
        id: "mascara_waterprof",
        name: { ar: "Mascara waterproof", fr: "Mascara waterproof", en: "Mascara waterproof" },
        price: 400,
        originalPrice: null,
        image: "img/mascarawaterproof.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: true
    },
    {
        id: "mini_setmusk",
        name: { ar: "Set Musk Ibraq", fr: "Set Musk Ibraq", en: "Set Musk Ibraq" },
        price: 1400,
        originalPrice: null,
        image: "img/minisetmuskibraq.JPG",
        category: "perfumes",
        description: { ar: "حجم الزجاجة:30ml", fr: "Falcon de 30ml", en: "30ml bottle" },
        inStock: true,
        isNew: true
    },
    {
        id: "body_butterglow",
        name: { ar: "In The Night", fr: "In The Night", en: "In The Night" },
        price: 900,
        originalPrice: null,
        image: "img/intonight.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: true
    },
    {
        id: "body_butterglowstar",
        name: { ar: "In The Stars", fr: "In The Stars", en: "In The Stars" },
        price: 900,
        originalPrice: null,
        image: "img/intostar.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: true
    },
    {
        id: "clear_butt_cream",
        name: { ar: "Clear Butt Cream", fr: "Clear Butt Cream", en: "Clear Butt Cream" },
        price: 650,
        originalPrice: null,
        image: "img/ClearButtCream.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: true
    },
    {
        id: "disques_coton",
        name: { ar: "Disques Coton Demaquiller", fr: "Disques Coton Demaquiller", en: "Disques Coton Demaquiller" },
        price: 200,
        originalPrice: null,
        image: "img/DisquesCotonDemaquiller.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: true
    },
    {
        id: "clean_yourskin",
        name: { ar: "Clean Your Skin", fr: "Clean Your Skin", en: "Clean Your Skin" },
        price: 350,
        originalPrice: null,
        image: "img/Cleanyourskin.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: true
    },
    {
        id: "dove_deodorant",
        name: { ar: "Dove Deodorant", fr: "Dove Deodorant", en: "Dove Deodorant" },
        price: 250,
        originalPrice: null,
        image: "img/dove-deodorant.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "venus_gillette",
        name: { ar: "Venus Gillette", fr: "Venus Gillette", en: "Venus Gillette" },
        price: 500,
        originalPrice: null,
        image: "img/venus-gillette.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "biodance",
        name: { ar: "Biodance", fr: "Biodance", en: "Biodance" },
        price: 300,
        originalPrice: null,
        image: "img/biodance.JPG",
        category: "skincare",
        description: {
            ar: "ماسك كوري مخصص لترطيب البشرة بعمق وتحسين مرونتها. يحتوي على مكونات نشطة تساعد على تغذية الجلد ومنحه مظهرًا أكثر امتلاءً ونضارة.\n\nالمكونات البارزة:\n• كولاجين منخفض الجزيئات: يساعد على شد البشرة وتحسين مرونتها.\n• حمض الهيالورونيك منخفض الجزيئات: يرطب البشرة بعمق ويحافظ على الماء داخل الجلد.\n• Galactomyces Ferment (بروبيوتيك): يدعم صحة البشرة ويمنحها إشراقة ويُحسّن مظهر المسام.\n\nالفوائد الأساسية:\n• ترطيب قوي للبشرة\n• تقليل مظهر المسام\n• شد وتحسين مرونة الجلد\n• يمنح البشرة مظهرًا ناعمًا وممتلئًا\n\nطريقة الاستخدام:\n1. ضعي الماسك على بشرة نظيفة بعد التونر.\n2. اتركيه حوالي 4 ساعات حتى ينشف.\n3. أزيليه ودلّكي السيروم المتبقي حتى تمتصه البشرة.\n\nالحجم: 34 غرام",
            fr: "Masque coréen spécialement conçu pour hydrater la peau en profondeur et améliorer son élasticité. Il contient des ingrédients actifs qui aident à nourrir la peau et à lui donner un aspect plus rebondi et plus éclatant.\n\nIngrédients phares:\n• Collagène bas poids moléculaire : aide à raffermir la peau et à améliorer son élasticité.\n• Acide hyaluronique bas poids moléculaire : hydrate la peau en profondeur et retient l'eau dans la peau.\n• Galactomyces Ferment (probiotique) : soutient la santé de la peau, lui donne de l'éclat et améliore l'apparence des pores.\n\nBienfaits principaux:\n• Hydratation intense de la peau\n• Réduction de l'apparence des pores\n• Raffermissement et amélioration de l'élasticité de la peau\n• Donne à la peau un aspect doux et rebondi\n\nMode d'emploi:\n1. Appliquez le masque sur une peau propre après la lotion tonique.\n2. Laissez agir environ 4 heures jusqu'à ce qu'il sèche.\n3. Retirez-le et massez le sérum restant jusqu'à absorption complète.\n\nTaille : 34 grammes",
            en: "A Korean mask specially designed to deeply hydrate the skin and improve its elasticity. It contains active ingredients that help nourish the skin and give it a plumper, more radiant appearance.\n\nKey ingredients:\n• Low molecular weight collagen: helps firm the skin and improve its elasticity.\n• Low molecular weight hyaluronic acid: deeply hydrates the skin and retains water inside the skin.\n• Galactomyces Ferment (probiotic): supports skin health, gives it radiance, and improves the appearance of pores.\n\nMain benefits:\n• Intense skin hydration\n• Reduction in the appearance of pores\n• Firming and improving skin elasticity\n• Gives the skin a soft and plump appearance\n\nHow to use:\n1. Apply the mask to clean skin after toner.\n2. Leave on for about 4 hours until it dries.\n3. Remove it and massage the remaining serum until absorbed.\n\nSize: 34 grams"
        },
        inStock: true,
        isNew: false
    },
    {
        id: "hydrocolloid",
        name: { ar: "Sachet Hydrocolloid", fr: "Sachet Hydrocolloid", en: "Sachet Hydrocolloid" },
        price: 50,
        originalPrice: null,
        image: "img/hydrocolloid.JPG",
        category: "skincare",
        description: {
            ar: "تعمل مثل ضمادة تمتص السوائل من الحبة.\n\n• وظيفتها:\n• تمتص القيح والزيوت من الحبة.\n• تحمي الحبة من اللمس والبكتيريا.\n• تساعدها تجف أسرع.\n\n• أفضل للحبوب المفتوحة أو التي فيها رأس أبيض.\n\n• عادة تكون لطيفة على البشرة الحساسة.\n\nالمكونات:\n• Salicylic Acid (حمض الساليسيليك)\n• Tea essence (زيت شجرة الشاي)\n\n• وظيفتها الإضافية:\n• امتصاص السوائل مثل الأولى.\n• تعالج الحبة كيميائياً بتقليل الالتهاب وتنظيف المسام.\n\n• أفضل للحبوب الملتهبة أو التي لم تفتح بعد.",
            fr: "Fonctionne comme un pansement qui absorbe les liquides du bouton.\n\n• Sa fonction :\n• Absorbe le pus et les huiles du bouton.\n• Protège le bouton du toucher et des bactéries.\n• Aide à le sécher plus rapidement.\n\n• Idéal pour les boutons ouverts ou avec tête blanche.\n\n• Généralement doux pour les peaux sensibles.\n\nIngrédients :\n• Acide salicylique\n• Essence de thé (souvent huile d'arbre à thé)\n\n• Fonction supplémentaire :\n• Absorbe les liquides comme le premier.\n• Traite le bouton chimiquement en réduisant l'inflammation et en nettoyant les pores.\n\n• Idéal pour les boutons enflammés ou pas encore ouverts.",
            en: "Works like a bandage that absorbs fluids from the pimple.\n\n• Its function:\n• Absorbs pus and oils from the pimple.\n• Protects the pimple from touch and bacteria.\n• Helps it dry faster.\n\n• Best for open pimples or those with a white head.\n\n• Usually gentle on sensitive skin.\n\nIngredients:\n• Salicylic Acid\n• Tea essence (often tea tree oil)\n\n• Additional function:\n• Absorbs fluids like the first one.\n• Treats the pimple chemically by reducing inflammation and cleaning pores.\n\n• Best for inflamed pimples or those that haven't opened yet."
        },
        inStock: true,
        isNew: false
    },
    {
        id: "sachet",
        name: { ar: "Sachet", fr: "Sachet", en: "Sachet" },
        price: 50,
        originalPrice: null,
        image: "img/sachet.JPG",
        category: "skincare",
        description: {
            ar: "تعمل مثل ضمادة تمتص السوائل من الحبة.\n\n• وظيفتها:\n• تمتص القيح والزيوت من الحبة.\n• تحمي الحبة من اللمس والبكتيريا.\n• تساعدها تجف أسرع.\n\n• أفضل للحبوب المفتوحة أو التي فيها رأس أبيض.\n\n• عادة تكون لطيفة على البشرة الحساسة.",
            fr: "Fonctionne comme un pansement qui absorbe les liquides du bouton.\n\n• Sa fonction :\n• Absorbe le pus et les huiles du bouton.\n• Protège le bouton du toucher et des bactéries.\n• Aide à le sécher plus rapidement.\n\n• Idéal pour les boutons ouverts ou avec tête blanche.\n\n• Généralement doux pour les peaux sensibles.",
            en: "Works like a bandage that absorbs fluids from the pimple.\n\n• Its function:\n• Absorbs pus and oils from the pimple.\n• Protects the pimple from touch and bacteria.\n• Helps it dry faster.\n\n• Best for open pimples or those with a white head.\n\n• Usually gentle on sensitive skin."
        },
        inStock: true,
        isNew: false
    },

    // ============ INDIVIDUAL MAKEUP PRODUCTS ============
    {
        id: "mascara_curl",
        name: { ar: "Mascara curl and volume", fr: "Mascara curl and volume", en: "Mascara curl and volume" },
        price: 400,
        originalPrice: null,
        image: "img/mascaracurl.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: true
    },
    {
        id: "gel_got2b",
        name: { ar: "Gel Got2b", fr: "Gel Got2b", en: "Gel Got2b" },
        price: 320,
        originalPrice: null,
        image: "img/gelgot2b.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "lipstick_tint",
        name: { ar: "Lipstick Tint", fr: "Lipstick Tint", en: "Lipstick Tint" },
        price: 150,
        originalPrice: null,
        image: "img/tint.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "mascara",
        name: { ar: "Mascara", fr: "Mascara", en: "Mascara" },
        price: 400,
        originalPrice: null,
        image: "img/mascara.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "eyebrows_pen",
        name: { ar: "Eyebrows Pen", fr: "Eyebrows Pen", en: "Eyebrows Pen" },
        price: 150,
        originalPrice: null,
        image: "img/eyebrows-pen.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },

    // ============ INDIVIDUAL PERFUMES ============
    {
        id: "miss_arrogate",
        name: { ar: "Miss Arrogate", fr: "Miss Arrogate", en: "Miss Arrogate" },
        price: 2000,
        originalPrice: null,
        image: "img/missarrogate.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "pack_daily",
        name: { ar: "Pack Daily Scent", fr: "Pack Daily Scent", en: "Pack Daily Scent" },
        price: 600,
        originalPrice: null,
        image: "img/pack-daily-scent.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },

    // ============ NEW ARRIVALS (isNew: true) ============
    {
        id: "madagascar_centella",
        name: { ar: "Madagascar Centella", fr: "Madagascar Centella", en: "Madagascar Centella" },
        price: 1100,
        originalPrice: null,
        image: "img/MadagascarCentella.JPG",
        category: "skincare",
        description: {
            ar: "هي المجموعة الأساسية والمهدئة للبشرة. تركز على إصلاح الحاجز الواقي وعلاج الاحمرار والتحسس.\n\nالوظيفة: ترطيب، تهدئة، وإصلاح.\n\nالمكون الأساسي: مستخلص السنتيلا أسياتيكا النقي.\n\nمناسبة لـ: جميع أنواع البشرة، خاصة الحساسة والمتضررة.",
            fr: "C'est la gamme de base et apaisante pour la peau. Elle se concentre sur la réparation de la barrière cutanée et le traitement des rougeurs et des sensibilités.\n\nFonction : Hydrater, apaiser et réparer.\n\nIngrédient clé : Extrait pur de centella asiatica.\n\nConvient à : Tous les types de peau, surtout les peaux sensibles et abîmées.",
            en: "This is the basic and soothing skincare line. It focuses on repairing the skin barrier and treating redness and sensitivity.\n\nFunction: Hydrate, soothe, and repair.\n\nKey ingredient: Pure centella asiatica extract.\n\nSuitable for: All skin types, especially sensitive and damaged skin."
        },
        inStock: true,
        isNew: false
    },
    {
        id: "tea_trica",
        name: { ar: "Tea-Trica", fr: "Tea-Trica", en: "Tea-Trica" },
        price: 1100,
        originalPrice: null,
        image: "img/Tea-Trica.JPG",
        category: "skincare",
        description: {
            ar: "مجموعة متخصصة في العناية بالبشرة التي تعاني من البثور والتهيج المفاجئ.\n\nالوظيفة: التحكم في الدهون، تهدئة حب الشباب، وتنقية المسام.\n\nالمكون الأساسي: مزيج من شجرة الشاي وسنتيلا أسياتيكا (تريكا).\n\nمناسبة لـ: البشرة الدهنية والمعرضة لحب الشباب.",
            fr: "Gamme spécialisée dans les soins des peaux souffrant d'éruptions cutanées et d'irritations soudaines.\n\nFonction : Contrôler l'excès de sébum, apaiser l'acné et purifier les pores.\n\nIngrédient clé : Mélange d'arbre à thé et de centella asiatica (Trica).\n\nConvient à : Les peaux grasses et sujettes à l'acné.",
            en: "A specialized line for skin suffering from breakouts and sudden irritation.\n\nFunction: Control oil, soothe acne, and purify pores.\n\nKey ingredient: Blend of tea tree and centella asiatica (Trica).\n\nSuitable for: Oily and acne-prone skin."
        },
        inStock: true,
        isNew: true
    },
    {
        id: "poremizing",
        name: { ar: "Poremizing", fr: "Poremizing", en: "Poremizing" },
        price: 1100,
        originalPrice: null,
        image: "img/Poremizing.JPG",
        category: "skincare",
        description: {
            ar: "تركز هذه المجموعة على تحسين مظهر المسام الواسعة وتنظيفها بعمق.\n\nالوظيفة: شد المسام، إزالة الرؤوس السوداء، وتحسين ملمس الجلد.\n\nالمكون الأساسي: ملح الهيمالايا الوردي.\n\nمناسبة لـ: البشرة الدهنية والمختلطة التي تعاني من مسام بارزة.",
            fr: "Cette gamme se concentre sur l'amélioration de l'apparence des pores dilatés et leur nettoyage en profondeur.\n\nFonction : Resserrer les pores, éliminer les points noirs et améliorer la texture de la peau.\n\nIngrédient clé : Sel rose de l'Himalaya.\n\nConvient à : Les peaux grasses et mixtes souffrant de pores visibles.",
            en: "This line focuses on improving the appearance of enlarged pores and deep cleaning them.\n\nFunction: Tighten pores, remove blackheads, and improve skin texture.\n\nKey ingredient: Himalayan pink salt.\n\nSuitable for: Oily and combination skin with visible pores."
        },
        inStock: true,
        isNew: true
    },
    {
        id: "hyalu_cica",
        name: { ar: "Hyalu-Cica", fr: "Hyalu-Cica", en: "Hyalu-Cica" },
        price: 1100,
        originalPrice: null,
        image: "img/Hyalu-Cica.JPG",
        category: "skincare",
        description: {
            ar: "مجموعة مخصصة للبشرة التي تعاني من الجفاف وفقدان الحيوية.\n\nالوظيفة: ترطيب عميق، منع فقدان الماء، وإعطاء لمعة صحية.\n\nالمكون الأساسي: مزيج من حمض الهيالورونيك والسنتيلا.\n\nمناسبة لـ: البشرة الجافة والبشرة الباهتة.",
            fr: "Gamme dédiée aux peaux souffrant de sécheresse et de perte de vitalité.\n\nFonction : Hydratation profonde, prévention de la perte d'eau et éclat sain.\n\nIngrédient clé : Mélange d'acide hyaluronique et de centella.\n\nConvient à : Les peaux sèches et ternes.",
            en: "A line dedicated to skin suffering from dryness and loss of vitality.\n\nFunction: Deep hydration, prevention of water loss, and healthy glow.\n\nKey ingredient: Blend of hyaluronic acid and centella.\n\nSuitable for: Dry and dull skin."
        },
        inStock: true,
        isNew: true
    },
    {
        id: "tone_brightening",
        name: { ar: "Tone Brightening", fr: "Tone Brightening", en: "Tone Brightening" },
        price: 1100,
        originalPrice: null,
        image: "img/ToneBrightening.JPG",
        category: "skincare",
        description: {
            ar: "تعمل هذه المجموعة على توحيد لون البشرة والتخلص من التصبغات وآثار الحبوب.\n\nالوظيفة: تفتيح البقع الداكنة، توحيد لون البشرة، وإعطاء إشراقة.\n\nالمكون الأساسي: مادة \"ماديكاسوسايد\" والنياسيناميد.\n\nمناسبة لـ: البشرة التي تعاني من التصبغات والبهتان.",
            fr: "Cette gamme unifie le teint et élimine les pigmentation et les marques d'acné.\n\nFonction : Éclaircir les taches sombres, unifier le teint et donner de l'éclat.\n\nIngrédient clé : Madécassoside et niacinamide.\n\nConvient à : Les peaux souffrant de pigmentation et de ternissement.",
            en: "This line evens out skin tone and eliminates pigmentation and acne scars.\n\nFunction: Brighten dark spots, even out skin tone, and give radiance.\n\nKey ingredient: Madecassoside and niacinamide.\n\nSuitable for: Skin suffering from pigmentation and dullness."
        },
        inStock: true,
        isNew: false
    },
    {
        id: "purito_best",
        name: { ar: "Purito Best Kit", fr: "Purito Best Kit", en: "Purito Best Kit" },
        price: 1100,
        originalPrice: null,
        image: "img/PuritoBest.JPG",
        category: "skincare",
        description: {
            ar: "علامة \"بوريتو\" تركز على المكونات النظيفة والآمنة لتقوية حاجز البشرة.\n\nالوظيفة: تغذية البشرة، تقوية الحاجز الطبيعي، وتوفير عناية يومية متوازنة.\n\nالمكون الأساسي: البانثينول، السنتيلا، ومستخلصات نباتية مهدئة.\n\nمناسبة لـ: البشرة الحساسة والتي تحتاج إلى تغذية عميقة.",
            fr: "La marque \"Purito\" se concentre sur des ingrédients propres et sûrs pour renforcer la barrière cutanée.\n\nFonction : Nourrir la peau, renforcer la barrière naturelle et fournir des soins quotidiens équilibrés.\n\nIngrédients clés : Panthénol, centella et extraits de plantes apaisants.\n\nConvient à : Les peaux sensibles qui ont besoin d'une nutrition profonde.",
            en: "The \"Purito\" brand focuses on clean and safe ingredients to strengthen the skin barrier.\n\nFunction: Nourish the skin, strengthen the natural barrier, and provide balanced daily care.\n\nKey ingredients: Panthenol, centella, and soothing plant extracts.\n\nSuitable for: Sensitive skin that needs deep nourishment."
        },
        inStock: true,
        isNew: false
    },
    {
        id: "brightening_scrub",
        name: { ar: "Brightening Facial Scrub", fr: "Brightening Facial Scrub", en: "Brightening Facial Scrub" },
        price: 700,
        originalPrice: null,
        image: "img/Brightening.JPG",
        category: "skincare",
        description: {
            ar: "واحد من أشهر المقشرات الفيزيائية عالمياً وحاصل على عدة جوائز بفضل تركيبته الفعالة والنباتية.\n\n1. وظيفة المنتج الأساسية:\nيعمل هذا المقشر على إزالة خلايا الجلد الميتة والشوائب العالقة في المسام، مما يساعد في تحويل البشرة من باهتة ومجهدة إلى بشرة أكثر إشراقاً ونعومة.\n\n2. المكونات الرئيسية:\n• عشب البحر (Sea Kelp): غني بالمعادن التي تنقي البشرة وتغذيها.\n• الطين الأخضر الفرنسي (French Green Clay): يعمل كالمغناطيس لسحب الدهون والشوائب من داخل المسام.\n• قشور الليمون وقصب السكر: توفر تقشيراً لطيفاً وتساعد في تفتيح لون البشرة.\n• خلايا جذعية من مريمية ليلية: توفر حماية ومضادات أكسدة للبشرة.\n\n3. المميزات:\n• نباتي 100% (Vegan): خالٍ من القسوة ولا يحتوي على مكونات حيوانية.\n• نظيف (Clean Beauty): خالٍ من البارابين، الكبريتات، الفتالات، والزيوت المعدنية.\n• نتائج فورية: ستلاحظين نعومة واضحة في ملمس الجلد بعد أول استخدام.",
            fr: "L'un des gommages physiques les plus célèbres au monde, primé à plusieurs reprises grâce à sa formule efficace et végétale.\n\n1. Fonction principale du produit :\nCe gommage élimine les cellules mortes et les impuretés obstruant les pores, transformant une peau terne et fatiguée en une peau plus lumineuse et plus douce.\n\n2. Ingrédients clés :\n• Varech (Sea Kelp) : Riche en minéraux qui purifient et nourrissent la peau.\n• Argile verte française : Agit comme un aimant pour extraire le sébum et les impuretés des pores.\n• Zeste de citron et canne à sucre : Exfolient en douceur et aident à éclaircir le teint.\n• Cellules souches de sauge de nuit : Offrent une protection et des antioxydants à la peau.\n\n3. Avantages :\n• 100% Végétalien : Sans cruauté et sans ingrédients d'origine animale.\n• Clean Beauty : Sans parabènes, sulfates, phtalates ni huiles minérales.\n• Résultats immédiats : Une douceur visible de la texture de la peau dès la première utilisation.",
            en: "One of the most famous physical scrubs in the world, award-winning thanks to its effective and plant-based formula.\n\n1. Main product function:\nThis scrub removes dead skin cells and impurities clogging pores, helping to transform dull, tired skin into brighter, smoother skin.\n\n2. Key ingredients:\n• Sea Kelp: Rich in minerals that purify and nourish the skin.\n• French Green Clay: Acts like a magnet to draw out oil and impurities from pores.\n• Lemon peel and sugar cane: Gently exfoliate and help brighten skin tone.\n• Night primrose stem cells: Provide protection and antioxidants to the skin.\n\n3. Benefits:\n• 100% Vegan: Cruelty-free and contains no animal ingredients.\n• Clean Beauty: Free from parabens, sulfates, phthalates, and mineral oils.\n• Immediate results: Noticeable smoothness in skin texture after first use."
        },
        inStock: true,
        isNew: true
    },
    {
        id: "gluta_collagen",
        name: { ar: "Gluta Collagen Pin", fr: "Gluta Collagen Pin", en: "Gluta Collagen Pin" },
        price: 850,
        originalPrice: null,
        image: "img/GlutaCollagenPin.JPG",
        category: "skincare",
        description: {
            ar: "يجمع المنتج بين عدة عناصر مشهورة في عالم التجميل:\n\n• الجلوتاثيون (Gluta): يُعرف بدوره كمضاد للأكسدة قوي، ويُستخدم غالباً بهدف تفتيح لون البشرة وتوحيدها.\n\n• الكولاجين (Collagen): تحديداً \"Collagen Dipeptide\"، وهو نوع سهل الامتصاص يساعد في مرونة البشرة وتقليل التجاعيد.\n\n• مستخلصات الفواكه الحمراء: يحتوي على الطماطم، الفراولة، التوت، والكرز (Acerola Cherry)، وهي مصادر غنية بفيتامين C الذي يعزز امتصاص الكولاجين ويحمي البشرة من الإجهاد التأكسدي.\n\nتفاصيل العبوة:\n• الكمية: تحتوي الحقيبة على 30 ظرفاً (Sachet)، وزن كل ظرف 10 جرام.",
            fr: "Ce produit combine plusieurs éléments célèbres dans le monde de la beauté :\n\n• Glutathion (Gluta) : Connu comme un puissant antioxydant, souvent utilisé pour éclaircir et unifier le teint.\n\n• Collagène : Spécifiquement \"Collagen Dipeptide\", un type facilement absorbable qui aide à l'élasticité de la peau et à la réduction des rides.\n\n• Extraits de fruits rouges : Contient tomate, fraise, framboise et cerise acérola, riches en vitamine C qui améliore l'absorption du collagène et protège la peau du stress oxydatif.\n\nDétails de l'emballage :\n• Quantité : Le sachet contient 30 sticks de 10 grammes chacun.",
            en: "This product combines several famous elements in the beauty world:\n\n• Glutathione (Gluta): Known as a powerful antioxidant, often used to brighten and even out skin tone.\n\n• Collagen: Specifically \"Collagen Dipeptide\", an easily absorbable type that helps with skin elasticity and wrinkle reduction.\n\n• Red fruit extracts: Contains tomato, strawberry, raspberry, and acerola cherry, rich in vitamin C which enhances collagen absorption and protects the skin from oxidative stress.\n\nPackage details:\n• Quantity: The bag contains 30 sachets, each weighing 10 grams."
        },
        inStock: true,
        isNew: true
    }
];

// ============ FUNCTIONS ============
function getAllProducts() { 
    // الترتيب: comingSoon أولاً، ثم isNew، ثم الباقي
    const comingSoonProducts = productsData.filter(p => p.comingSoon === true);
    const newProducts = productsData.filter(p => p.isNew === true && p.comingSoon !== true);
    const otherProducts = productsData.filter(p => p.isNew !== true && p.comingSoon !== true);
    return [...comingSoonProducts, ...newProducts, ...otherProducts];
}

function getProductById(id) {
    return productsData.find(p => p.id === id);
}

function getProductsByCategory(category) {
    if (!category || category === 'all') return productsData;
    return productsData.filter(p => p.category === category);
}

function getNewProducts() {
    return productsData.filter(p => p.isNew === true);
}

function searchProducts(query) {
    const lang = getCurrentLanguage();
    const searchTerm = query.toLowerCase();
    return productsData.filter(p => {
        const name = p.name[lang] || p.name['en'];
        const desc = p.description[lang] || p.description['en'];
        return name.toLowerCase().includes(searchTerm) || desc.toLowerCase().includes(searchTerm);
    });
}

function getProductName(product) {
    const lang = getCurrentLanguage();
    return product.name[lang] || product.name['en'] || product.name.ar;
}

function getProductDescription(product) {
    const lang = getCurrentLanguage();
    return product.description[lang] || product.description['en'] || product.description.ar || '';
}

function formatPrice(price) {
    const currency = t('price_currency') || 'MRU';
    return `${price.toLocaleString()} ${currency}`;
}

function getAllCategories() {
    return ['new', 'makeup', 'skincare', 'perfumes'];
}

function getCategoryKey(category) {
    const map = {
        'new': 'cat_new',
        'makeup': 'cat_makeup',
        'skincare': 'cat_skincare',
        'perfumes': 'cat_perfumes'
    };
    return map[category] || 'cat_other';
}

// ============ VARIANT HELPERS ============
function getProductVariants(productId) {
    const product = getProductById(productId);
    return product && product.variants ? product.variants : [];
}

function getVariantById(productId, variantId) {
    const variants = getProductVariants(productId);
    return variants.find(v => v.id === variantId);
}

function getVariantName(variant) {
    if (!variant) return '';
    const lang = getCurrentLanguage();
    return variant.name[lang] || variant.name.en || '';
}

function getEffectivePrice(product, variantId = null) {
    if (variantId) {
        const variant = getVariantById(product.id, variantId);
        if (variant) return variant.price;
    }
    return product.price;
}