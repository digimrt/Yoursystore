// Product Data for Yoursy Store
// Pink Rose Theme - All Products with Variants

// نسبة الخصم العامة (مثلاً 30%)
const GLOBAL_DISCOUNT_PERCENT = 30; // غيّر الرقم هنا لتغيير الخصم

const productsData = [

    {
        id: "lip_balm",
        name: { ar: "Lip Balm", fr: "Lip Balm", en: "Lip Balm" },
        subtitle: null,
        price: 260,
        originalPrice: null,
        image: "img1/lipbalmwildcherry.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "lip_balm_wild_cherry", name: { ar: "Wild Cherry", fr: "Wild Cherry", en: "Wild Cherry" }, price: 260, image: "img1/lipbalmwildcherry.JPG", inStock: true },
            { id: "lip_balm_strawberry", name: { ar: "Strawberry Shortcake", fr: "Strawberry Shortcake", en: "Strawberry Shortcake" }, price: 260, image: "img1/lipbalmstrawberry.JPG", inStock: true },
            { id: "lip_balm_vanilla", name: { ar: "Vanilla Toffee", fr: "Vanilla Toffee", en: "Vanilla Toffee" }, price: 260, image: "img1/lipbalmvanilla.JPG", inStock: false },
            { id: "lip_balm_gummy", name: { ar: "Yummy Gummy", fr: "Yummy Gummy", en: "Yummy Gummy" }, price: 260, image: "img1/lipbalmgummy.JPG", inStock: true }
        ]
    },
    

    {
        id: "honey_waffles",
        name: { ar: "Honey Waffles 03", fr: "Honey Waffles 03", en: "Honey Waffles 03" },
        price: 350,
        originalPrice: null,
        image: "img1/waffleshoney.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },

    {
        id: "nearly_collection",
        name: { ar: "Nearly", fr: "Nearly", en: "Nearly" },
        price: 300,
        originalPrice: null,
        image: "img1/nearlyneturel.JPG",
        category: "makeup", 
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "nearly_neutral", name: { ar: "neutral", fr: "neutral", en: "neutral" }, price: 300, image: "img1/nearlyneturel.JPG", inStock: true },
            { id: "nearly_mauve", name: { ar: "Mauve", fr: "Mauve", en: "Mauve" }, price: 300, image: "img1/nearlymauve.JPG", inStock: true },
            { id: "nearly_apricot", name: { ar: "Apricot", fr: "Apricot", en: "Apricot" }, price: 300, image: "img1/nearlyapricot.JPG", inStock: true },
            { id: "nearly_rose", name: { ar: "rose", fr: "rose", en: "rose" }, price: 300, image: "img1/nearlyrose.JPG", inStock: true },

            ]
    },

    {
        id: "gorg_orange",
        name: { ar: "Gorg Orange", fr: "Gorg Orange", en: "Gorg Orange" },
        subtitle: null,
        price: 260,
        originalPrice: null,
        image: "img1/gorgorange.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "wild_berry",
        name: { ar: "Wild Berry", fr: "Wild Berry", en: "Wild Berry" },
        subtitle: null,
        price: 260,
        originalPrice: null,
        image: "img1/wildberry.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "nearly_mauve_prod",
        name: { ar: "Nearly Mauve", fr: "Nearly Mauve", en: "Nearly Mauve" },
        subtitle: null,
        price: 260,
        originalPrice: null,
        image: "img1/nearlymauveprod.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "powder_rare_beauty",
        name: { ar: "Powder Rare Beauty", fr: "Powder Rare Beauty", en: "Powder Rare Beauty" },
        subtitle: { ar: "Natural", fr: "Natural", en: "Natural" },
        price: 300,
        originalPrice: null,
        image: "img1/powderrarebeauty.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "corrector_cherry_blossom",
        name: { ar: "Corrector Cherry Blossom", fr: "Corrector Cherry Blossom", en: "Corrector Cherry Blossom" },
        subtitle: null,
        price: 360,
        originalPrice: null,
        image: "img1/correctorcherryblossom.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "concealer_nougat",
        name: { ar: "Concealer Nougat", fr: "Concealer Nougat", en: "Concealer Nougat" },
        subtitle: null,
        price: 360,
        originalPrice: null,
        image: "img1/concealernougat.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "gloss_serum_nyx",
        name: { ar: "Gloss Serum NYX", fr: "Gloss Serum NYX", en: "Gloss Serum NYX" },
        subtitle: null,
        price: 260,
        originalPrice: null,
        image: "img1/glosserumnyx.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "pack_stay_matte_rimmel",
        name: { ar: "Pack Stay Matte Rimmel London", fr: "Pack Stay Matte Rimmel London", en: "Pack Stay Matte Rimmel London" },
        subtitle: null,
        price: 1000,
        originalPrice: null,
        image: "img1/packstaymatterimmel.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "eyeliner_sheglam",
        name: { ar: "Eyeliner Sheglam", fr: "Eyeliner Sheglam", en: "Eyeliner Sheglam" },
        subtitle: null,
        price: 250,
        originalPrice: null,
        image: "img1/eyelinersheglam.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "kohl_christine",
        name: { ar: "Kohl Christine", fr: "Kohl Christine", en: "Kohl Christine" },
        subtitle: null,
        price: 300,
        originalPrice: null,
        image: "img1/kohlchristine.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },

    // ================= فئة الـ SKINCARE =================
    {
        id: "dove_spray",
        name: { ar: "Dove Spray", fr: "Dove Spray", en: "Dove Spray" },
        subtitle: null,
        price: 300,
        originalPrice: null,
        image: "img1/doveoriginal.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        variants: [
            { id: "dove_original", name: { ar: "Original", fr: "Original", en: "Original" }, price: 300, image: "img1/doveoriginal.JPG", inStock: true },
            { id: "dove_apple", name: { ar: "Apple  White Tea Scent", fr: "Apple & White Tea Scent", en: "Apple & White Tea Scent" }, price: 300, image: "img1/doveapple.JPG", inStock: true },
            { id: "dove_cucumber", name: { ar: "Cucumber and Green Tea Scent", fr: "Cucumber & Green Tea Scent", en: "Cucumber & Green Tea Scent" }, price: 300, image: "img1/dovecucumber.JPG", inStock: true },
            { id: "dove_pomegranate", name: { ar: "Pomegranate and Lemon Verbena Scent", fr: "Pomegranate & Lemon Verbena Scent", en: "Pomegranate & Lemon Verbena Scent" }, price: 300, image: "img1/dovepomegranate.JPG", inStock: true }
        ]
    },
    {
        id: "creme_deodorant",
        name: { ar: "Creme Deodorant", fr: "Creme Deodorant", en: "Creme Deodorant" },
        subtitle: null,
        price: 300,
        originalPrice: null,
        image: "img1/cremedeodorant.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        discount: 10  // ✅ خصم 10%
    },
    {
        id: "gillette_venus_breeze",
        name: { ar: "Gillette Venus", fr: "Gillette Venus", en: "Gillette Venus" },
        subtitle: { ar: "Comfortglide Breeze", fr: "Comfortglide Breeze", en: "Comfortglide Breeze" },
        price: 550,
        originalPrice: null,
        image: "img1/gillettevenus_breeze.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        discount: 10  // ✅ خصم 10%
    },
    {
        id: "gillette_venus_coconut",
        name: { ar: "Gillette Venus", fr: "Gillette Venus", en: "Gillette Venus" },
        subtitle: { ar: "Comfortglide Coconut", fr: "Comfortglide Coconut", en: "Comfortglide Coconut" },
        price: 750,
        originalPrice: null,
        image: "img1/gillettevenus_coconut.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        discount: 10  // ✅ خصم 10%
    },
    {
        id: "gillette_venus_tropical",
        name: { ar: "Gillette Venus", fr: "Gillette Venus", en: "Gillette Venus" },
        subtitle: { ar: "Pro Comfortglide Tropical", fr: "Pro Comfortglide Tropical", en: "Pro Comfortglide Tropical" },
        price: 670,
        originalPrice: null,
        image: "img1/gillettevenus_tropical.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        discount: 10  // ✅ خصم 10%
    },
    
    {
        id: "body_butterglower",
        name: { ar: "Scrub dove", fr: "Scrub dove", en: "Scrub dove" },
        subtitle: { ar: " brown sugar and coconut butter", fr: " brown sugar and coconut butter", en: " brown sugar and coconut butter" },
        price: 750,
        originalPrice: null,
        image: "img1/brownsugar.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "body_butterglowiing",
        name: { ar: "Scrub dove", fr: "Scrub dove", en: "Scrub dove" },
        subtitle: { ar: "colloidal oatmeal and calendula oil", fr: "colloidal oatmeal and calendula oil", en: "colloidal oatmeal and calendula oil" },
        price: 750,
        originalPrice: null,
        image: "img1/oatmealll.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "body_dovewasher",
        name: { ar: "Dove", fr: "Dove", en: "Dove" },
        subtitle: { ar: "Pink", fr: "Pink", en: "Pink" },
        price: 150,
        originalPrice: null,
        image: "img1/dovepinkk.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "body_dovewasherpampering",
        name: { ar: "Dove", fr: "Dove", en: "Dove" },
        subtitle: { ar: "Pampering", fr: "Pampering", en: "Pampering" },
        price: 150,
        originalPrice: null,
        image: "img1/dovePamperingk.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "body_dovewasherrelaxing",
        name: { ar: "Dove", fr: "Dove", en: "Dove" },
        subtitle: { ar: "Relaxing", fr: "Relaxing", en: "Relaxing" },
        price: 150,
        originalPrice: null,
        image: "img1/doveRelaxingk.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "body_dovewasherrefreshing",
        name: { ar: "Dove", fr: "Dove", en: "Dove" },
        subtitle: { ar: "Refreshing", fr: "Refreshing", en: "Refreshing" },
        price: 150,
        originalPrice: null,
        image: "img1/doveRefreshingk.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "body_dovewasherexfoliating",
        name: { ar: "Dove", fr: "Dove", en: "Dove" },
        subtitle: { ar: "Gentle Exfoliating", fr: "Gentle Exfoliating", en: "Gentle Exfoliating" },
        price: 150,
        originalPrice: null,
        image: "img1/dovewasherexfoliating.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "body_washinthestarss",
        name: { ar: "Body Wash", fr: "Body Wash", en: "Body Wash" },
        subtitle: { ar: "In The Stars", fr: "In The Stars", en: "In The Stars" },
        price: 900,
        originalPrice: null,
        image: "img1/bodywashinthestars.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "body_washintothenight",
        name: { ar: "Body Wash", fr: "Body Wash", en: "Body Wash" },
        subtitle: { ar: "Into The Night", fr: "Into The Night", en: "Into The Night" },
        price: 900,
        originalPrice: null,
        image: "img1/bodywashintothenightt.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "body_washthousandwishess",
        name: { ar: "Body Wash", fr: "Body Wash", en: "Body Wash" },
        subtitle: { ar: "A Thousand Wishes", fr: "A Thousand Wishes", en: "A Thousand Wishes" },
        price: 900,
        originalPrice: null,
        image: "img1/dovathousandlotions.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "body_lotioninthestarss",
        name: { ar: "Body Lotion", fr: "Body Lotion", en: "Body Lotion" },
        subtitle: { ar: "In The Stars", fr: "In The Stars", en: "In The Stars" },
        price: 900,
        originalPrice: null,
        image: "img1/starslotionwashbody.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "body_lotionthusandwishess",
        name: { ar: "Body Lotion", fr: "Body Lotion", en: "Body Lotion" },
        subtitle: { ar: "A Thousand Wishes", fr: "A Thousand Wishes", en: "A Thousand Wishes" },
        price: 900,
        originalPrice: null,
        image: "img1/lotionthusandwishess.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "mixapommade",
        name: { ar: "Mixa Cica Réperation", fr: "Mixa Cica Réperation", en: "Mixa Cica Réperation" },
        subtitle: { ar: "", fr: "", en: "" },
        price: 550,
        originalPrice: null,
        image: "img/mixareperatiojn.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "finefraganceinthestars",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "In The Stars", fr: "In The Stars", en: "In The Stars" },
        price: 900,
        originalPrice: null,
        image: "img/finefraganceinthestars.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "purewonderpafume",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "Pure Wonder", fr: "Pure Wonder", en: "Pure Wonder" },
        price: 900,
        originalPrice: null,
        image: "img/purewonderpafume.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "athousandwishesparfumee",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "A Thousand Wishes", fr: "A Thousand Wishes", en: "A Thousand Wishes" },
        price: 900,
        originalPrice: null,
        image: "img/athousandwishesparfumee.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "ifyoumuskparfume",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "If You Musk", fr: "If You Musk", en: "If You Musk" },
        price: 900,
        originalPrice: null,
        image: "img/ifyoumuskparfume.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "atthebeachparfume",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "At The Beach", fr: "At The Beach", en: "At The Beach" },
        price: 900,
        originalPrice: null,
        image: "img/atthebeachparfume.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "strawberryflirtparfumee",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "Strawberry Flirt", fr: "Strawberry Flirt", en: "Strawberry Flirt" },
        price: 900,
        originalPrice: null,
        image: "img/strawberryflirtparfumee.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    {
        id: "midnightaddictionparfumee",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "Midnight Addiction", fr: "Midnight Addiction", en: "Midnight Addiction" },
        price: 900,
        originalPrice: null,
        image: "img/midnightaddictionparfumee.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "platinumparfumee",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "Platinum", fr: "Platinum", en: "Platinum" },
        price: 900,
        originalPrice: null,
        image: "img/platinumparfumee.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "vanillaromanceparfumee",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "Vanilla Romance", fr: "Vanilla Romance", en: "Vanilla Romance" },
        price: 900,
        originalPrice: null,
        image: "img/vanillaromanceparfumee.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "warmvanlsugar",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "Warm Vanilla Sugar", fr: "Warm Vanilla Sugar", en: "Warm Vanilla Sugar" },
        price: 900,
        originalPrice: null,
        image: "img/warmvanlsugar.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false
    },
    {
        id: "Intothenightparfumee",
        name: { ar: "Fine Fragrance Mist", fr: "Fine Fragrance Mist", en: "Fine Fragrance Mist" },
        subtitle: { ar: "Into The Night", fr: "Into The Night", en: "Into The Night" },
        price: 900,
        originalPrice: null,
        image: "img/Intothenightparfumee.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
        isNew: false
    },
    


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
            { id: "lipgloss_espresso", name: { ar: "Espresso", fr: "Espresso", en: "Espresso" }, price: 200, image: "img/espresso.JPG", inStock: false },
            { id: "lipgloss_raspberry", name: { ar: "Raspberry Jelly", fr: "Raspberry Jelly", en: "Raspberry Jelly" }, price: 200, image: "img/raspberry-jelly.JPG", inStock: false },
            { id: "lipgloss_ribbon", name: { ar: "Ribbon", fr: "Ribbon", en: "Ribbon" }, price: 200, image: "img/ribbon.JPG", inStock: true },
            { id: "lipgloss_toast", name: { ar: "Toast", fr: "Toast", en: "Toast" }, price: 200, image: "img/toast.JPG", inStock: false },
            { id: "lipgloss_peachpit", name: { ar: "Peach Pit", fr: "Peach Pit", en: "Peach Pit" }, price: 200, image: "img/peach-pit.JPG", inStock: true },
            { id: "lipgloss_juava", name: { ar: "Juava Spritz", fr: "Juava Spritz", en: "Juava Spritz" }, price: 200, image: "img/juava-spritz.JPG", inStock: true },
            { id: "lipgloss_vanilla", name: { ar: "Vanilla", fr: "Vanilla", en: "Vanilla" }, price: 200, image: "img/vanilla.JPG", inStock: false }
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
            { id: "blush_encourage", name: { ar: "Encourage", fr: "Encourage", en: "Encourage" }, price: 200, image: "img/encourage.JPG", inStock: false },
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
            { id: "blush_sleepygirl", name: { ar: "Sleepy Girl", fr: "Sleepy Girl", en: "Sleepy Girl" }, price: 200, image: "img/sleepy-girl.JPG", inStock: false },
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
            { id: "vs_rush", name: { ar: "Rush", fr: "Rush", en: "Rush" }, price: 600, image: "img/rush.JPG", inStock: true },
            { id: "vs_aquakiss", name: { ar: "Aqua Kiss", fr: "Aqua Kiss", en: "Aqua Kiss" }, price: 600, image: "img/aqua-kiss.JPG", inStock: true },
            { id: "vs_amber", name: { ar: "Amber Romance", fr: "Amber Romance", en: "Amber Romance" }, price: 600, image: "img/amber-romance.JPG", inStock: true },
            { id: "vs_velvet", name: { ar: "Velvet Petals", fr: "Velvet Petals", en: "Velvet Petals" }, price: 600, image: "img/velvetpetals.JPG", inStock: true },
            { id: "vs_Teptation", name: { ar: "Teptation", fr: "Teptation", en: "Teptation" }, price: 600, image: "img1/teptation.JPG", inStock: true }
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
            { id: "sol_76", name: { ar: "76", fr: "76", en: "76" }, price: 300, image: "img1/sol-de-janeiro76.JPG", inStock: true },
            { id: "sol_62", name: { ar: "62", fr: "62", en: "62" }, price: 300, image: "img/sol-de-janeiro62.JPG", inStock: false },
            { id: "sol_87", name: { ar: "87", fr: "87", en: "87" }, price: 300, image: "img/sol-de-janeiro87.JPG", inStock: true },
            { id: "sol_40", name: { ar: "40", fr: "40", en: "40" }, price: 300, image: "img/sol-de-janeiro40.JPG", inStock: false },
            { id: "sol_59", name: { ar: "59", fr: "59", en: "59" }, price: 300, image: "img/sol-de-janeiro59.JPG", inStock: false },
            { id: "sol_71", name: { ar: "71", fr: "71", en: "71" }, price: 300, image: "img/sol-de-janeiro71.JPG", inStock: true },
            { id: "sol_48", name: { ar: "48", fr: "48", en: "48" }, price: 300, image: "img/sol-de-janeiro48.JPG", inStock: true },
            { id: "sol_39", name: { ar: "39", fr: "39", en: "39" }, price: 300, image: "img/sol-de-janeiro39.JPG", inStock: true }
            
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
            { id: "oil_yara", name: { ar: "يارا", fr: "Yara", en: "Yara" }, price: 150, image: "img/yara.JPG", inStock: false },
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
        id: "dove_deodorant",
        name: { ar: "Dove Deodorant", fr: "Dove Deodorant", en: "Dove Deodorant" },
        price: 250,
        originalPrice: null,
        image: "img/dove-deodorant.JPG",
        category: "skincare",
        description: { ar: "", fr: "", en: "" },
        inStock: false,
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
        inStock: false,
        isNew: false
    },

    // ============ INDIVIDUAL MAKEUP PRODUCTS ============
    
    {
        id: "gel_got2b",
        name: { ar: "Gel Got2b", fr: "Gel Got2b", en: "Gel Got2b" },
        price: 320,
        originalPrice: null,
        image: "img/gelgot2b.JPG",
        category: "makeup",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        discount: 10  // ✅ خصم 10%
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
        isNew: false,
        discount: 10  // ✅ خصم 10%
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
        image: "img1/pack_daily_scent.JPG",
        category: "perfumes",
        description: { ar: "", fr: "", en: "" },
        inStock: true,
        isNew: false,
        discount: 10  // ✅ خصم 10%
    },

    // ============ NEW ARRIVALS (isNew: false) ============
    
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
        isNew: false,
        discount: 10  // ✅ خصم 10%
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
        isNew: false,
        discount: 10  // ✅ خصم 10%
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
        isNew: false,
        discount: 10  // ✅ خصم 10%
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
        isNew: false,
        discount: 10  // ✅ خصم 10%
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
        isNew: false,
        discount: 10  // ✅ خصم 10%
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

function getProductSubtitle(product) {
    const lang = getCurrentLanguage();
    return product.subtitle?.[lang] || product.subtitle?.en || '';
}

function getEffectivePrice(product, variantId = null) {
    if (variantId) {
        const variant = getVariantById(product.id, variantId);
        if (variant) return variant.price;
    }
    return product.price;
}